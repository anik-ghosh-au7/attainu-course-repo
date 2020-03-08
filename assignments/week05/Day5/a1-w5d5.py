# Given 2 very very big numbers(10^1000) use doubly linked lists to perform operations on them(+,-)


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class Pointer:
    def __init__(self, num):
        for i in range(1, num+1):
            self._i = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.end = None

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
            self.end = self.head
            return
        self.end.next = Node(data)
        self.end.next.prev = self.end
        self.end = self.end.next

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.head
        new_node.prev = None
        if self.head is not None:
            self.head.prev = new_node
        self.head = new_node

    def length(self):
        if not self.head:
            return 0
        curr_node = self.head
        list_len = 1
        while curr_node.next is not None:
            list_len += 1
            curr_node = curr_node.next
        return list_len

    def printList(self):
        while self.head:
            print('\033[46m', self.head.data, '\033[41m', end=" <==\033[0m==\033[47m==> ")
            self.head = self.head.next
        else:
            print('\033[44m', "None", '\033[0m')
            print()


def ll_add(lis1, lis2):
    diff = abs(lis1.length() - lis2.length())
    if lis1.length() > lis2.length():
        for _ in range(diff):
            lis2.push(0)
    if lis1.length() < lis2.length():
        for _ in range(diff):
            lis1.push(0)
    carry = 0
    pn = Pointer(2)
    result = LinkedList()
    pn._1 = lis1.end
    pn._2 = lis2.end
    for _ in range(lis2.length()):
        sum_el = pn._1.data + pn._2.data + carry
        if sum_el > 9:
            result.push(sum_el % 10)
            carry = sum_el // 10
        else:
            result.push(sum_el)
            carry = 0
        pn._1 = pn._1.prev
        pn._2 = pn._2.prev

    if carry:
        result.push(carry)

    print("Added output list : ")
    result.printList()


def ll_diff(lis1, lis2):
    diff = abs(lis1.length() - lis2.length())
    flag = 0
    if lis1.length() > lis2.length():
        flag = 1
        for _ in range(diff):
            lis2.push(0)
    elif lis1.length() < lis2.length():
        flag = 2
        for _ in range(diff):
            lis1.push(0)
    else:
        pn = Pointer(2)
        pn._1 = lis1.head
        pn._2 = lis2.head
        while pn._1:
            if pn._1.data > pn._2.data:
                flag = 1
                break
            if pn._1.data < pn._2.data:
                flag = 2
                break
            pn._1 = pn._1.next
            pn._2 = pn._2.next
    result = LinkedList()
    if flag == 0:
        result.push(0)
    else:
        pn = Pointer(2)
        pn._1 = lis1.end
        pn._2 = lis2.end
        if flag == 2:
            pn._1, pn._2 = pn._2, pn._1
        while pn._1:
            if pn._1.data >= pn._2.data:
                result.push(pn._1.data - pn._2.data)
            else:
                pn._1.prev.data = pn._1.prev.data - 1
                result.push(pn._1.data + 10 - pn._2.data)
            pn._1 = pn._1.prev
            pn._2 = pn._2.prev
    print("Diff output list : ")
    result.printList()


l1 = LinkedList()
l2 = LinkedList()
list1 = "9882"
for i in list1:
    l1.append(int(i))
list2 = "884"
for j in list2:
    l2.append(int(j))
ll_add(l1, l2)
ll_diff(l1, l2)
