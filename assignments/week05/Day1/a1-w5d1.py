# https://www.hackerrank.com/challenges/closest-numbers/problem


def closestNumbers(arr):
    # [5, 4, 3, 2]
    # print(arr)
    arr.sort()
    # [2, 3, 4, 5]
    min_diff = arr[1] - arr[0]
    # 2 3 3 4 4 5
    result = []
    for i in range(len(arr)-1):
        if arr[i+1] - arr[i] < min_diff:
            result.clear()
            result.append(arr[i])
            result.append(arr[i+1])
            min_diff = arr[i+1] - arr[i]
        elif arr[i+1] - arr[i] == min_diff:
            result.append(arr[i])
            result.append(arr[i + 1])
    return result


if __name__ == '__main__':

    n = int(input())

    arr1 = list(map(int, input().rstrip().split()))
    result1 = closestNumbers(arr1)

    print(' '.join(map(str, result1)))
    print('\n')
