

/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
Ignore numbers and punctuation.*/

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}
function isPangram__(string){
    let a = string.split("")
    let z = new Array(91)
    debugger
    a.map(x => {z[x.toUpperCase().charCodeAt()] = 0})
    return  !z.slice(65, 90).includes(undefined);
}

//var string = "aaaaaaaaaaaaaaaaaaaaaaaaa"
//console.log(isPangram(string))
