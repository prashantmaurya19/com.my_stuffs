print("args and kwargs")

# args -----> it is pass as tuple in function
def prints(*args):
	for e in args:
		print(e)

# pr = ["prahn","nishnat","nis","man"]
# prints(*pr)

# kwargs -----> it is pass as dict in function
def pr(**kwargs):
	print(type(kwargs))
	for key , value in kwargs.items():
		print(f"{key} {value}")

prs = {
	'p':'prashant',
	'pr': 'rohan',
	'n':'nishant',
	'f':'khana',
	'b':'bhukha'
}
pr(**prs)