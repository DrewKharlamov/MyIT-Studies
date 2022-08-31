// const firstNumber = prompt ('Give me the first number');

// if (isNaN(firstNumber)){
//     alert("Wrong number");
// } else{
//     let secondNumber = prompt('Give me second number');

//     if(isNaN(secondNumber)){
//         alert("Wrong number");
//     } else{
//         let multi = firstNumber * secondNumber;
//         console.log(firstNumber * secondNumber);

//         const msg = `${firstNumber} * ${secondNumber} = ${multi}`;
//         alert(msg);
//     }
    
// } 

//-----------cycles----------//

let firstNumber = prompt ('Give me the first number');

while (isNaN(+firstNumber) || firstNumber === null) {
    alert("Wrong number");

    firstNumber = prompt ('Give me the number again!')
}

let secondNumber = prompt("Give me a second number");

while (isNaN(+secondNumber) || secondNumber === null) {
    alert("Wrong number");

    secondNumber = prompt("Give me a second number");
}

let multi = firstNumber * secondNumber;
console.log(firstNumber * secondNumber);

const msg = `${firstNumber} * ${secondNumber} = ${multi}`;
alert(msg);
    
