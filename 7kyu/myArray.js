
/*
Task
Coding in function sortIt. function accept 1 parameters arr, it's a number array.
Your task is to sort the array according to the specified conditions, and returns
a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order) for example:

sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
conditions2: If the same number of elements, according to the number values
(in descending order) for example:

sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
Comprehensive two conditions should be like this:

sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]*/

function sortIt(arr) {
    ar = arr.slice()
    ar.sort((x, y) => {
        nx = 0;
        ny = 0;
        for (i of arr) {
            if (i == x) nx++;
            if (i == y) ny++;
        }
        if (nx > ny) return (1);
        if (nx < ny) return (-1);
        if (nx == ny) return (y - x)
    })
    return (ar)
}


/*Task
Create a function shuffleIt. The function accepts two or more parameters.
The first parameter arr is an array of numbers, followed by an arbitrary
number of numeric arrays. Each numeric array contains two numbers, which
are indices for elements in arr (the numbers will always be within bounds).
For every such array, swap the elements.
Try to use all your new skills: arrow functions, the spread operator,
destructuring, and rest parameters.

    Example:

shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]*/

function shuffleIt(arr,...sha){
    for (let i=0; i<sha.length; i++) {
        [arr[sha[i][1]], arr[sha[i][0]]] = [arr[sha[i][0]], arr[sha[i][1]]]
    }
    return arr
}

console.log(shuffleIt([1,2,3,4,5],[1,2]))