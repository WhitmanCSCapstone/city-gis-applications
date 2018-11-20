import csv

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

    # TitleName is the index of the column in the csv being parsed that refers to what the point will be called
    def setTitle(self, NameIndex): 
        self.Name = NameIndex

    def setLatinName(self, latinNameIndex):
        self.latinName = latinNameIndex

    def setFamily(self, familyIndex):
        self.family = familyIndex
    
    def setHeight(self, heightIndex):
        self.height = heightIndex

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
        file = open(self.outFileName + '.html', 'w')

        # create parser
        reader = csv.DictReader(csvfile, self.fields)

        # as you parse, create a new_obj to be "dumped" into outFile
        for row in reader:


            treeHTML = "<div class=\"wc-mc-description wc-mc-detail-box-content\" id=\"wc-mc-desc-" + str(self.id) + "\">" + "\n"
            treeHTML = treeHTML + "<p>Common Name: " + list(row.values())[self.Name] + "</p><br>\n"
            treeHTML = treeHTML + "<p>Latin Name: " + list(row.values())[self.latinName] + "</p><br>\n"
            treeHTML = treeHTML + "<p>Family: " + list(row.values())[self.family] + "</p><br>\n"
            treeHTML = treeHTML + "<p>Tree Height: " + list(row.values())[self.height] + "</p><br>\n"
            treeHTML = treeHTML + "</div>\n"

            # add to outFile, seperate each object with a comma for easy integration into map-data.html
            file.write(treeHTML)

            #incriment id 
            self.id+=1 

# example of how to parse TreeData.csv and output to "tree_data.json"
def main():

    # add outFile Name
    p = Parser("tree_data")

    # Common Name column
    p.setTitle(7)

    p.setLatinName(8)

    p.setFamily(9)
    
    p.setHeight(10)

    # ordered tuple of all column names in the CSV
    p.setAllFields(("ID", "Waypoint_Number", "Lat","Long","Common_Name", "Alt_ft", "Zone", "Tree_Number", "Latin_Name", "Family", "Tree_Height_ft"))

    # parse the file at that path (from current directory)
    p.parse('../Data/TreeData.csv')

if __name__ == "__main__":
    main()