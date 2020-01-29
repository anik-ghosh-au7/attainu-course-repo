def print_rangoli(size):
    value_a = ord('a')

    for i in range(0, n):

        print("-" * ((2 * (n - i)) - 2), end="")
        for j in range(0, i + 1):
            if j > 0:
                print("-", end="")
            print(chr(value_a + (n - j - 1)), end="")

        for k in range(i, 0, -1):
            print("-", end="")
            print(chr(value_a + (n - k)), end="")

        print("-" * ((2 * (n - i)) - 2))

    for i in range(n - 2, -1, -1):

        print("-" * ((2 * (n - i)) - 2), end="")
        for j in range(0, i + 1):
            if j > 0:
                print("-", end="")
            print(chr(value_a + (n - j - 1)), end="")

        for k in range(i, 0, -1):
            print("-", end="")
            print(chr(value_a + (n - k)), end="")

        print("-" * ((2 * (n - i)) - 2))


if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)
