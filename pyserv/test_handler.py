import json

from .enchanted import EnchantedRequestHandler

class testHandler(EnchantedRequestHandler):
    def get(self):
        self.write('<h1>THIS IS GET</h1>')

    def post(self):
        self.set_header(name='Content-Type', value='application/json')
        self.write(json.dumps(self.json_body))
