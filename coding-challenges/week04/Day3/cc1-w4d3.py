
n = int(input())
if n == 0:
    print(0, end=" ")
else:
    print(0, end=" ")
    print(1, end=" ")


def rec_fibonacci(n1, n2, n):
    if n <= 1:
        return
    a = n1 + n2
    print(a, end=" ")
    return rec_fibonacci(n2, a, n-1)


rec_fibonacci(0, 1, n-1)
