import pprint

class Utils:

    def parseDir(self, cls):
        thisDir = {}
        for cl in dir(cls):
            cutStr = cl[0:2]
            if '_' in cutStr:
                continue
            thisDir[cl] = type(getattr(cls,cl))
        pprint.pprint(thisDir,width=30)

