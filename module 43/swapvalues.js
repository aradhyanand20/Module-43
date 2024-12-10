
let a = 4;
let b = 5;

function swapping(num1,num2){
[num1,num2] = [num2,num1];
return [num1,num2];
}

let swappedValue= swapping(a,b);
console.log(swappedValue);

