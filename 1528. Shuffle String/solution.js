
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {

    let sIndex = s.split('');
    let r = [];

    for (i = 0; i < indices.length; i++) {
        r[indices[i]] = sIndex[i];


    }
    return r.join('');
};


//time complexity O(n)
//space complexity O(n)
