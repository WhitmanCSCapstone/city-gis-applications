import csv
import json

csvfile = open('../Data/TreeData.csv', 'r')
jsonfile = open('output.json', 'w')

fieldnames = ("ID", "Waypoint_Number", "Lat","Long","Common_Name", "Alt_ft", "Zone", "Tree_Number")
reader = csv.DictReader( csvfile, fieldnames)

id = 5 # start where Kai left off?

for row in reader:

    # if id == 5:
    #     id+=1
    #     continue # skip first line, with titles and stuff

    print(row)

    x = row["ID"]
    x = row["Waypoint_Number"]

    new_obj = {}
    new_obj["type"] = "feature"
    new_obj["geometry"] = {}
    new_obj["geometry"]["type"] = "Point"
    new_obj["geometry"]["coordinates"] = []
    new_obj["geometry"]["coordinates"].append(list(row.values())[2])
    new_obj["geometry"]["coordinates"].append(list(row.values())[3])

    x = row["Alt_ft"]
    x = row["Zone"]
    x = row["Tree_Number"]

    new_obj["properties"] = {}
    new_obj["properties"]["id"] = id
    new_obj["properties"]["polygonId"] = id
    new_obj["properties"]["name"] = list(row.values())[7]

    json.dump(new_obj, jsonfile)
    jsonfile.write(',\n')

    id+=1 #incriment id 


# //TREE EXAMPLE  vvvvvvvvvv
# {
# 	"type": "Feature",
# 	"geometry": {
# 		"type": "Point",
# 		"coordinates": [-118.32682,46.07182]
# 	},
# 	"properties": {
# 		"id":"4",
# 		"polygonId":"x37593",
# 		"name": "Example Tree"
# 	}
# },
# //TREE EXAMPLE ^^^^^^^^^^^^