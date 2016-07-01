from pyserv.pyserv import App

from pyserv.test_handler import testHandler


app = App([
    (r'^/', testHandler),
],
static_path="./public/")

if __name__ == '__main__':
    print ('server works on port', 8080)
    app.start('localhost', 8080)
