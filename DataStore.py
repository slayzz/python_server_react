from pymongo import MongoClient



class DataStore(MongoClient):
    def __init__(self,connect=None):
        self.client = MongoClient(connect).askBase



