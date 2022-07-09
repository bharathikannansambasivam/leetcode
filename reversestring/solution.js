var reverseString = function(s) {
    for(let i=0;i < Math.floor(s.length/2);i++){
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
 };