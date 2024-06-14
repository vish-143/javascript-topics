const callbackFunction = () => {
    console.log("I'm the function call");
}

const functions = (parameter) => {
    parameter()
}

console.log(functions(callbackFunction));

// // const callbackFunction = () => {
// //     console.log("I'm the function call");
// // }

// const functions = (parameter) => {
//     parameter()
// }

// // functions(callbackFunction)

// functions(()=>console.log("callback"))