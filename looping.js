/**
 *       LOOPING Technique
 * ------------------------------
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
*/



//  1. for loop
for (let i=0; i<10; i++){
    // console.log(i);
}


// 2. while loop
let i = 0;
while(i<=10){
    // console.log(i);
    i++;
} 




//  4. for of --> array loop korar jonno
let numbers = [33, 66,99, 99, 77, 11, 22, 33,66, 55];
for(const number of numbers){
    // console.log(number);
}


const friends = ['abul', 'babul', 'cabul', 'dabul'];
for(const friend of friends){
    // console.log(friend);
}



// 5. for in --> object loop korar jonno
let elements = {
    mouse : 'dell' ,
    Keyboard : 'hp' ,
    laptop : 'Asus' ,
    charger : 'Apple' 
}
for(let element in elements){
    console.log(element);
}
// const value = Object.values(elements);
// console.log(value);
