# https://www.geeksforgeeks.org/print-root-leaf-path-without-using-recursion/


class Node:
    def __init__(self, data):
        self.data = data
        self.left = self.right = None


def print_top_bottom(current, parent):
    stk =[]
    while current:
        stk.append(current)
        current = parent[current]
    while len(stk) != 0:
        current = stk[-1]
        stk.pop(-1)
        print(current.data, end=" ")
    print()


def print_root_leaf(root):
    if root is None:
        return
    node_stk = [root]
    parent = {root: None}
    while len(node_stk) != 0:
        current = node_stk[-1]
        node_stk.pop(-1)
        if not current.left and not current.right:
            print_top_bottom(current, parent)
        if current.right:
            parent[current.right] = current
            node_stk.append(current.right)
        if current.left:
            parent[current.left] = current
            node_stk.append(current.left)


root = Node(10)
root.left = Node(8)
root.right = Node(2)
root.left.left = Node(3)
root.left.right = Node(5)
root.right.left = Node(2)

print_root_leaf(root)
