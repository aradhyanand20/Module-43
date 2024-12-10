
let arr1 = [1,2,3,4,5,6,7];

function extraction(arr){
    let [a,b,,,,,last] =arr;
    return [a,b,last];

}
let newArr = extraction(arr1);
console.log(newArr);
