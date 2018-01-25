var valids = ["()", "{}", "[]"];
var isValid = function(s) {
    var stringArray = s.split('');

    if (stringArray.length % 2 != 0 || stringArray.length == 0) {
        return false;
    }

    for (var i = 0; i < stringArray.length-1; i++) {
        if (valids.indexOf(stringArray[i] + stringArray[i+1]) != -1) {
            console.log('got it: ', (stringArray[i] + stringArray[i+1]));
            stringArray.splice(i, 2);
            i = -1;
        }
    }

    if (stringArray.length == 0) {
        return true;
    }

    return false;
};
