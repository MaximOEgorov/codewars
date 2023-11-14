
const vowels = 'aeiou';

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
function disemvowel1(str) {
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}
function disemvowel2(str) {
    let vowels = ["a","e","i","o","u"];
    let newstr = "";
    for (let i=0; i< str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            newstr = newstr+ str[i];
        }
    }
    return newstr;
}

console.log(disemvowel("This website is for losers LOL!"))
