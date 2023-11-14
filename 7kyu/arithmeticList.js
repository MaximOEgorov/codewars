
var seqlist = function(first,c,l){
    res = [first];
// Thou shalt begin !
    for (i=0; i<l-1; i++) {
        res.push(res[i]+c);
    }
    return res;
}

console.log(seqlist(0,1,20))