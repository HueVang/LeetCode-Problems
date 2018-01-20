/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var num = x;
    var stringNum = String(x);
    var reverseNum = stringNum.split('').reverse().join('');

    return Number(stringNum) == Number(reverseNum) ? true : false;
};
