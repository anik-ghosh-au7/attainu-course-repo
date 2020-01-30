# Write a Python function that takes a number as a parameter and check the number is prime or not.


def check_prime(x):
    if x > 1:
        for i in range(2, x):
            if x % i == 0:
                print(x, "is not a prime number")
                break
        else:
            print(x, "is a prime number")
    else:
        print("Please enter a number greater than 1")


check_prime(int(input("Please enter a positive integer :")))
