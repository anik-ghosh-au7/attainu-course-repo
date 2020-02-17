# def danger(x, y):
#     for i in range(n):
#         if a[x][i] or a[i][y] == 1:
#             return True
#
#
# def diagonal_danger(x, y):
#     for i in range(n):
#         for j in range(n):
#             if (x - y) == (i - j) and a[i][j] == 1:
#                 return True
#             elif (x + y) == (i + j) and a[i][j] == 1:
#                 return True
#
#
# def solve(q, c=0):
#     count = 0
#     t = c
#     print("cleared array", a)
#     print("t outside", t)
#     for i in range(q):
#         for j in range((t if i == 0 else 0), q):
#             # print("i : ", i, "j : ", j)
#             if not danger(i, j) and not diagonal_danger(i, j):
#                 print("i : ", i, "j : ", j)
#                 a[i][j] = 1
#                 count += 1
#                 break
#     for i in range(n):
#         for j in range(n):
#             print(a[i][j], end=" ")
#         print()
#     if count != n:
#         print("if1")
#         if t < n - 1:
#             print("if2")
#             t += 1
#             print("t inside", t)
#             for i in range(n):
#                 for j in range(n):
#                     a[i][j] = 0
#             return solve(q, t)
#         else:
#             print("Not possible")
#     else:
#         print("else2")
#         for i in range(n):
#             for j in range(n):
#                 print(a[i][j], end=" ")
#             print()
#
#
# n = int(input())
#
# a = [[0 for _ in range(n)] for _ in range(n)]
#
# solve(n)
#

# N-Queens
# https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/practice-problems/algorithm/n-queensrecursion-tutorial/

# input
# 9

# output
# 1 0 0 0 0 0 0 0 0
# 0 0 1 0 0 0 0 0 0
# 0 0 0 0 0 1 0 0 0
# 0 0 0 0 0 0 0 1 0
# 0 1 0 0 0 0 0 0 0
# 0 0 0 1 0 0 0 0 0
# 0 0 0 0 0 0 0 0 1
# 0 0 0 0 0 0 1 0 0
# 0 0 0 0 1 0 0 0 0

# input
# 3

# output
# Not possible


def danger(x, y):
    for i in range(n):
        # condition to check the row and column
        if a[x][i] or a[i][y] == 1:
            return True
        # condition to check the diagonals
        for j in range(n):
            if (x - y) == (i - j) and a[i][j] == 1:
                return True
            elif (x + y) == (i + j) and a[i][j] == 1:
                return True


# this will check column wise change with j to check row wise
def solve(a, i, n):
    # base Condition
    if i == n:
        # to print the output matrix
        for x in range(n):
            for y in range(n):
                print(a[x][y], end=" ")
            print()
        print()
        # return False to print all possible outputs
        return True
    # recursive case
    for j in range(n):
        # will change the value from 0 to 1 if conditions are met to put the queen
        if not danger(i, j):
            a[i][j] = 1
            status = solve(a, i + 1, n)
            if status:
                return True
            # backtrack
            a[i][j] = 0
    return False


n = int(input())

a = [[0 for _ in range(n)] for _ in range(n)]

# output
if not solve(a, 0, n):
    print("Not possible")
else:
    solve(a, 0, n)
