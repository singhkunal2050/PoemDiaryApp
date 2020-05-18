def getName(str):
	arr = str.split('.')
	txt = arr[0].replace("_" , " ")
	return txt

import os
# Getting the current work directory (cwd)
thisdir = os.getcwd()

# r=root, d=directories, f = files
for r, d, f in os.walk(thisdir):
	for file in f:
		if(file.endswith(".jpg")):
			name = file
			name2 = getName(name)
			l1  = '<div class="tile" id="'+ name2 +'">'
			l2  = '<img src="img/poems/' + name + '" alt="" id="img">'
			l3  = '<h2><a class="link" >'+ name2 +'</a></h2>'
			l4  = '</div>'
			op  = l1 + "\n\t" +l2 + "\n\t" + l3 + "\n" + l4
			print(op)
