
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


console.log(findSimilarity("bag dog dig dot doog dogs","dog"))

