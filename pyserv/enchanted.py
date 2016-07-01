import socket
import re
import os
import json
from mimetypes import guess_type
from urllib.parse import urlparse
from http.server import HTTPServer, BaseHTTPRequestHandler, HTTPStatus
from .DataStore import DataStore


class EnchantedRequestHandler(BaseHTTPRequestHandler):
    def __init__(self, request, client_address, _self, requestline, static=None):
        self.static = static
        self.ALLOWED_METHODS = ['get', 'post', 'option', 'patch', 'delete']
        self._status_code = [200, 'OK']
        self._page = []
        self._headers = {
            'Content-Type': 'text/html',
        }
        self.ds = DataStore();

        self.requestline = requestline
        self.query_params = {}
        self.json_body = {}
        return super(EnchantedRequestHandler, self).__init__(request, client_address, _self)

    def write(self, string):
        self._page.append(string.encode())

    def send_headers(self):
        for name, value in self._headers.items():
            self.send_header(name, value)

    def set_header(self, name=None, value=None):
        self._headers[name] = value

    def parse_query_params(self, query):
        for params in query.split('&'):
            splited_params = params.split('=')
            if len(splited_params) == 1:
                value = None
            else:
                value = splited_params[1]

            self.query_params[splited_params[0]] = value

    def parse_body_params(self):
        content_type = self.headers.get('Content-Type', None)

        if content_type is None:
            return
        if (content_type.find('application/json') != -1):

            length = 0

            if self.headers.get('Content-Length'):
                length = int(self.headers['Content-Length'])

            data = self.rfile.read(length).decode()

            try:
                self.json_body = json.loads(data)
            except Exception:
                pass

    def handle_one_request(self):
        try:
            self.raw_requestline = self.requestline.encode()
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

            mname = self.command.lower()
            if not hasattr(self, mname) and mname not in self.ALLOWED_METHODS:
                self.send_error(
                    HTTPStatus.NOT_IMPLEMENTED,
                    "Unsupported method (%r)" % self.command)
                return
            self.parse_query_params(self.requestline)
            self.parse_body_params()
            method = getattr(self, mname)

            try:
                method()
            except Exception as e:
                self.send_error(500, e.message)
            else:
                self.send_response(*self._status_code)
                self.send_headers()
                self.end_headers()

                for chunk in self._page:
                    self.wfile.write(chunk)

            self.wfile.flush()
        except socket.timeout as e:
            self.log_error("Request timed out: %r", e)
            self.close_connection = True
            return

class StaticHandler(EnchantedRequestHandler):
    def handle_one_request(self):
        try:

            self.raw_requestline = self.requestline.encode()
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

            mime_type, tmp = guess_type(self.static)


            if mime_type is None:
                mime_type = 'application/octet-stream'

            self.set_header(name='Content-Type', value=mime_type)
            self.set_header(name='Content-Length', value=os.path.getsize(self.static))
            self.set_header(name='Accept-Ranges', value='bytes')

            try:
                f = open(self.static, 'rb')
            except Exception as e:
                self.send_error(500, e.message)
            else:
                self.send_response(*self._status_code)
                self.send_headers()
                self.end_headers()
                self.wfile.write(f.read())
            finally:
                f.close()

            self.wfile.flush()
        except socket.timeout as e:
            self.log_error("Request timed out: %r", e)
            self.close_connection = True
            return
