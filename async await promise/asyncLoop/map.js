// const mapFun=()=>{
//     let arr=[2,3,4,5,6]
//     let sqrt=arr.map((ele,index,arr)=>{
//         return ele*ele
//     })
//     console.log(sqrt)
// }
// mapFun()
// //Map can't able to changes it original array
// const mapFun2=()=>{
//     let arr=[2,3,4,5,6]
//     arr.map((ele,index,arr)=>{
//         return ele*ele
//     })
//     console.log(arr)
// }
// mapFun2()
// //Empty map element returns undefined
// const mapFun3=()=>{
//     let arr=[2,3,4,5,6]
//     let sqrt=arr.map(()=>{

//     })
//     console.log(sqrt)
// }
// mapFun3()
// //Map using objects
// const mapFun4=()=>{
//     let arr=[{name:"Vishva"},{age:23}]
//     let sqrt=arr.map((ele)=>{
//         return ele.name
//     })
//     console.log(sqrt)
// }
// mapFun4()

const objArr=[{name:"Vishva",age:22,domain:"react"},
              {name:"Boopesh",age:23,domain:"react"},
              {name:"Vignesh",age:25,domain:'react'}]
const updation=objArr.map((element)=>{
    if(element.age>22){
        return{
            ...element,
           domain:"angular"
        }
    }
      
    return element
})
console.log("Updation",updation)
console.log("ObjArr",objArr)