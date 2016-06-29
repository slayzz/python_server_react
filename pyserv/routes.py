import controllers
import logging
import urllib.parse as urlprs
import re
import os

class Route(controllers.Controller):
    routes = {
        '/' : 'index:main',
        '/help/': 'help:main'
    }

    mimeTypes = {
        '.txt': 'text/plain',
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
    }

    def __init__(self, handler):
        self.handler = handler
        self.path   = self.handler.path
        self.query = urlprs.urlparse(self.path)[4]
        self.queryParams = self.__parseQuery(self.query)


    def __content_type(self, path):
        name, ext = os.path.splitext(path)
        if ext:
            if ext in self.mimeTypes:
                return self.mimeTypes[ext]
            else:
                return 'application/octet-stream'


    def __parseQuery(self, query):
        queDict = {}
        if (query):
            try:
                pars = query.split('&')
                for que in pars:
                    param = que.split('=')
                    queDict[param[0]] = param[1]
            except Exception:
                print('Error when parse string')
                return {}
        # print(queDict)
        return queDict



    def __getHeaders(self):
        print(self.handler.headers.items())


    def __staticResponse(self, staticDir = '/'):
        st = self.__content_type(self.path)
        if  st is not None:
            # print(staticDir + self.path, os.path.exists(staticDir + self.path))
            f = open(staticDir + self.path, 'rb')
            # print('and headers is ->>',st)
            self.handler.send_response(code=200)
            self.handler.send_header('content-type', st)
            self.handler.end_headers()
            self.handler.wfile.write(f.read())
            return True
        return False

    def notFound(self,handler):
        logging.warning('Not Found Page -> 404')
        handler.send_response(code=404,message='not found your page')
        handler.send_header('content-type','text/html')
        handler.end_headers()
        handler.wfile.write(b'<h1>Error, You page not found</h1>')

    def run(self):
        flag = False
        if os.path.exists('./public'+self.path):
            if not self.__staticResponse('./public'):
                for n in self.routes:
                    if re.fullmatch(r"^%s\??|$[a-zA-Z=&]{0,}$" % n,self.path):
                        print(r"^%s\??|$[a-zA-Z=&]{0,}$" % n)
                        flag = True
                        rout = self.routes[n].split(':')

                if flag:
                    className = getattr(self, rout[0])
                    getattr(className,rout[1])(handler=self.handler)

                else:
                    self.notFound(self.handler)


        flag = False
