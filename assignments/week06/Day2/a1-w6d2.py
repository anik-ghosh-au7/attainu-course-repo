# Implement Stacks using Queues


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
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
            self.end = self.end.next

    def pop(self):
        if self.head is None:
            return None
        curr_node = self.head
        self.head = self.head.next
        return curr_node


class Queue:
    def __init__(self, max_size=100):
        self.queue = LinkedList()
        self.front = self.rear = -1
        self.max_size = max_size

    def enqueue(self, data):
        if self.rear < self.max_size:
            self.queue.append(data)
            self.rear += 1
            if self.front == -1:
                self.front += 1

    def deque(self):
        if self.front == -1:
            return None
        else:
            x = self.queue.pop()
        if self.rear == 0:
            self.front = self.rear = -1
        else:
            self.rear -= 1
        return x

    # def front_elem(self):
    #     if self.front == -1:
    #         return None
    #     else:
    #         return self.queue.head.data

    # def rear_elem(self):
    #     if self.rear != -1:
    #         return self.queue.end.data
    #
    # def isEmpty(self):
    #     if self.front == -1:
    #         return True
    #     return False

    def pop(self):
        return self.deque().data

    def list_append(self, data):
        return self.enqueue(data)

    def get_size(self):
        curr_node = self.queue.head
        count = 0
        while curr_node:
            count += 1
            curr_node = curr_node.next
        return count

    def display(self):
        current_node = self.queue.head
        print("deque <--", end="")
        while current_node:
            print('\033[46m', current_node.data, '\033[41m', end=" --\033[0m-->")
            current_node = current_node.next
        else:
            print('\033[44m', "None", '\033[0m', end="")
            print("<-- enqueue")
            print()


que = Queue()
list1 = "18 5 11 30 19 5 6 2 3"
for i in list1.split():
    que.enqueue(int(i))
print()
print("Input Queue : ", end="")
que.display()
size = que.get_size()
for i in range(size - 1):
    x = que.pop()
    que.list_append(x)
print("stack implementation using queue : ", end="")
que.display()
print("Now the first element to pop from the stack i.e the last element of the queue is : ", que.pop())


