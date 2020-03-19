# https://www.geeksforgeeks.org/given-level-order-traversal-binary-tree-check-tree-min-heap/


def is_minHeap(level, n):
    for i in range(n//2 - 1, -1, -1):
        if level[i] > level[2*i + 1]:
            return False
        if 2*i + 2 < n:
            if level[i] > level[2*i + 2]:
                return False
    return True


level = [10, 15, 14, 25, 30]
n = len(level)
if is_minHeap(level, n):
    print("True")
else:
    print("False")
