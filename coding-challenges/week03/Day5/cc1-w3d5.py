# 1)Given a sorted array and a target value, return the index if the target is found.
# If not, return the index where it would be if it were inserted in order.
# [You may assume no duplicates in the array.]
#
# [1,3,5,6], 5 → 2
# [1,3,5,6], 2 → 1
# [1,3,5,6], 7 → 4
# [1,3,5,6], 0 → 0

n = int(input())
sorted_arr = list(map(int, input().split()))
for i in range(len(sorted_arr)):
    if sorted_arr[i] >= n:
        print(i)
        break
else:
    print(len(sorted_arr))