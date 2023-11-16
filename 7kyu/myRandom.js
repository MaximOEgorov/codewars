function rndCode(){
    //coding here...
    const firstC = "ABCDEFGHIJKLM";
    const therdC = "~!@#$%^&*";
    let res = "";
    let i = 0;
    do {
        res = res + firstC[ ~~(firstC.length*Math.random())]
        i++
    } while (i < 2)
    i=0
    do {
        res = res +  String( ~~(10*Math.random()))
        i++
    } while (i < 4)
    i=0
    do {
        res = res + therdC[ ~~(therdC.length*Math.random())]
        i++
    } while (i < 2)

    return res;
}

console.log(rndCode())