import socket
import re
from http.server import HTTPServer, BaseHTTPRequestHandler, HTTPStatus
from test_handler import testHandler


class BaseHandler(BaseHTTPRequestHandler):
    def __init__(self, request, client_address, _self, routes=None):
        self.routes = routes
        return super(BaseHandler, self).__init__(request, client_address, _self)

    def get_handler(self):
        pattern = re.compile(self.path)
        for route, handler in self.routes:
            if re.search(pattern, route) is not None:
                return handler
        return None

    def handle_one_request(self):
        try:
            self.raw_requestline = self.rfile.readline(65537)
            if len(self.raw_requestline) > 65536:
                self.requestline = ''
                self.request_version = ''
                self.command = ''
                self.send_error(HTTPStatus.REQUEST_URI_TOO_LONG)
                return
            if not self.raw_requestline:
                self.close_connection = True
                return
            if not self.parse_request():
                return

            handler = self.get_handler()

            if handler is None:
                self.send_error(HTTPStatus.NOT_FOUND)

            mname = self.command.lower()
            if not hasattr(handler, mname):
                self.send_error(
                    HTTPStatus.NOT_IMPLEMENTED,
                    "Unsupported method (%r)" % self.command)
                return

            h = handler(self)
            method = getattr(h, mname)
            method()
            self.wfile.flush()
        except socket.timeout as e:
            self.log_error("Request timed out: %r", e)
            self.close_connection = True
            return


class Route:
    def __init__(self, routes):
        self.routes = routes

    def __call__(self, request, client_address, _self):
        BaseHandler(request, client_address, _self, routes=self.routes)

app = Route([
    (r'^/', testHandler),
])

print ('server works on port', 8080)
HTTPServer(('localhost', 8080), app).serve_forever()
