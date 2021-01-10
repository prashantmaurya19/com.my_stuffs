import re
valid_char = re.compile('[abcd]+')
# print(valid_char.match("aaaaaaaaaaaaaaaaa").span()[1])
print(re.compile("\s+\d+\s[>]").match("\t\t\t19 >").group())
