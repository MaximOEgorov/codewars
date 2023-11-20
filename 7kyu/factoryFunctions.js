/*
Task
Define a factory function person (yes, all lowercase letters) which accepts the following parameters in the following order:

firstName
lastName
age
gender
employed
occupation
married

The names of the object's keys should be identical to the names of the parameters mentioned above.

The object should (then) also have the following methods:

sayName - this should return the full name of the person (e.g. {firstName: "John", lastName: "Doe"} => "John Doe"
// when the sayName() method is called)
introduce - this should return a string of the following format: "Hello, my name is FULL_NAME.  I am AGE years old.  I am a GENDER."
IMPORTANT: For the introduce() method of the person, each sentence is separated from the next by exactly TWO whitespace characters.

In the next Kata of this series, we will be investigating how "inheritance" / object composition is done through factory functions.*/


function person(
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        employed: employed,
        occupation: occupation,
        married: married,
        sayName() {
            return firstName + ' ' + lastName;
        },
        introduce() {
            return "Hello, my name is "+this.sayName()+".  I am "+this.age+" years old.  I am a "+this.gender+"."
        },
    }
}

// var john = person("John", "Doe", 18, "male", false, null, true);
// console.log(john.sayName())

/*
Task
Define a function constructionWorker which "inherits" from the person function as demonstrated in the Overview
and accepts the following parameters in the following order: firstName, lastName, age, gender, married, boss.
The keys of the object returned should be identical to the name of the parameters mentioned above.
Apart from that, a construction worker is always employed so employed should be set to true. Their occupation
is also naturally a "construction worker".

On top of all that, a constructionWorker should have a method sayBossName which returns a string
of the following format: "My boss is called BOSS_NAME and is a very nice person!"
where BOSS_NAME is the name of the boss of said construction worker.*/

function constructionWorker(firstName, lastName, age, gender, married, boss) {
    var obj = person(firstName, lastName, age, gender, true, "construction worker", married)
    obj.boss = boss;
    obj.sayBossName = function() {
        return ("My boss is called "+this.boss+" and is a very nice person!");
    };
    return obj;
}

