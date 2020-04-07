# https://www.geeksforgeeks.org/level-order-tree-traversal/


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def level_order_traversal(root):
    if root is None:
        return
    queue = [root]
    while len(queue) > 0:
        print(queue[0].data)
        node = queue.pop(0)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)


root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

print("Level Order Traversal of binary tree is -")
level_order_traversal(root)
