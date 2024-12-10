
let arr1 = [1,2,3,4,4,2];

function removeDuplicate(arr){
 return new Set(arr)
}
let newArr = removeDuplicate(arr1);
console.log(newArr);