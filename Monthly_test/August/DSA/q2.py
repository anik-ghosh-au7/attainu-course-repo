# def total_number_BSTs(n):
#     if n <= 1:
#         return 1
#     res = 0
#     for i in range(n):
#         res += total_number_BSTs(i) * total_number_BSTs(n - i - 1)
#     return res


# print(total_number_BSTs(1))
# print(total_number_BSTs(2))
# print(total_number_BSTs(3))
# print(total_number_BSTs(4))
# print(total_number_BSTs(100))

# def total_number_BSTs(n):
#     if n == 0 or n == 1:
#         return 1
#     # divide table
#     total_number_BSTs = [0 for i in range(n + 1)]
#     # Initialization
#     total_number_BSTs[0] = 1
#     total_number_BSTs[1] = 1
#     # recursion
#     for i in range(2, n + 1):
#         total_number_BSTs[i] = 0
#         for j in range(i):
#             total_number_BSTs[i] = total_number_BSTs[i] + total_number_BSTs[j] * total_number_BSTs[i - j - 1]
#     return total_number_BSTs[n]
#
#
# print(total_number_BSTs(1))
# print(total_number_BSTs(2))
# print(total_number_BSTs(3))
# print(total_number_BSTs(4))
# print(total_number_BSTs(100))


""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""


def check_binary_search_tree_(root, left=None, right=None):
    if root is None:
        return True

    if left is not None and root.data <= left.data:
        return False

    if right is not None and root.data >= right.data:
        return False

    return check_binary_search_tree_(root.left, left, root) and check_binary_search_tree_(root.right, root, right)
