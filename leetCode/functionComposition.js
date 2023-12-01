/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {
        let rez = x
        if (functions.length > 0) {
            for (let i=functions.length-1; i>=0; i--) {
                rez = functions[i](rez)
            }
        }
        return rez;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */