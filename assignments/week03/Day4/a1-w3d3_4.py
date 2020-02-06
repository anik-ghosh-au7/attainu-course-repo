if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    max_no = max(arr)
    while max(arr) == max_no:
        arr.remove(max_no)
    print(max(arr))
