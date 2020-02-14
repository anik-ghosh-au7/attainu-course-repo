
# https://www.hackerrank.com/challenges/magic-square-forming/problem

# Please refer to the mentioned link for sample inputs

# 4 9 2
# 3 5 7
# 8 1 5

# [[4, 9, 2], [3, 5, 7], [8, 1, 5]]




# Complete the formingMagicSquare function below.
def formingMagicSquare(s):
    all_c = [[[8, 1, 6], [3, 5, 7], [4, 9, 2]],
            [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
            [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
            [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
            [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
            [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
            [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
            [[2, 7, 6], [9, 5, 1], [4, 3, 8]]]
    cost_list = []
    for c in all_c:
        cost = 0
        for i in range(3):
            for j in range(3):
                cost += abs(c[i][j] - s[i][j])
        cost_list.append(cost)
    return min(cost_list)



if __name__ == '__main__':

    s = []

    for _ in range(3):
        s.append(list(map(int, input().rstrip().split())))

    result = formingMagicSquare(s)

    print(result)

