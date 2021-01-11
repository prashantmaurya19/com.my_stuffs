import re
valid_char = re.compile('[abcd]+')
# print(valid_char.match("aaaaaaaaaaaaaaaaa").span()[1])
l = {'fjdks':89,"fjdks":78}
def name(fun,value):
    fun(value)

def npass(value):
    print(value)

name(npass,"prashant")
