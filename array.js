'use strict';

function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'shallowClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    for (const keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                targetObj[keys] = source[keys].constructor === Array ? [] : {}
                targetObj[keys] = deepClone(source[keys])
            } else {
                targetObj[keys] = source[keys]
            }
        }
    }
    return targetObj
}

function indexOfArray(value,array,name = 'name') {
    let index
    let re = array.find(function(v,i,array){   
        index = i
        return v[name] == value;
    })
    if (re) {
        return index
    }

}

export {
    deepClone,
    indexOfArray,
}

// module.exports = { deepClone, indexOfArray }

