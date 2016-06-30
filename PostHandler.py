import DataStore
import urllib.parse

class PostHandler():
    def __init__(self,handler):
        self.handler = handler
        self.data = handler.rfile.peek()
        self.ds = DataStore.DataStore().client
    def __parse(self):
        parseUlr = urllib.parse.parse_qs(self.data)
        for key in parseUlr:
            parseUlr[key]=parseUlr[key].pop(0);
        return parseUlr

    def run(self):
        if (self.handler.path == '/userRegister'):
            dataParse = self.__parse()
            print(dataParse)
            self.handler.send_response(code=200, message='all ok')
            self.handler.end_headers()
            self.handler.wfile.write(b'{"Hello":"ouou"}')

