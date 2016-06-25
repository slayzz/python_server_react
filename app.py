import http.server
import routes


class HttpRequest(http.server.BaseHTTPRequestHandler):

    def do_GET(self):
        route = routes.Route(self)
        route.run()

        del route


http.server.HTTPServer(('localhost', 8080), HttpRequest).serve_forever()
