# # https://www.geeksforgeeks.org/exchange-first-last-node-circular-linked-list/


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        # self.end = None       # using end pointer

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
            # self.end = self.head      # using end pointer
            self.head.next = self.head  # not using end pointer
            return
        else:
            curr_node = self.head
            while curr_node.next is not self.head:
                curr_node = curr_node.next
            curr_node.next = Node(data)
            # self.end = curr_node.next         # using end pointer
            # self.end.next = self.head         # using end pointer
            curr_node.next.next = self.head     # not using end pointer
            return

    def display(self):
        curr_node = self.head
        while curr_node.next is not self.head:
            print('\033[46m', curr_node.data, '\033[41m', end=" --\033[0m-->")
            curr_node = curr_node.next
        else:
            print('\033[46m', curr_node.data, '\033[41m', end=" --\033[0m-->")
            print('\033[45m', "Head", '\033[0m')
            print()

    def swap_first_last(self):

        curr_node = self.head

        # using end pointer

        # while curr_node.next is not self.end:
        #     curr_node = curr_node.next
        # self.end.next = self.head.next
        # self.head.next = self.end
        # self.end = self.head
        # self.head = self.head.next
        # curr_node.next = self.end

        # not using end pointer
        while curr_node.next.next is not self.head:
            curr_node = curr_node.next
        curr_node.next.next = self.head.next
        self.head.next = curr_node.next
        curr_node.next = self.head
        self.head = self.head.next


lis = LinkedList()
list1 = "18 5 11 30 19 5 6 2 3"
for i in list1.split():
    lis.append(int(i))
print()
print("Input : ", end="")
lis.display()
lis.swap_first_last()
print("Output : ", end="")
lis.display()
