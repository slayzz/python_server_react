from pyserv.pyserv import App

from pyserv.test_handler import testHandler
from pyserv.userHandler import userHandler


app = App([
    (r'^/', testHandler),
    (r'^/user/',userHandler)
],
static_path="./public/")

if __name__ == '__main__':
    print ('server works on port', 8080)
    app.start('localhost', 8080)


