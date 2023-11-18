
/*
Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, an array list of which animals we should count. The result should be a number array.

    Examples
countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]*/


    function countAnimals(animals,count){
        let res = []
        for (let i=0; i<count.length; i++) {
            res.push((animals.match( new RegExp(count[i],"g"))||[]).length)
        }
        return res;
    }

//--------    console.log(countAnimals("dog,dog,cat",["dog","cat"]))

/*Task
Coding in function findSimilarity. function accept two parameters:
str, a sentence contains some words, separated by spaces; word, a sample word.

Your task is to keep the words that are similar to the sample word,
and to remove the other words.

The similarity is defined as: the same length as the sample;
the letter at the beginning and the end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Examples
findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
findSimilarity("bag dog dig dot doog dogs","god") should return ""
Hint: Use filter() will make your work easier;
If you don't know how to solve the kata, please refer to the examples of lesson.*/

function findSimilarity(str,word){
    var regstr=word[0]                       //first letter
        +word.slice(1,-1).replace(/./g,".")  //middle letters
        +word.slice(-1);                     //last letter
    var reg1=new RegExp("^"+regstr+"$");
    return str.split(" ")
        .filter((x) => reg1.test(x))
        .join(" ")
}


// console.log(findSimilarity("bag dog dig dot doog dogs","dog"))

/*Task
This time you do not need coding in function. You just need to write a regular expression that matches the specified numeric string. I've given the regular expression name: "regex", please don't modify the name.

    According to the following rules:

    The numeric string first digit should be "9".
    At the end of the number string there are at least four "0".
    It can also be a negative number(This means that the string may be started by "-", maybe not)
Examples
regex.test("90000") should return true
regex.test("-90000") should return true
regex.test("900000000") should return true
regex.test("91230000") should return true
regex.test("-91230000") should return true*/

var regex_=/^[-9].{0,}0000$/

//console.log(regex.test("-90000"))

/*Task
This time you need to write a regular expression that matches all URL contained in the string.
The rules:

URL start with http:// or https://
URL end with .com or .net
The middle part of URL can use letters, numbers and dots
Need to ignore case, and a string may contain multiple URLs
Your regular expression name should be regex and your result should be a string array.
    Examples
"http://codewars.com".match(regex)
should return [ 'http://codewars.com' ]
"http://www.codewars.com".match(regex)
should return [ 'http://www.codewars.com' ]
"HTTP://CODEWARS.COM".match(regex)
should return [ 'HTTP://CODEWARS.COM' ]
"https://www.codewars.com".match(regex)
should return [ 'https://www.codewars.com' ]
"http://www.codewars.net".match(regex)*/

var regex=/^(http:\/\/|https:\/\/)[a-z0-9.]{0,}(.com|.net)$/ig

