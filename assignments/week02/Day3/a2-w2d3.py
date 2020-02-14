def print_rangoli(size):
    value_a = ord('a')

    for i in range(0, size):

        print("-" * ((2 * (size - i)) - 2), end="")
        for j in range(0, i + 1):
            if j > 0:
                print("-", end="")
            print(chr(value_a + (size - j - 1)), end="")

        for k in range(i, 0, -1):
            print("-", end="")
            print(chr(value_a + (size - k)), end="")

        print("-" * ((2 * (size - i)) - 2))

    for i in range(size - 2, -1, -1):

        print("-" * ((2 * (size - i)) - 2), end="")
        for j in range(0, i + 1):
            if j > 0:
                print("-", end="")
            print(chr(value_a + (size - j - 1)), end="")

        for k in range(i, 0, -1):
            print("-", end="")
            print(chr(value_a + (size - k)), end="")

        print("-" * ((2 * (size - i)) - 2))


if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)
