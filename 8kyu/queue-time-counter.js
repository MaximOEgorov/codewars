function queue(queuers, pos){
    //your code here
    let curPos;
    let tickets;
    let curQueue;
    let res;
    curPos=pos;
    curQueue=queuers;
    tickets=queuers[pos];
    res = 0;
    do {
        if (curQueue[0] == 1 && curPos>0) {
            curQueue = curQueue.slice(1);
            curPos--;
            res++;
        } else if (curQueue[0] > 1 && curPos>0) {
            let tmp = curQueue[0]-1;
            curQueue = curQueue.slice(1);
            curQueue.push(tmp);
            curPos--;
            res++;
        } else if (curQueue[0] > 1 && curPos==0) {
            let tmp = curQueue[0]-1;
            curQueue = curQueue.slice(1);
            curQueue.push(tmp);
            curPos=curQueue.length-1;
            tickets--;
            res++;
        };

    } while (tickets>1||(curPos>0 && tickets==1));
    return res + 1;
}


console.log(queue([2, 5, 3, 6, 4], 4));

/*
describe("Basic Tests",() =>{
    Test.assertEquals(queue([2, 5, 3, 6, 4], 0), 6);
    Test.assertEquals(queue([2, 5, 3, 6, 4], 1), 18);
    Test.assertEquals(queue([2, 5, 3, 6, 4], 2), 12);
    Test.assertEquals(queue([2, 5, 3, 6, 4], 3), 20);
    Test.assertEquals(queue([2, 5, 3, 6, 4], 4), 17);
})*/
