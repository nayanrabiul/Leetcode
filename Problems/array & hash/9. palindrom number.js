/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = String(x);
    let l = str.length;
    let flag = true;
    for (let i = 0; i < l / 2; i++) {
        if (str[i] != str[l - i - 1]) flag = false;
    }
    return flag;
};
