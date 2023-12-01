/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2])
        .then((data) => {
                let sum = data[0]+data[1]
                return sum
            }
        )


};


/* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4*/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
