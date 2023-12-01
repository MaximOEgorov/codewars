

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  debugger
  if (typeof obj === 'object') {
      return (Object.entries(obj).length === 0)
  } else {
      return (obj.length === 0)
  }
};



console.log(isEmpty({}))