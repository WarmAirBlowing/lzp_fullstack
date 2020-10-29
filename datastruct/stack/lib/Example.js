"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack"); // es6模块化引入
var StackObj_1 = require("./StackObj");
var stack = new Stack_1["default"]();
stack.push("第一条数据");
stack.push("第二条数据");
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.clear());
var decimalToBinary = function (decNumber) {
    var stack = new Stack_1["default"](); // 入栈每个位
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var decimalToBinaryObjStack = function (decNumber) {
    var stack = new StackObj_1["default"](); // 入栈每个位
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
const testNumber = 999989993232287;
// var testNumber = 4;
console.time("数组栈"); // console.time()时间调试工具
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");
var testObjNumber = 999989993232287;
console.time("对象栈"); // console.time()时间调试工具
console.log(decimalToBinaryObjStack(testObjNumber));
console.timeEnd("对象栈");
