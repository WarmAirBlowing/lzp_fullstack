// function generateCapitalStringWithHashTag(str) {
//     // 1.是否为空   .length == 0 null ''
//     // 2.是否超过140字  .length
//     // 3.#  # +
//     // 4.每个单词首字母都大写   

//     return str.length > 140 || str == '' ? false : '#' + str.split('')
//         //es6新方法，遍历数组的每一项，并用一个函数处理，返回新的数组
//         .map(function(word){
//             console.log(word);
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         })
//         .join(' ')
    
// }
function generateCapitalStringWithHashTag(str){
    return str.length > 140 || str == '' ? false : '#' + str.split(' ')
        //es6新方法，遍历数组的每一项，并用一个函数处理，返回新的数组
        .map(capitalize)
        .join(' ')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let c = capitalize('come in')
console.log(c);

let s = generateCapitalStringWithHashTag('hello world')
console.log(s);

let str = "hello world"
// let str2 = str.split(':')
console.log(str.split(':'));
// console.log(str2.charAt(0));

