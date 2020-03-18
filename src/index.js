exports.min = function min (array) {
    if (!array || array=="") return 0
    return array.sort(function(a, b){return a - b})[0]
    }
    
    exports.max = function max (array) {
    if (!array || array=="") return 0
    return array.sort(function(a, b){return a - b})[array.length-1]
    }
    
    exports.avg = function avg (array) {
    if (!array || array=="")
    return 0
    let sum=0
    for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
    }
    return sum/array.length
    }
    