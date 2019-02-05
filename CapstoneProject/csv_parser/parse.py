import csv
import json

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

# This class will be used to parse csv files and create JSON "Point" objects to be added to a GoogleMaps layer. 
# The format of each object must be the same as above, and will be generated as such. 
# Outputs to .json file in current directory  

class Parser: 

    # constructor, name of output.json can be changed by adding a string as input
    def __init__(self, outputFileName = "output"):
        self.outFileName = outputFileName

    id = 5

    # LatName is the index of the column in the csv being that refers to Latitude
    def setLat(self, LatIndex): 
        self.Lat = LatIndex

    # LongName is the index of the column in the csv being parsed that refers to Longitude
    def setLong(self, LongIndex): 
        self.Long = LongIndex

    # TitleName is the index of the column in the csv being parsed that refers to what the point will be called
    def setTitle(self, NameIndex): 
        self.Name = NameIndex
    
    # TitleName is the index of the column in the csv being parsed that refers to what the point will be called
    def setChampion(self, championIndex): 
        self.Champion = championIndex
    
    # TitleName is the index of the column in the csv being parsed that refers to what the point will be called
    def setStaked(self, stakeIndex): 
        self.Staked = stakeIndex

    # set the names of all columns in csv. Pass in ordered tuple of strings.
    def setAllFields(self, strings): 
        self.fields = strings

    # id_in is id field of first JsonObject (default starts at 5)
    def setStartingId(self, id_in): 
        self.id = id_in

    # csvfile is full path to csv file being parsed
    def parse(self, csvfile):

        # setup all files
        csvfile = open(csvfile, 'r')
        jsonfile = open(self.outFileName + '.json', 'w')

        # create parser
        reader = csv.DictReader(csvfile, self.fields)

        # as you parse, create a new_obj to be "dumped" into outFile
        for row in reader:

            new_obj = {}
            new_obj["type"] = "Feature"
            new_obj["geometry"] = {}
            new_obj["geometry"]["type"] = "Point"

            # get Latitude and Longitude and add to new_obj
            new_obj["geometry"]["coordinates"] = []
            new_obj["geometry"]["coordinates"].append(float(list(row.values())[self.Long]))
            new_obj["geometry"]["coordinates"].append(float(list(row.values())[self.Lat]))

            # add id and parse and add name of object
            new_obj["properties"] = {}
            new_obj["properties"]["id"] = str(self.id)
            new_obj["properties"]["polygonId"] = str(self.id)
            new_obj["properties"]["name"] = list(row.values())[self.Name]
            if (list(row.values())[21] == "") :
                if (str(list(row.values())[25][0]) == 'Yes') :
                    new_obj["properties"]["tags"] = ["Trees", "Nature", "Staked"]
                else :
                    new_obj["properties"]["tags"] = ["Trees", "Nature"]
            else :
                if (str(list(row.values())[25][0]) == "Yes") :
                    new_obj["properties"]["tags"] = ["Trees", "Nature", "Staked", "Champion"]
                else :
                    new_obj["properties"]["tags"] = ["Trees", "Nature", "Champion"]
            
            

            

            # add to outFile, seperate each object with a comma for easy integration into map-data.html
            json.dump(new_obj, jsonfile)
            jsonfile.write(',\n')

            #incriment id 
            self.id+=1 

# example of how to parse TreeData.csv and output to "tree_data.json"
def main():

    # add outFile Name
    p = Parser("tree_data")

    # Latitude column
    p.setLat(0)

    # Longitude column
    p.setLong(1)

    # Common Name column
    p.setTitle(8)

    p.setChampion(20)

    p.setStaked(24)

    # ordered tuple of all column names in the CSV
    p.setAllFields(("Lat", "Long", "Alt_ft","Tree_ID", "Zone", "Tree_Number", 
                    "Group", "Leaf_Fall", "Common_Name", "Genus", "Species_Name", 
                    "Family", "Origin", "Age_Class", "CBH_in", "DBH", "Tree_Height_ft", 
                    "Canopy_Radius_ft", "Condition_Class", "Priority", "Champion_Tree", 
                    "Memorial_Tree", "BlueMtnNative", "PacificSlopeNative", "Staked"))

    # parse the file at that path (from current directory)
    p.parse('../Data/TreeData.csv')

if __name__ == "__main__":
    main()