var stack1 = [];
var stack2 = [];

var enqueue = (elem) => {
    stack1.push(elem);
}

var dequeue = () => {
    if (stack2.length === 0){
        if (stack1.length === 0){
            console.log('Queue is empty!!!')
        }
            while (stack1.length > 0) {
                stack2.push(stack1.pop());
              }
    }
    return stack2.pop();
}


enqueue(1);
enqueue(2);
enqueue(3);
console.log(dequeue()); // 1
console.log(dequeue()); // 2
enqueue(4);
enqueue(5);
console.log(dequeue()); // 3
console.log(dequeue()); // 4