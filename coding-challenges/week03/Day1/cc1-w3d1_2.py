# Write a Python program to iterate over dictionaries using for loops.

dict_sample = {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H", 9: "I", 10: "J"}


# printing all the values of dict_sample dictionary whose keys are multiple of 3
print(*("The value of %d is %s" % (i, j) for i, j in dict_sample.items() if i % 3 == 0), sep="\n")
