
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

// var regex_=/^[-9].{0,}0000$/

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

// var regex=/(http:\/\/|https:\/\/)[a-z0-9.]{1,}(\.com|\.net)/ig

// console.log(regex.test("HTTP://CODEWARS.COM".match(regex)))

/*
Task
You might have guessed the task. Yes, This time your task is to write a regular expressions
matching all palindrome substring of a string.

The rules:

The string contains letters, numbers, underscores and spaces. space is the separator.
the substring means the whole of a substring that separated by spaces. For example:
"aaa bcccd" should match a substring "aaa" , should not match "ccc", "ccc" is a part
of substring "bcccd"

Palindrome substring length range is 2-7. It means don't match the substring which length=1 or length>7.
A string may contain multiple palindrome substring.
    You should not ignore case.
Your regular expression name should be regex and your result should be a string array.
    Examples
"aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
"aaa bcccd".match(regex)               should return [ 'aaa' ]
"_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
"ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
"121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
"aabbbcccc d".match(regex)             should return null
"1    1".match(regex)                  should return null
"abbA CdDc".match(regex)               should return null*/

// var regex=/*/


/*Task
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in
the sentence turns to lowercase, and the other letters are capitalized.
Looks very strange? Because this is the form of alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"*/

function alienLanguage(str){
    return str.toUpperCase()
        .split(" ")
        .map((a) => a.substring(0,a.length-1) + a.substring(a.length-1,a.length).toLowerCase() )
        .join(" ")
}

// console.log(alienLanguage("this is an example"))

/*Move the first letter of each word to the end of it,
then add "ay" to the end of the word.
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}
function pigIt__(str){
   return str.split(" ")
       .map(x => {
           if ((new RegExp(/\w+/)).test(x)) {
               return x.substring(1,x.length) + x.substring(0,1) + "ay"
           } else {
               return x
           }
       })
       .join(" ")
}

console.log(pigIt('Pig latin is cool'))