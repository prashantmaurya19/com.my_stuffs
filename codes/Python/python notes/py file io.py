# File IO basics

'''
"r" - open file for reading 
"w" - open file for writing
"x" - creates file if not exists
"a" - append content to a file
"t" - text mode (if file is a text file)
"b" - binary mode
"+" - read and write
'''

# reading file 
# f = open("prashant.txt",'r')
# f.read(int total_char)
# content = f.read()
# print(content)
# f.readline()
# for line in f:
	# print(line)
# print(f.readlines())
# f.close()

# writing file
# f = open("prashant.txt",'a') # writing is poseble in 'a' and 'w' , 'r+'
# f.write(string) return the total number of character that you write in file
# f.close()


# seek() , tell() ....
# f = open("prashant.txt",'r+')
# print(f.tell()) return position of handel character vice
# f.seek(0) reset the handel of file
# f.close()

# with 
# with open("prashant.txt") as f:
# 	print(f.readline())
