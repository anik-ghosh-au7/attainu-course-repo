# https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem

# input
# 5
# 2 3 6 6 5

# output
# 5


if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    max_no = max(arr)
    while max(arr) == max_no:
        arr.remove(max_no)
    print(max(arr))
