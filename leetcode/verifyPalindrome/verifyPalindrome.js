"use strict";
exports.__esModule = true;
var VerifyPalindrome = /** @class */ (function () {
    function VerifyPalindrome() {
    }
    //给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
    VerifyPalindrome.prototype.isPalindrome = function (s) {
        var i = 0;
        var j = s.length - 1;
        while (i < j) {
            if (!/[0-9a-zA-Z]/.test(s[i])) {
                i++;
                continue;
            }
            if (!/[0-9a-zA-Z]/.test(s[j])) {
                j--;
                continue;
            }
            var left = s[i];
            var right = s[j];
            if (left.toLowerCase() !== right.toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    };
    ;
    return VerifyPalindrome;
}());
exports["default"] = VerifyPalindrome;
