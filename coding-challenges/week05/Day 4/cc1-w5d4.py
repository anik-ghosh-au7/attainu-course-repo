# https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/


# Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


# LinkedList class
class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
            return
        else:
            curr_node = self.head
            while curr_node.next is not None:
                curr_node = curr_node.next
            curr_node.next = Node(data)

    def pair_swap(self):
        curr_node = self.head
        if curr_node is None or curr_node.next is None:
            return self.head
        while curr_node is not None and curr_node.next is not None:
            curr_node.data, curr_node.next.data = curr_node.next.data, curr_node.data
            curr_node = curr_node.next.next

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def display(self):
        curr_node = self.head
        while curr_node is not None:
            print('\033[46m', curr_node.data, '\033[41m', end=" --\033[0m-->")
            curr_node = curr_node.next
        else:
            print('\033[44m', "None", '\033[0m')
            print()


lis = LinkedList()
# lis.push(5)
# lis.push(4)
# lis.push(3)
# lis.push(2)
# lis.push(1)
# lis.append(10)
# lis.append(20)
# lis.push(45)
# lis.append(30)
list1 = "18 5 11 30 19 5 6 2 3"
for i in list1.split():
    lis.append(int(i))
print()
print("Input : ", end="")
lis.display()
lis.pair_swap()
print("Output : ", end="")
lis.display()

