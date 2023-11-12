
function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}

function destroyer2(arr) {
    const valsToRemove = Array.from(arguments).slice(1);

    return arr.filter(function(val) {
        return !valsToRemove.includes(val);
    });
}
function destroyer3(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        let removeElement = false;
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                removeElement = true;
            }
        }
        if (!removeElement) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
