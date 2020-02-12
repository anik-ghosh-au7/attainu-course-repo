
def danger(x, y):
    for i in range(n):
        if a[x][i] == 1:
            return True
        if a[i][y] == 1:
            return True


# def right_diagonal_danger(x, y):
#     for i in range(n - abs(x - y)):
#         if x > y:
#             if a[(x - y) + i][i] == 1:
#                 return True
#         elif a[i][(y - x) + i] == 1:
#             return True

def diagonal_danger(x, y):
    for i in range(n):
        for j in range(n):
            if (x - y) == (i - j) and a[i][j] == 1:
                return True
            elif (x + y) == (i + j) and a[i][j] == 1:
                return True


def solve(q, c=0):
    count = 0
    t = c
    print("t outside", t)
    for i in range(q):
        for j in range((t if i == 0 else 0), q):
            # print("i : ", i, "j : ", j)
            if not danger(i, j) and not diagonal_danger(i, j):
                print("i : ", i, "j : ", j)
                a[i][j] = 1
                count += 1
                break
    for i in range(n):
        for j in range(n):
            print(a[i][j], end=" ")
        print()
    if count != n:
        print("if1")
        if t < n - 1:
            print("if2")
            t += 1
            print("t inside", t)
            # a.clear()
            return solve(q, t)
        else:
            print("Not possible")
    else:
        print("else2")
        for i in range(n):
            for j in range(n):
                print(a[i][j], end=" ")
            print()


n = int(input())
a = [[0 for _ in range(n)] for _ in range(n)]

solve(n)






# if count != n:
#     print("Not possible")
# else:
#     for i in range(n):
#         for j in range(n):
#             print(a[i][j], end=" ")
#         print()

# for i in range(n):
#     for j in range(n):
#         print(a[i][j], end=" ")
#     print()
