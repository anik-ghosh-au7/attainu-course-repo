# solution 2


# def multiply_str(str1, str2):
#     return str(int(str1)*int(str2))
#
#
# str1, str2 = input().split()
# print(multiply_str(str1, str2))


# solution 3


# # Node class
# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None
#
#
# # LinkedList class
# class LinkedList:
#     def __init__(self):
#         self.head = None
#         self.end = None
#
#     def append(self, data):
#         if self.head is None:
#             self.head = Node(data)
#             self.end = self.head
#             return
#         else:
#             self.end.next = Node(data)
#             self.end = self.end.next
#
#     def distinct(self):
#         curr_node = self.head
#         while curr_node.next:
#             if curr_node.data == curr_node.next.data:
#                 curr_node.next = curr_node.next.next
#             else:
#                 curr_node = curr_node.next
#         return self
#
#     def display(self):
#         curr_node = self.head
#         while curr_node is not None:
#             print(curr_node.data, end=" ")
#             curr_node = curr_node.next
#
#
# lis = LinkedList()
# list1 = input()
# for i in list1.split():
#     lis.append(int(i))
# lis.distinct()
# lis.display()


# solution 4

# def possible(lis, n, m, min):
#     students_req = 1
#     c_sum = 0
#
#     for i in range(n):
#         if lis[i] > min:
#             return False
#
#         if c_sum + lis[i] > min:
#             students_req += 1
#             c_sum = lis[i]
#             if students_req > m:
#                 return False
#         else:
#             c_sum += lis[i]
#     return True
#
#
# def findPages(arr, n, m):
#     p_sum = 0
#     if n < m:
#         return -1
#     for i in range(n):
#         p_sum += arr[i]
#     start, end = 0, p_sum
#     result = 10 ** 9
#     while start <= end:
#         mid = end + (start - end) // 2
#         if possible(arr, n, m, mid):
#             result = min(result, mid)
#             end = mid - 1
#         else:
#             start = mid + 1
#     return result
#
#
# arr = list(map(int, input().split()))
# n = len(arr)
# m = int(input())
#
#
# print(findPages(arr, n, m))

# solution 5


# def damage(lis):
#     stack = []
#     max_area = idx = 0
#     while idx < len(lis):
#         if (not stack) or (lis[stack[-1]] <= lis[idx]):
#             stack.append(idx)
#             idx += 1
#         else:
#             top = stack.pop()
#             if stack:
#                 area = (lis[top] * (idx - stack[-1] - 1))
#             else:
#                 area = (lis[top] * idx)
#             max_area = max(max_area, area)
#     while stack:
#         top = stack.pop()
#         if stack:
#             area = (lis[top] * (idx - stack[-1] - 1))
#         else:
#             area = (lis[top] * idx)
#         max_area = max(max_area, area)
#     print(max_area * 600)
#
#
# arr = list(map(int, input().split()))
# damage(arr)


# solution 6

# import copy
# input_type = input()
# data = input()
# cmd_1 = input()
# cmd_2 = input()
# cmd_3 = input()
# cmd_4 = input()
# cmd_5 = input()
# if input_type == "string":
#     if cmd_1 == "all caps":
#         print(data.upper())
#     if cmd_2 == "reverse":
#         print(data[::-1])
#     if cmd_3 == "sort":
#         print("".join(sorted(data, key=lambda a: a.lower())))
#     if cmd_4 == "isdigit":
#         print(data.isdigit())
#     if cmd_5[:4] == "find":
#         print(data.find(cmd_5.strip()[-1]))
# else:
#     input_list = [int(x) for x in data.strip().split()]
#     list_copy = copy.deepcopy(input_list)
#     append_value = cmd_1.split()[-1]
#     list_copy.append(int(append_value))
#     print(*list_copy)
#     if cmd_2 == "reverse":
#         list_copy1 = copy.deepcopy(input_list)
#         print(*list_copy1[::-1])
#     if cmd_3 == "sort":
#         print(*sorted(input_list))
#     sep_value = cmd_4.split()[-1]
#     list_copy2 = copy.deepcopy(input_list)
#     print(*list_copy2, sep=sep_value)
#     list_copy3 = copy.deepcopy(input_list)
#     num, ind = cmd_5.split()[-2:]
#     list_copy3.insert(int(ind), int(num))
#     print(*list_copy3)

