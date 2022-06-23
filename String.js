let singleQuotes = 'HOW ARE YOU';
let doubleQuotes = "one two three four";

//console.log(singleQuotes);
// console.log(doubleQuotes);
// let char=singleQuotes.charAt(5);
// let ascii = singleQuotes.charCodeAt(5);
// let substr=singleQuotes.substring(2,10);
// console.log(char);
// console.log(ascii);
// console.log(substr);

let arrStr=singleQuotes.split(" ");
let strtrim = singleQuotes.trim();
console.log(arrStr);
let str=arrStr.join("+");
console.log(str);