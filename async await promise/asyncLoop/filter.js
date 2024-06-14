// const arr=[1,2,3,4,5]
// const newArr=arr.filter((val)=>{
//     if(val%2===0){
//         return val
//     }
// })
// console.log(newArr)

const objArr=[
    [{name:"Vishva",age:22,domain:"react"}]
              [{name:"Boopesh",age:23,domain:"react"}]
              [{name:"Vignesh",age:25,domain:'react'}]
            ]
const NewArray=objArr.flat(depth);
const arrayyy = NewArray.filter((value)=> value.age !== 22)
console.log("NewArray",NewArray)