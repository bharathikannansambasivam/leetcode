/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let ans = 0;
    for (i=0;i*i<=x;i++){
        ans = i;
    }
return ans;

};

//time complexity   O(n)
//space compleity   O(1)