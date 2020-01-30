# 1) Write a program to find greatest common divisor (GCD) or highest common factor (HCF) of given two numbers.

num1 = int(input("Please enter the first number :"))
num2 = int(input("Please enter the second number :"))


def hcf(x, y):

    if x > y:
        s = y
    else:
        s = x
    for i in range(1, s+1):
        if x % i == 0 and y % i == 0:
            value = i
    return value


print("The HCF of %d & %d is %d" % (num1, num2, hcf(num1, num2)))
