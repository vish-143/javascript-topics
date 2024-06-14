// const example = () => {
//     return new Promise((resolve, reject) => {
//         // resolve("Success")
//         // reject("Fail")
//         setTimeout(() => {
//             resolve("Success")
//             //  reject("Fail")
//         }, 3000);
//     })
// }

// const fun=example()

// setTimeout(()=>{
//     console.log(example());
// },4000)

// example().then((res)=>{
//     console.log(res);
//     return "Hai"
// }).then((res2)=>{
//     console.log(res2);
//     return "Hello"
// }).then((res3)=>{
//     console.log(res3);
//     return "Bye"
// }).catch(err=>console.log(err,"Something went wrong")).finally(()=>console.log("Promises are done"))



// const example = () => {
//     return new Promise((resolve, reject) => {
//         // resolve("Success")
//         // reject("Fail")

//         setTimeout(() => {
//             resolve("Success")
//         }, 1000);
//     })
// }
// // console.log(example())

// example().then(msg => {
//     console.log(msg)
//     return "First then"
// }).then(msg2 => {
//     console.log(msg2)
// }).catch(err => { console.log("Something went wrong", err) })
//     .finally(() => { console.log("This is about promise statements") })


//async/await

console.log("first");

const example = () => {
    return new Promise((resolve, reject) => {
        // resolve("Success")
        // reject("Fail")
        setTimeout(() => {
            resolve("Success")
            //  reject("Fail")
        }, 3000);
    })
}

const sample = async () => {
    try {
        const result =await example()
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}

sample()
console.log("Test");


