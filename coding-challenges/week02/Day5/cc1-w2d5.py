# Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose
# index range covers the entire range of values in your array to sort. Each time a value occurs in the original array,
# you increment the counter at that index. At the end, run through your counting array, printing the value of each
# non-zero valued index that number of times. For example, consider an array . All of the values are in the range ,
# so create an array of zeroes, . The results of each iteration follow: i	arr[i]	result 0	1	[0, 1, 0,
# 0] 1	1	[0, 2, 0, 0] 2	3	[0, 2, 0, 1] 3	2	[0, 2, 1, 1] 4	1	[0, 3, 1, 1]
#
# Now we can print the list of occurrences,0 3 1 1  or determine the sorted array: sorted = [1,1,1,2,3]
#
#
# [Hint: Think in terms of space]

# # without taking into consideration negative values
# # calculating min & max value of the elements in the input array
# def min_max(x):
#     min_el = x[0]
#     max_el = x[0]
#     for i in x:
#         if i < min_el:
#             min_el = i
#         if i > max_el:
#             max_el = i
#     return min_el, max_el
#
#
# def count_sort(sort_list):
#     min_value, max_value = min_max(sort_list)
#
#     # creating the empty count array
#     count = [0 for i in range(max_value + 1)]
#
#     # Incrementing the value of the elements of the count array corresponding to the number of times
#     # every element represented by its index appear in the original input array
#     for j in range(0, len(sort_list)):
#         count[sort_list[j]] += 1
#
#     # Modifying count to represent the range of indexes that every element of the original input array occupies
#     for z in range(1, max_value + 1):
#         count[z] = count[z - 1] + count[z]
#
#     # creating and populating the output array with the elements of the input array according to the index and value
#     # of the count array
#     output_list = [0] * len(sort_list)
#     for n in range(len(sort_list) - 1, -1, -1):
#         count[sort_list[n]] = count[sort_list[n]] - 1
#         output_list[count[sort_list[n]]] = sort_list[n]
#     return output_list
#
#
# # taking the input array and displaying the output
# def input_output():
#     input_list = []
#     num = int(input("Enter number of elements in list: "))
#     for t in range(0, num):
#         el = int(input("Enter element no. %d : " % (t + 1)))
#         input_list.append(el)
#     print("The sorted list is :", count_sort(input_list))
#
#
# # calling the main input output function
# input_output()


# counting sort taking negative values into consideration
# calculating min & max value of the elements in the input array
def min_max(x):
    min_el = x[0]
    max_el = x[0]
    for i in x:
        if i < min_el:
            min_el = i
        if i > max_el:
            max_el = i
    return min_el, max_el


def count_sort(sort_list):
    min_value, max_value = min_max(sort_list)

    # creating the empty count array
    count = [0 for i in range(max_value - min_value + 1)]

    # Incrementing the value of the elements of the count array corresponding to the number of times
    # every element represented by its index appear in the original input array
    for j in range(0, len(sort_list)):
        count[sort_list[j] - min_value] += 1

    # Modifying count to represent the range of indexes that every element of the original input array occupies
    for z in range(1, max_value - min_value + 1):
        count[z] = count[z - 1] + count[z]

    # creating and populating the output array with the elements of the input array according to the index and value
    # of the count array
    output_list = [0 for i in range(len(sort_list))]
    for n in range(len(sort_list) - 1, -1, -1):
        count[sort_list[n] - min_value] = count[sort_list[n] - min_value] - 1
        output_list[count[sort_list[n] - min_value]] = sort_list[n]
    return output_list


# taking the input array and displaying the output
def input_output():
    input_list = []
    num = int(input("Enter number of elements in list: "))
    for t in range(0, num):
        el = int(input("Enter element no. %d : " % (t + 1)))
        input_list.append(el)
    print("The sorted list is :", count_sort(input_list))


# calling the main input output function
input_output()
