
from pymongo import MongoClient

def initDb(connect='localhost'):
    return MongoClient(connect).askBase

