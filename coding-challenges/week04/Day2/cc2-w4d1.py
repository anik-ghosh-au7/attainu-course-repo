# https://www.hackerrank.com/challenges/lisa-workbook/problem

# Please refer to the mentioned link for sample inputs

# 5 3
# 4 2 6 1 10
# 4

# Complete the workbook function below.


def workbook(n, k, arr):
    page_num = 1
    count = 0
    for i in arr:
        for j in range(1, i + 1):
            if page_num == j:
                count += 1
            if j % k == 0 or j == i:
                page_num += 1
    return count


if __name__ == '__main__':
    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    arr = list(map(int, input().rstrip().split()))
    result = workbook(n, k, arr)

    print(str(result) + '\n')
