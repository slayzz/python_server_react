import io


class Controller:
    def __init__(self):
        self.index = self.index()
        self.help  = self.help()

    class index:

        def main(handler):
            f = io.open('./public/templates/index.html', 'rb')
            handler.send_response(code=200, message='all ok')
            handler.send_header('content-type', 'text/html')
            handler.end_headers()
            # handler.wfile.write(b'<h1>Hello</h1>')
            handler.wfile.write(f.read())

    class help:

        def main(handler):
            handler.send_response(code=200, message='all ok')
            handler.send_header('content-type', 'text/html')
            handler.end_headers()
            handler.wfile.write(b'<h1>Help</h1>')
