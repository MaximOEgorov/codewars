function age(arg) {
    let min_age;
    let max_age;
    if (arg <= 14) {
        min_age = Math.floor( arg - 0.1*arg );
        max_age = Math.floor( arg + 0.1*arg );
    } else {
        min_age = Math.floor( arg/2) + 7;
        max_age = (arg-7)*2;
    }
    return String(min_age)+"-"+String(max_age);
}

console.log(age(17))
