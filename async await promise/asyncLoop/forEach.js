// const forEachs=()=>{
//     const arr=[2,3,4,5,6,8,7]
//     const sqrt=[]
//     const value=arr.forEach((data,index,arr)=>{
//     sqrt.push(arr[index]*arr[index])
// })
//     console.log(value)
//     console.log(sqrt)
// }
// forEachs()

const forEachObject=()=>{
    const objArr=[{name:"Vishva"},{age:23},{working:"Mitrahsoft"}];
    const newArr=[];
    objArr.forEach((val,index)=>{
        console.log(val.name)
        newArr.push(val,index)
    })
    console.log(newArr)
}
forEachObject()
// const array=[1,2,3]
// let sum=0
// const sumFunction=(a,b)=>a+b;
// array.forEach(value=>{
//     sum=sumFunction(sum,value)
// })
// console.log(sum)

// const items = ["item1", "item2", "item3"];
// const copyItems = [];
// items.forEach((item) => {
//   copyItems.push(item);
// });
// console.table(copyItems)

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);

// async function displayValuesWithWait(value) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("The current value is: ", value);
//         resolve();
//       }, 1000);
//     });
//   }
  
//   async function valueLogger() {
//     const values = [1, 2, 3, 4, 5];
  
//     console.log("Starting to display values");
  
//     values.forEach(async (value) => {
  
//       console.log('About to run displayValuesWithWait() process for value ', value);
  
//       await displayValuesWithWait(value);
  
//       console.log('Finished displayValuesWithWait() for value ', value);
//     });
  
//     console.log("Finished displaying values");
//   }
//   valueLogger()