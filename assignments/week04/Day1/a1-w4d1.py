
# https://www.hackerrank.com/challenges/countingsort4/problem

# Please refer to the mentioned link for sample inputs

def max_el(arr):
    max_value = arr[0][0]
    for i in range(1, len(arr)):
        if arr[i][0] > max_value:
            max_value = arr[i][0]
    return max_value


def countSort(arr):
    # [['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6', 'gh'], ['4', 'ij'], ['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6',
    # 'gh'], ['0', 'ij'], ['4', 'that'], ['3', 'be'], ['0', 'to'], ['1', 'be'], ['5', 'question'], ['1', 'or'], ['2',
    # 'not'], ['4', 'is'], ['2', 'to'], ['4', 'the']] print(arr)
    for i in range(int(len(arr) / 2)):
        arr[i][1] = "-"
    for j in range(len(arr)):
        arr[j][0] = int(arr[j][0])
    # print(arr)

    count = [0] * (max_el(arr) + 1)
    # print(count)
    for k in range(len(arr)):
        count[arr[k][0]] += 1
    # print(count)
    # [6, 2, 2, 1, 4, 1, 4]

    for z in range(1, len(count)):
        count[z] = count[z - 1] + count[z]
    # print(count)
    # [6, 8, 10, 11, 15, 16, 20]
    output_list = [0] * len(arr)
    for m in range(len(arr) - 1, -1, -1):
        count[arr[m][0]] -= 1
        output_list[count[arr[m][0]]] = arr[m][1]
    print(*output_list, sep=" ")



if __name__ == '__main__':
    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(input().rstrip().split())

    countSort(arr)
