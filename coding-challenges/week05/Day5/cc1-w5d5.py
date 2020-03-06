# https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
            return
        curr_node = self.head
        while curr_node.next is not None:
            curr_node = curr_node.next
        curr_node.next = Node(data)
        curr_node.next.prev = curr_node
        return

    def display(self):
        curr_node = self.head
        while curr_node:
            print('\033[46m', curr_node.data, '\033[41m', end=" <==\033[0m==\033[47m==> ")
            curr_node = curr_node.next
        else:
            print('\033[44m', "None", '\033[0m')
            print()

    def rotate(self, n):
        if n == 0:
            return
        curr_node = self.head
        count = 1
        while count < n and curr_node.next is not None:
            curr_node = curr_node.next
            count += 1
        if curr_node is None:
            return
        nth_node = curr_node
        while curr_node.next is not None:
            curr_node = curr_node.next
        curr_node.next = self.head
        self.head.prev = curr_node
        self.head = nth_node.next
        self.head.prev = None
        nth_node.next = None


lis = DoublyLinkedList()
list1 = "18 5 11 30 19 5 6 2 3"
for i in list1.split():
    lis.append(int(i))
print()
print("Input : ", end="")
lis.display()
lis.rotate(5)
print("Output : ", end="")
lis.display()
