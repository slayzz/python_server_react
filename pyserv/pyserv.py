import socket
import re
import os
from urllib.parse import urlparse
from http.server import HTTPServer
from .enchanted import StaticHandler
from .DataStore import initDb


class App(object):
    def __init__(self, routes, static_path=None):
        self.static_path = static_path
        self.static = ''
        self.ds = initDb()
        self.routes = routes
        return super(App, self).__init__()

    def start(self, address, port):
        HTTPServer((address, port), self).serve_forever()

    def get_handler(self, path):
        path = urlparse(path).path
        pattern = re.compile(path)
        for route, handler in self.routes:
            if re.search(pattern, route) is not None:
                return handler

        static_file = os.path.abspath(os.path.join(self.static_path, path[1:]))
        if os.path.isfile(static_file):
            self.static = static_file
            return StaticHandler

        return None

    def linesplit(self, socket):
        _buffer = socket.recv(2)
        buffering = True
        while buffering:
            if b"\n" in _buffer:
                (line, _buffer) = _buffer.split(b"\n", 1)
                return line + b"\n"
            else:
                more = socket.recv(2)
                if not more:
                    buffering = False
                else:
                    _buffer += more
        if _buffer:
            return _buffer

    def __call__(self, request, client_address, _self):
        try:
            requestline = self.linesplit(request).decode()
            path = requestline.split()[1]
            handler = self.get_handler(path)

            if handler is None:
                return
        except socket.timeout as e:
            return
        else:
            handler(request, client_address, _self, requestline, self.ds,self.static)

