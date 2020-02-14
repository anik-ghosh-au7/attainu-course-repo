# Write a Python program to sort (ascending and descending) a dictionary by value. [use sorted()]


dict_sample = {"F": 6, "G": 7, "H": 8, "I": 9, "J": 10, "A": 1, "B": 2, "C": 3, "D": 4, "E": 5}

# using .get() function as key
print("Sorted List in ascending order as per values : ", sorted(dict_sample, key=lambda i: dict_sample.get(i)))
print("Sorted List in descending order as per values : ", sorted(dict_sample, key=lambda i: dict_sample.get(i), reverse=True))
