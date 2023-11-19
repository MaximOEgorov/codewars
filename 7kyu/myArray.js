
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

// console.log(shuffleIt([1,2,3,4,5],[1,2]))

/*
Task
Coding in function threeInOne. function accept 1 parameters arr,
it's a 1D number array. Your task is to merge each of the 3 elements
into 1 elements (sum value) and return the result.

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy ;-),
so you do not have to verify the validity of the parameter, and do not worry
about the number of elements of the array is not a multiple of 3.

Example:

threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]*/

function threeInOne(arr){
    let res = []
    let sum = 0
    for (let i=0; i<arr.length; i++) {
        sum+=arr[i]
        if ((i+1)%3 == 0) {
            res.push(sum)
            sum = 0
        }
    }
return res
}

// console.log(threeInOne( [1,2,3,4,5,6,7,8,9]))

/*
Task
Coding in function isolateIt. function accept 1 parameters arr, it's a string array.
Your task is to put a character "|" into the middle of each element.

If the string length is an even number, use the insert method.
for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

If the string length is an odd number, use the replacement method.
for example: "abcde" should became "ab|de". Character c will be replaced by |.

The original array should not be changed, you need to return a new array
(if you use the map method, you do not need to worry about this).

Example
isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
isolateIt(["1234","56789"]) should return ["12|34","56|89"]
a little hint: Flexible use of slice() Will make the work more simple.*/

function isolateIt(arr){
    return arr.map(x=>x.slice(0,Math.floor(x.length/2))+"|"+x.slice(Math.floor(x.length/2)+x.length%2))
}

// console.log(isolateIt(["abzde","fgzij"]))

/*
Task
Coding in function countGrade. function accept 1 parameters scores, it's a number array.
Your task is to count the grade distribution of the scores, to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:

Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
Example
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}*/

function countGrade(scores){
   let s = scores.filter(x=>(x==100)).length
   let a = scores.filter(x=>(x<100 && x>=90)).length
   let b = scores.filter(x=>(x<90 && x>=80)).length
   let c = scores.filter(x=>(x<80 && x>=60)).length
   let d = scores.filter(x=>(x<60 && x>=0)).length
   let x = scores.filter(x=>(x==-1)).length
   return {S:s, A:a, B:b, C:c, D:d, X:x}
}

// console.log(countGrade([65,75,,85,85,95,100,100]))

/*
Task
Coding in function mirrorImage. function accept 1 parameter arr, it's a number array.
Your task is find the first pair of mirror-image number and return as an array.
The two number must be adjacent, and the returned array is in accordance with the
order from left to right.

What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number.
Two the same number of palindromes can also be seen as a pair of mirror-image number,
such as 121 and 121.

If no such number is found, return[-1,-1]

Example
mirrorImage([11,22,33,33,22,11]) should return [33,33]
mirrorImage([454,86,57,75,16,88]) should return [57,75]
mirrorImage([454,0,57,0,16,88]) should return [-1,-1]*/

function mirrorImage(arr){
    var a, b;
    var result = arr.some((x, i) => {
        a = x, b = arr[i + 1];
        return x === Number(String(b).split('').reverse().join(''));
    });

    return result ? [a, b] : [-1, -1];
}

//console.log(mirrorImage([454,86,57,75,16,88]))