import json
import sys
import os
import shutil

foldername = sys.argv[0].replace("register.py","lib\\")
paths = sys.argv[0].replace("register.py","")+"paths.json"
data ={}
openfile = None

def init():
    f = None
    if not isExist(paths):
        f = open(paths,"x+")
    else:
        f = open(paths,"w+")
    return f

def isExist(filename):
    try:
        f = open(filename)
        return True
    except:
        return False

def scan():
    listOfFile = os.listdir(foldername)
    for filename in listOfFile:
        if filename in ['register.py','paths.json']:
            continue
        data[filename] = foldername+filename
        

if __name__ == "__main__":
    openfile = init()
    ss = openfile.read()
    if ss == "":
        data = {}
    else:
        data = json.loads(ss)

    if "scan" in sys.argv:
        data = {}
        scan()
    elif "has" in sys.argv:
        if isExist(foldername+sys.argv[2]):
            print("Present in at "+ foldername+sys.argv[2])
        else:
            print("Not Exists")
    elif "list" in sys.argv:
        listOfFile = os.listdir(foldername)
        print("List of JavaScripts Web Module :")
        for filename in listOfFile:
            if filename in ['register.py','paths.json']:
                continue
            print(f"> {filename}")
    elif "update" in sys.argv:
        filename = os.path.basename(sys.argv[2])
        wise = "y"
        if "-y" in sys.argv:
            shutil.copyfile(sys.argv[2],foldername+filename)
        elif isExist(foldername+filename):
            wise = input("Do you want to Overwrite it (y/n) :")
            if wise == "y":
                shutil.copyfile(sys.argv[2],foldername+filename)
            else :
                print("Operation Cancelled by User")
        else:
            shutil.copyfile(sys.argv[2],foldername+filename)
            print(f"{filename} is Registerd At {foldername+filename}")
        scan()
    elif "remove" in sys.argv:
        if isExist(foldername+sys.argv[2]):
            os.system(f"del {foldername+sys.argv[2]}")
            scan()
            print("done")
        else:
            print("Not present")
    openfile.write(json.dumps(data))