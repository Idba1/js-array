

let numbers = [33, 66,99, 99, 77, 11, 22, 33,66, 55];
// let reverse = numbers.reverse();
// console.log(reverse);


/* let revers = [];
for(let number of numbers){
    // console.log (number);
    revers.unshift(number);
} */
// console.log(revers);


/* let reversNumber = [];
for(let i=0 ; i<numbers.length ; i++){
    let revNum = numbers[i];
    reversNumber.unshift(revNum);
}
console.log(reversNumber); */



let reversNumber = [];
for(let i=numbers.length - 1 ; i>=0 ;i--){
    let revNumber = numbers[i];
    console.log(revNumber);
    reversNumber.push(revNumber);
}
console.log(reversNumber);