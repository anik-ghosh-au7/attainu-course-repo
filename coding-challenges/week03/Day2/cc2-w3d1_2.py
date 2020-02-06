# Write a Python script to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x)

# x = int(input("Please enter a number : "))
print((lambda n: {n: n*n})(int(input("Please enter a number : "))))
