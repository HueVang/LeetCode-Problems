/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var values = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 };
    var sum = 0;
    var currentVal;
    var pastVal = 0;
    var subtract = false;
    var numeralArray = s.split('').reverse();

    numeralArray.forEach((numeral) => {
        currentVal = values[numeral];
        currentVal < pastVal ? subtract = true : subtract = false;
        subtract === true ? sum -= currentVal : sum += currentVal;
        pastVal = currentVal;
    });

    return sum;

};
