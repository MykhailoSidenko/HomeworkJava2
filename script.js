"use strict"

// let num = (parseInt(prompt('Text a number here')));
// console.log(num);

// for (num = 0 ; num < 100; num ++ ) {
//     if (num % 5 === 0); {
//         console.log(num);
//     } 
// }

// -------------------------------------------------------

let num = +prompt('Text a number here');
while (!Number.isInteger(num)) {
    num = +prompt('Not a number!')
};
for (num ==0; num <=100; num ++) {
    if (num%5 == 0) {
        console.log(num); };
    }; 

for (num ==0; num >100; num ++) {
    if (num%5 == 0) {
        console.log("sorry. no number"); break; };
    }; 
        


// ---------------------------------------------------------------

//     } else if (num >100) {
//         alert("No number!")
//     } break;
// } 
// for ( ; num >100; num) {
//     if (num%5 !==0){
//         alert("No number")
//     } break;
// }




// let number = +prompt("EnterTheNumber");

// while (!Number.isInteger(number)) {
//   number = +prompt("EnterTheNumber");
// }
// if (number < 5) {
//   console.log("Sorry, no numbers");
// }
// for (let i = 0; i <= number; i++) {
   
//   if (i % 5 === 0) {
//       if(i < 5){
//           // TO
//     }else{
//       console.log(i);
//     }
//   }
// } 