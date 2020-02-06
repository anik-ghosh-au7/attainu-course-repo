def print_formatted(number):
    # width = len(bin(number)[2:])
    width = len("{:b}".format(number))
    for num in range(1, number + 1):
        print("{0:{w}d} {0:{w}o} {0:{w}X} {0:{w}b}".format(num, w=width))

if __name__ == '__main__':
    n = int(input())
    print_formatted(n)