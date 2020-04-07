# https://www.geeksforgeeks.org/check-if-two-trees-are-mirror/


class Node:
    def __init__(self, key):
        self.data = key
        self.left = None
        self.right = None


def are_mirror(root1, root2):
    if root1 is None and root2 is None:
        return True
    if root1 is None or root2 is None:
        return False
    return root1.data == root2.data and are_mirror(root1.left, root2.right) and are_mirror(root1.right, root2.left)


root1 = Node(1)
root2 = Node(1)

root1.left = Node(2)
root1.right = Node(3)
root1.left.left = Node(4)
root1.left.right = Node(5)

root2.left = Node(3)
root2.right = Node(2)
root2.right.left = Node(5)
root2.right.right = Node(4)

if are_mirror(root1, root2):
    print("Yes")
else:
    print("No")
