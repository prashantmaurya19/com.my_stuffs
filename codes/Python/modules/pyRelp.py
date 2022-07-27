import json
import os

'''
data_path   : location of the file where your json file is located
data        : this is the property for you now about your data is go there by default 
init_data   : this property holds a funciton which return a initial object for the data property


you must first initalise the config by Relp.setConfig(key,value) before calling any other function/method
'''

class Relp:
    def __init__(self):
        self.config = {}

    def init(self):
        pass    
        
    def operate(self,key,arr):
        try:
            self.config[key](self,arr)
        except :
            print("INVALID ARGUMENT !!")

    def setConfig(self,key,value):
        self.config[key] = value

    def load(self):
        if self.isExist(self.config["data_path"]):
            with open(self.config["data_path"],"r") as f:
                self.config["data"] = json.loads(f.read())
        else :
            self.config["data"] = self.config["init_data"]()
    
    def save(self):
        with open(self.config["data_path"],"w+") as f:
            f.write(json.dumps(self.config["data"]))

    def isExist(self,filename):
        return os.path.exists(filename)