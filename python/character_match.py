# Don't forget to run your tests!

def is_character_match(string1, string2):
	# create 2 lists of all characters except for white spaces
	x = [i.lower() for i in string1 if i!=' ']	
	y = [j.lower() for j in string2 if j!=' ']

	# Sort the two lists
	sorted_x = sorted(x)
	sorted_y = sorted(y)
	
	# Compare the two lists
	if(sorted_x == sorted_y):
		return True
	else:
		return False
