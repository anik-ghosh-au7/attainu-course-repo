# Write the code for binary search without using loops. [optional]

# 2 4 10 12 14 18 20
# 0 1 2  3  4  5  6
# 10
# 2

# 2 4 10 12 14 18 20
# 0 1 2  3  4  5  6
# 18
# 5

# 2 4 10 12 14 18 20
# 0 1 2  3  4  5  6
# 9
# -1

# binary search using recursion


def binary_search(arr, num, c=0):
    mid = (len(arr) - 1) // 2
    if len(arr) - 1 == 0:
        return -1
    if arr[mid] == num:
        return mid + c
    elif arr[mid] > num:
        return binary_search(arr[:mid], num, c)
    else:
        c = c + mid + 1
        return binary_search(arr[mid + 1:], num, c)


input_list = list(map(int, input().split()))
n = int(input())
print(binary_search(input_list, n))
