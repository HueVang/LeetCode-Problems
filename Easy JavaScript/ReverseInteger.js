/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = 2147483647;
    const min = -2147483647;
    var sign;
    x = String(x).split('');
    if (x[x.length-1] == '0')
        x.pop();
    if (x[0] == '-')
        sign = x.shift();
    if (sign != undefined) {
        x.reverse().unshift(sign);
        x = Number(x.join(''));
        return x >= min && x <= max ? x : 0;
    }
    x = Number(x.reverse().join(''));
    return x >= min && x <= max ? x : 0;
};
