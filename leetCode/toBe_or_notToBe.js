/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    debugger
    this.val = val
    this.toBe = function(newVal) {
        if (this.val === newVal) {
            return true
        } else {
            throw new Error("Not Equal")
        }
    }
    this.notToBe = function(newVal) {
        if (this.val !== newVal) {
            return true
        } else {
            throw new Error("Equal")
        }
    }
    return this
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(5))