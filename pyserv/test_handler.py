import json
import io
from .enchanted import EnchantedRequestHandler

class testHandler(EnchantedRequestHandler):
    def get(self):
        # self.send_response(code=200, message='all ok')
        # self.send_header('content-type', 'text/html')
        # self.end_headers()
        # handler.wfile.write(b'<h1>Hello</h1>')
        # print(self.ds)
        print(self.ds)
        f = io.open('./public/templates/index.html', 'r')
        self.write(f.read())

    def post(self):
        self.set_header(name='Content-Type', value='application/json')
        self.write(json.dumps(self.json_body))
