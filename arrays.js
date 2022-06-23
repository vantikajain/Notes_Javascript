//array declare
let arr=[];
let array=[1,2,3,4,5];
// console.log(array);
// console.log(array.length);
// let i=0;
// while(i<array.length){
//     console.log("elem at ",i,"is",array[i]);
//     i++;
// }

//push , unshift

array.push("last value");//pushes any type of value at last of array
array.unshift("first value");// puts value at first position
console.log(array);
array.shift(array)//removes element at the beginning
array.pop(array)//removes element at last
console.log(array);

let partOfAnArray=array.slice(2,4);
console.log(partOfAnArray);

//array.splice(2,3);
//index of
//contain