//  DESCRIPTION

// Write a method, that will get an integer array as parameter and will process every number from this array.
//
//     Return a new array with processing every number of the input-array like this:
//
// If the number has an integer square root, take this, otherwise square the number.
//
//     Example
//     [4,3,9,7,2,1] -> [2,9,3,49,4,1]

//  SOLUTION (1)
function squareOrSquareRoot(array) {
    return array.map(x => {
        const r = Math.sqrt(x);
        return (r % 1 == 0) ? r : (x*x);
    });
}

function distanceBetweenPoints(a, b) {

    return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y)); // your code here
}
