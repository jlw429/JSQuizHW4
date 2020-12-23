// Pre-class drill for 12/14
// //Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.
// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)
// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)
// Input: 10
// Output: 55

function Sum(num) {
    var add =0;
    for(var i=1;i<=num;i++){
        add = add + i; //add = 0 + 1 = 1
        //add = 1 + 2 = 3
        //add = 3 + 3 = 6
        //add = 6 + 4 = 10
    }
    alert("Sum = "+add);
}

Sum(4);
Sum(7);


// Write a function that takes in an array of numbers and outputs the maximum number.
// Ex:
// Input: [ 1, 2, 3 ]
// Output: 3
// Input: [ 3, 6, 4, 5, 2, 1 ]
// Output: 6
// Input: [ 3, 3, 3 ]
// Output: 3

/*  
var highest = 0;
for(var i=0;i<arr.length;i++){
    if(arr[i] > arr[i+1])
    {
        highest = arr[i]
    }
    else{
        highest = arr[i+1]
    }
}
*/


