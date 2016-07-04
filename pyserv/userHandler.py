
import json
from bson.objectid import ObjectId
import io
from .enchanted import EnchantedRequestHandler

class userHandler(EnchantedRequestHandler):
    def get(self):
        # self.send_response(code=200, message='all ok')
        # self.send_header('content-type', 'text/html')
        # self.end_headers()
        # handler.wfile.write(b'<h1>Hello</h1>')
        # print(self.ds)
        f = io.open('./public/templates/index.html', 'r')
        self.write(f.read())

    def post(self):
        jsonData = self.json_body.copy()
        jsonData.pop('action')
        self.set_header(name='Content-Type', value='application/json')

        if self.json_body['action'] == 'register':
            exist = self.ds.users.find_one({'email': jsonData['email']})

            if exist:
                self.send_response(400, 'user with this email already exists')
                return


            success = self.ds.users.insert_one(jsonData)
            if (success):
                print(str(success.inserted_id.binary))
                # self.json_res(json.dumps(success.inserted_id._id))
            else:
                self.send_response(401, 'user with this email already exists')


        if self.json_body['action'] == 'login':
            print('lll')
