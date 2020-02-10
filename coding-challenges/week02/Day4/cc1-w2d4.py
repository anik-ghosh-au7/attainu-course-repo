# 2) Take integer inputs from user until he/she presses q ( Ask to press q to quit after every integer input ).
# Print average and product of all numbers.


def input_output():
    sum_value = 0
    product = 1
    count = 0
    while True:
        input_value = input("Please enter an integer or press q to quit")
        if input_value == 'q':
            break
        else:
            try:
                sum_value = sum_value + int(input_value)
                product = product * int(input_value)
                count = count + 1
            except:
                print("Invalid Input")
                break
    print("The average of the inputted numbers is :", average(sum_value, count))
    print("The product of the inputted numbers is :", product)


def average(x, y):
    return x / y


input_output()
