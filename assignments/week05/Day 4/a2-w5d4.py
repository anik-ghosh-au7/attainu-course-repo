# https://www.geeksforgeeks.org/josephus-circle-using-circular-linked-list/


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class CircularLinkedList:
    def __init__(self):
        self.head = None

    def josephusPosition(self, m, n):
        self.head = Node(1)
        curr_node = self.head
        for i in range(2, n):
            curr_node.next = Node(i)
            curr_node = curr_node.next
        curr_node.next = self.head
        ptr1 = self.head
        ptr2 = self.head
        while ptr1.next is not self.head:
            count = 1
            while count is not m:
                ptr2 = ptr1
                ptr1 = ptr1.next
                count += 1
            ptr2.next = ptr1.next
            ptr1 = ptr2.next
        print("Last person left standing " + "(Josephus Position) is " + str(ptr1.data))


lis = CircularLinkedList()
lis.josephusPosition(2, 14)
