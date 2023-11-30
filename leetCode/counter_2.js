/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    this.init = init
    this.curVal = init
    this.increment = function() {
        this.curVal++
        return this.curVal
    }
    this.reset = function() {
        this.curVal = this.init
        return this.curVal
    }
    this.decrement = function() {
        this.curVal--
        return this.curVal
    }
    return this
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0