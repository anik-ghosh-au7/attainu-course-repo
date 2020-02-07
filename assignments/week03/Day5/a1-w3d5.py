# 1) Given a sorted array of integers A(0 based index) of size N, find the starting and ending position of a given
# integer B in array A. Your algorithm runtime complexity must be in the order of O(log n). Return an array of size
# 2, such that first element = starting position of B in A and second element = ending position of B in A,
# if B is not found in A return [-1, -1]. Input 1: A = [5, 7, 7, 8, 8, 10] B = 8 Output 1: [3, 4] Explanation 1:
# First occurence of 8 in A is at index 3 Second occurence of 8 in A is at index 4 ans = [3, 4]
#
# Input 2:
#     A = [5, 17, 100, 111]
#     B = 3
# Output 2:
#     [-1, -1]


def position(lis, num):
    for i in range(len(lis)):
        if lis[i] == num:
            for j in range(len(lis) - 1, -1, -1):
                if lis[j] == num:
                    print([i, j])
                    break
            break
    else:
        print([-1, -1])


input_list = list(map(int, input().split()))
n = int(input())

position(input_list, n)
