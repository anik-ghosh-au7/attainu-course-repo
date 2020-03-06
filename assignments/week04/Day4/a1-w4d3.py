# binary search using recursion

# input 1
# 1 3 6 7 8 9
# 6
# 2

# input 2
# 1 3 6 7 9 8
# 9
# 4

# input 3
# 1 3 6 7 9 8
# 2
# -1


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