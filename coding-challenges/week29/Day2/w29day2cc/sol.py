class Node:  
    def __init__(self): 
        self.data = 0
        self.next = None
  
def newNode( data):  
  
    new_node = Node()  
    new_node.data = data  
    new_node.next = None
    return new_node  

def partition( head, x) : 
  
    small_end = None

    equal_head = None
    equal_end = None

    large_end = None
    large_head = None

    while (head != None) : 
      
        if (head.data == x):  
          
            if (equal_head == None):  
                equal_head = equal_end = head  
            else: 
              
                equal_end.next = head  
                equal_end = equal_end.next

        elif (head.data < x):  
          
            if (smallerHead == None):  
                small_end = smallerHead = head  
            else: 
              
                small_end.next = head  
                small_end = head  
          
        else : 
          
            if (large_head == None) : 
                large_end = large_head = head  
            else: 
              
                large_end.next = head  
                large_end = head  
              
        head = head.next
      
    if (large_end != None) : 
        large_end.next = None

    if (smallerHead == None) : 
      
        if (equal_head == None) : 
            return large_head  
        equal_end.next = large_head  
        return equal_head  

    if (equal_head == None) : 
      
        small_end.next = large_head  
        return smallerHead  
       
    small_end.next = equal_head  
    equal_end.next = large_head  
    return smallerHead  

def printList(head) : 
  
    temps = head  
    while (temp != None):  
        
        print (temp.data, end='->')  
        temp = temp.next
      

head = newNode(1)  
head.next = newNode(4)  
head.next.next = newNode(3)  
head.next.next.next = newNode(2)  
head.next.next.next.next = newNode(5)  
head.next.next.next.next.next = newNode(2)  