# https://www.hackerrank.com/challenges/write-a-function/problem

# input
# 1990

# output
# False

# input
# 2400

# output
# True


def is_leap(year):
    return True if (year % 4 == 0 and ((year % 100 != 0) or (year % 400 == 0))) else False


year = int(input())
print(is_leap(year))
