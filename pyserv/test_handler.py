class testHandler():
    def __init__(self, hanlder):
        self.hanlder = hanlder

    def get(self):
        self.hanlder.send_response(code=200, message='all ok')
        self.hanlder.send_header('content-type', 'text/html')
        self.hanlder.end_headers()
        self.hanlder.wfile.write(b'<h1>THIS IS GET</h1>')

    def post(self):
        self.hanlder.send_response(code=200, message='all ok')
        self.hanlder.send_header('content-type', 'text/html')
        self.hanlder.end_headers()
        self.hanlder.wfile.write(b'<h1>THIS IS POST</h1>')
