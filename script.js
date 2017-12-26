
function getStr () {
    var str = 'get-element-by-id';
    var reg = /-\w/g;
    var nstr = str.replace(reg, function () {
        var newstr = arguments[0].replace('-', '');
        return newstr.toLocaleUpperCase();
    });
    return nstr;
}
console.log(getStr());

function myIndexOf (z) {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === z) {
            return i;
        } else {
            return -1;
        }
    }
}
console.log(myIndexOf('a'));

function repeatStr (n) {
    var str = 'abc';
    for (var i = 1; i < n; i++) {
        str += 'abc';
    }
    return str;
}
console.log(repeatStr(3));