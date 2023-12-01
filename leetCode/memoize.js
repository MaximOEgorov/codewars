/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let mp = new Map
    let callCount = 0
    let param = ''
    return function (...args) {
        if ([...args].length > 1) {
            param = String(args[0]) + "+" + String(args[1])
        } else {
            param = String(args[0])
        }
        if (callCount === 0 || !mp.has(param)) {
            mp.set(param, fn(...args))
            callCount++
        }
        return mp.get(param)
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 callCount += 1;
 return a + b;
 })
 memoizedFn(2, 3) // 5
 memoizedFn(2, 3) // 5
 console.log(callCount) // 1
