# Implement Stack using a linked list


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.end = None

    def push(self, data):
        if self.head is None:
            temp_node = Node(data)
            temp_node.next = self.head
            self.head = temp_node
            self.end = temp_node
        else:
            temp_node = Node(data)
            temp_node.next = self.head
            self.head = temp_node
        return

    def pop(self):
        if self.head is None:
            return None
        temp_node = self.head
        self.head = self.head.next
        return temp_node


class Stack:
    def __init__(self, max_size=100):
        self.stack = LinkedList()
        self.max_size = max_size
        self.curr_size = 0

    def push(self, data):
        if self.max_size > self.curr_size:
            self.stack.push(data)
            self.curr_size += 1

    def pop(self):
        if self.curr_size <= 0:
            return None
        x = self.stack.pop()
        self.curr_size -= 1
        return x

    def peek(self):
        if self.curr_size <= 0:
            return None
        else:
            return self.stack.end

    def isEmpty(self):
        if self.curr_size <= 0:
            return True
        return False

    def display(self):
        current_node = self.stack.head
        print("<==>", end="")
        while current_node:
            print('\033[46m', current_node.data, '\033[41m', end=" --\033[0m-->")
            current_node = current_node.next
        else:
            print('\033[44m', "None", '\033[0m', end="")
            print()
            print()


stk = Stack()
list1 = "18 5 11 30 19 5 6 2 3"
for i in list1.split():
    stk.push(int(i))
print()
print("Input Stack : ", end="")
stk.display()
print("First elem to come out of the stack, is the last elem of the input : ", stk.pop().data)
print()
print("Modified Stack : ", end="")
stk.display()
print("Peek Element : ", stk.peek().data)
print()
print("Stack is empty : ", stk.isEmpty())
