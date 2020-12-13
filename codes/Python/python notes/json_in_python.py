import json


# for parsing json
# json.loads(string)


data2 = {
	'name':'prashant',
	'cars':['bmw','lambagni'],
	'age' :100
}

json = json.dumps(data2)

print(type(json))

