# Reverse a Doubly linked list using recursion


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.end = None

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
            self.end = self.head
            return
        else:   # to append in O(1)
            self.end.next = Node(data)
            self.end.next.prev = self.end
            self.end = self.end.next

    def display(self):
        curr_node = self.head
        while curr_node:
            print('\033[46m', curr_node.data, '\033[41m', end=" <==\033[0m==\033[47m==> ")
            curr_node = curr_node.next
        else:
            print('\033[44m', "None", '\033[0m')
            print()

    def reverse(self):
        if not self.head:
            return None
        else:
            self.head.next, self.head.prev = self.head.prev, self.head.next
        if self.head.prev is None:
            return
        else:
            self.head = self.head.prev
            self.reverse()


lis = DoublyLinkedList()
list1 = "18 5 11 30 19 5 6 2 3"
for i in list1.split():
    lis.append(int(i))
print()
print("Input : ", end="")
lis.display()
lis.reverse()
print("Output : ", end="")
lis.display()
