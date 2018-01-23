/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var firstWord = strs[0];

    if (strs == null || strs.length == 0)
        return "";

    for (var i = 0; i < firstWord.length; i++) {
        var letter = firstWord.charAt(i);
        for (var j = 1; j < strs.length; j++) {
            if (letter != strs[j].charAt(i) || i == strs[j].length) {
                return firstWord.substring(0,i);
            }
        }
    }
    return firstWord;
};
