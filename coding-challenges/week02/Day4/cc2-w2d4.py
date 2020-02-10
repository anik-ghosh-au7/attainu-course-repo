# Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters.


def calculate_value():
    upper = 0
    lower = 0
    input_str = input("Please enter the string :")
    for i in input_str:
        if i.isupper():
            upper += 1
        elif i.islower():
            lower += 1
    return upper, lower


def input_output():
    a, b = calculate_value()
    print("Number of upper case characters are %d & number of lower case characters are %d" % (a, b))


input_output()
