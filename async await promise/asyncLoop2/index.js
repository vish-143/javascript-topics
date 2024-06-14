//for loop
// const fun=()=>{
//     let arr=[1,2,3,4]
//     let sqrt=[]
//     for(let i=0;i<arr.length;i++){
//         sqrt.push(arr[i]*arr[i])
//     }
//     console.log(sqrt)
// }
// fun()

//foreach
// const fun2=()=>{
//     let arr=[1,2,3,4]
//     let sqrt=[]
//     arr.forEach((data,index,array)=>{
//         // console.log(array)
//         sqrt.push(array[index]*array[index])
//     })
//     console.log(sqrt)
// }
// fun2()

//map
// const fun3=()=>{
//     let arr=[1,2,3,4]
//     const result=arr.map((ele)=>{
//         if(ele%2==0){
//             return ele*ele
//         }        
//         return ele
//     })
//     console.log(result)
// }
// fun3()
// const objArr=[{name:"Vishva",age:22,domain:"react"},
//               {name:"Boopesh",age:23,domain:"react"},
//               {name:"Vignesh",age:25,domain:'react'}]
// const updation=objArr.map((element)=>{
//     if(element.age>22){
//         return{
//             ...element,
//            domain:"angular"
//         }
//     }
      
//     return element
// })
// console.log("Updation",updation)
// console.log("ObjArr",objArr)

// const chainLoop = () =>{
//     let arr=[2, 4, 6, 10, 15];
   
//     let sqrtArr = arr.filter((data, index, arr)=>{
//         console.log('data', data,'index', index,'arr', arr);
//         console.log("filtered Data", data>=6)
//             return data >= 6
//     })
//     .map((ele, i, arr)=>{
//         console.log("ele",ele,"i",i)
//         return  {num:ele, sqrtNum:ele*ele}
//     })
//     console.log("sqrtArr",sqrtArr);
//     // console.log('value', value);
// }
// chainLoop()

//chainloop
// const chainLoop=()=>{
//     let arr=[1,2,3,4,5,6,7,8,9]
//     let res=arr.filter((ele)=>{
//         return ele%2==0
//     }).map((element)=>{
//         return {num:element,res:element*element}
//     })
//     console.log(res)
// }
// chainLoop()

// const nestedLoop = () =>{
//     let arr=[[10,11, 12], [20,21, 22], [30,], [40,], [50]];
   
//   let sqrtArr = arr.map((ele, i)=>{
//     // console.log('ele', ele, 'i', i);
//         return  ele.map((data)=>{
//             console.log('data', data);
//             return {num:data, sqrtNum:data*data}
//         })
//     })
//     console.log("sqrtArr",sqrtArr);
// }

// nestedLoop()

// const nestedLoop=()=>{
//     let arr=[[1,2,3],[4],[5,6,7],[8],[9,10]]
//     let res=arr.map((ele)=>{
//         const result=ele.map((element)=>{
//             return element*element
//         }
//        )
//        return result
//     })
//     console.log(res)
// }
// nestedLoop()

// const fruitBasket = {apples: 27,grape: 0,mango: 14,jack: 15}
//   const sleep = ms => {
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }
//   // const getNumFruit = fruit => {
//   //     return fruitBasket[fruit]
//   // }
  
//   const getNumFruit = fruitName => {
//     console.log('fruitName', fruitName)
//     return sleep(2000).then(v => fruitBasket[fruitName])
//   }
//   const fruitsToGet = ['apple', 'grape', 'mango']
//   const forLoop = async () => {
//     console.log('Start')
  
//     for (let index = 0; index < fruitsToGet.length; index++) {
//       const fruit = fruitsToGet[index]
//       console.log("fruit",fruit)
//       const numFruit = await getNumFruit(fruit)
//       console.log('numFruit-->',numFruit)
//     }
//     console.log('End')
//   }
//   forLoop()

// const fruitBasket={apple:27,grape:20,mango:15}
// const sleep=ms=>{
//     return new Promise((resolve,reject)=>setTimeout(resolve,ms))
// }
// const getNumFruit=fruitName=>{
//     console.log("fruitname",fruitName)
//     return(sleep(2000).then(resolve=>fruitBasket[fruitName]))
// }
// const fruitToGet=["apple","grape","mango"]
// const forLoop=async()=>{
//     console.log("Start")
//     for(let i=0;i<fruitToGet.length;i++){
//         const fruit=fruitToGet[i]
//         console.log("fruit",fruit)
//         const numFruit=await getNumFruit(fruit)
//         console.log("numFruit",numFruit)
//     }
//     console.log("end")
// }
// forLoop()

// const phone={apple:20,samsung:3,nokia:6}
// const sleep=ms=>{
//     return new Promise((resolve,reject)=>setTimeout(resolve,ms))
// }
// const getPhone=phones=>{
//     console.log("phones",phones)
//     return sleep(2000).then(resolve=>phone[phones])
// }
// const phoneToGet=["apple","samsung","nokia"]
// const forLoop=async()=>{
//     console.log("start")
//     for(let i=0;i<phoneToGet.length;i++){
//         const phoneModel=phoneToGet[i]
//         console.log(phoneModel)
//         const numPhone=await getPhone(phoneModel)
//         console.log("numPhone",numPhone)
//     }
//     console.log("End")
// }
// forLoop()

// const fruitBasket = {
//     apple: 27,
//     grape: 0,
//     mango: 14,
//     jack: 15,
//   }
//   const sleep = ms => {
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }
//   // const getNumFruit = fruit => {
//   //     return fruitBasket[fruit]
//   // }
  
//   const getNumFruit = fruitName => {
//     console.log('fruitName', fruitName)
//     return sleep(2000).then(v => fruitBasket[fruitName])
//   }
//   const fruitsToGet = ['apple', 'grape', 'mango']
//   const forEachLoop = _ => {
//     console.log('Start')
  
//     fruitsToGet.forEach(async fruit => {
//     console.log("fruit",fruit)
//       const numFruit = await getNumFruit(fruit)
//       console.log('numFruit-->', numFruit)
//     })
//     console.log('end');
//   }
// forEachLoop()

// const fruitBasket={apple:2,mango:5,orange:8}
// const sleep=ms=>{
//     return new Promise((resolve,reject)=>setTimeout(resolve,1000))
// }
// const getFruitName=fruitName=>{
//     console.log("fruitName",fruitName)
//     return sleep(2000).then(resolve=>fruitBasket[fruitName])
// }
// const fruitToGet=["apple","mango","orange"]
// const forEachLoop=()=>{
//     console.log("Start")
//     fruitToGet.forEach(async fruit=>{
//         console.log("fruit",fruit)
//         const numFruit=await getFruitName(fruit)
//         console.log(numFruit)
//     })
//     console.log("End")
// }
// forEachLoop()
// const mapLoopWithAsync = async()=> {
//     console.log('Start')
  
//     const numFruits = fruitToGet.map(async fruit => {
//       const numFruit = await getFruitName(fruit)
//       console.log('fruitCount-->', numFruit)
//       return numFruit
//     })
  
//     console.log('numFruits',numFruits)
//     const promise=await Promise.all(numFruits)
//     console.log("promise",promise)
  
//     console.log('End')
//   }
//   mapLoopWithAsync()

// const fruitBasket={apple:2,orange:5,grapes:7}
// const sleep=ms=>{
//     return new Promise((resolve,reject)=>setTimeout(resolve,ms))
// }
// const getFruitName=fruitName=>{
//     console.log("fruitname",fruitName)
//     return sleep(2000).then(resolve=>fruitBasket[fruitName])
// }
// const fruitName=["apple","orange","grapes"]
// // const filterLoop=()=>{
// //     console.log("start")
// //     const result=fruitName.filter(async fruit=>{
// //         console.log("fruit",fruit)
// //         const numFruit=await getFruitName(fruit)
// //         console.log("numFruit",numFruit)
// //         return numFruit>5
// //     })
// //     console.log("result",result)
// //     console.log("End")
// // }
// // filterLoop()
// const filterMap=async()=>{
//     const promises=fruitName.map(fruit=>getFruitName(fruit))
//     console.log("promises",promises)
//     const numFruit=await Promise.all(promises)

//     const morethan20=fruitName.filter((fruit,index=>{
//         const numFruits=numFruit[index]
//         console.log(numFruits)
//         return numFruits>5
//     }))
//     console.log(morethan20)
// }
// filterMap()

// const fruitBasket={apple:34,mango:24,orange:56}
// const sleep=ms=>{
//     return new Promise((resolve,reject)=>setTimeout(resolve,ms))
// }
// const getFruitName=fruitName=>{
//     console.log("fruitName",fruitName)
//     return sleep(2000).then(resolve=>fruitBasket[fruitName])
// }
// const fruitsToGet=["apple","mango","orange"]
// const mapFunction=async()=>{
//     console.log("Start")
//     const morethan25=fruitsToGet.filter(async (fruits)=>{
//         console.log(fruits)
//         const numFruits=await getFruitName(fruits)
//         console.log(numFruits)
//         return numFruits>26
//     })
//     console.log("morethan",morethan25)
// }
// mapFunction()
// const mapFunction=async ()=>{
//     console.log("Start")
//     const promise=fruitsToGet.map(async fruit=>{
//         console.log(fruit)
//         const numFruit=await getFruitName(fruit)
//         console.log(numFruit)
//         return numFruit
//     })
//     console.log(promise)
//     const result=await Promise.all(promise)
//     console.log(result)
// }
// mapFunction()
// const forEach=()=>{
//     console.log("start")
//     fruitsToGet.forEach(async fruit=>{
//         console.log(fruit)
//         const numFruit=await getFruitName(fruit)
//         console.log(numFruit)
//     })
//     console.log("End")
// }
// forEach()
// const forLoop=async()=>{
//     console.log("start")
//     for(let i=0;i<fruitsToGet.length;i++){
//         const fruits=fruitsToGet[i]
//         console.log(fruits)
//         const numFruit=await getFruitName(fruits) 
//         console.log(numFruit)
//     }
//     console.log("End")
// }
// forLoop()
// const fruitBasket = {
//     apple: 27,
//     grape: 0,
//     mango: 14,
//     jack: 15,
//   }
//   const sleep = ms => {
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }
//   // const getNumFruit = fruit => {
//   //     return fruitBasket[fruit]
//   // }
  
//   const getNumFruit = fruitName => {
//     console.log('fruitName', fruitName)
//     return sleep(2000).then(v => fruitBasket[fruitName])
//   }
//   const fruitsToGet = ['apple', 'grape', 'mango']
  
//   const filterLoopWithAsync2 = async _ => {
//     console.log('Start')
  
//     const promises = fruitsToGet.map(fruit => getNumFruit(fruit))
//     console.log("promises",promises)
//     const numFruits = await Promise.all(promises)
  
//     const moreThan20 = fruitsToGet.filter((fruit, index) => {
//       const numFruit = numFruits[index]
//       console.log('numFruit', numFruit)
//       return numFruit > 15
//     })
  
    // console.log("moreThan20",moreThan20)
    // console.log('End')
//   }
// const filterLoopWithAsync2=async()=>{
//     console.log("Start")
//     const promises=fruitsToGet.map(fruits=>getNumFruit(fruits))
//     console.log(promises)
//     const numFruits=await Promise.all(promises)
//     console.log(numFruits)

//     const morethan20=fruitsToGet.filter((fruits,index)=>{
//         const numFruit=numFruits[index]
//         console.log(numFruit)
//         return numFruit>20
//     })
//     console.log("morethan20",morethan20)
// }
//   filterLoopWithAsync2()
const phoneAvailable={apple:21,samsung:4,oppo:8}
const sleep=ms=>{
  return new Promise(resolve=>setTimeout(resolve,ms))
}
const phoneToGet=phones=>{
  console.log("phones",phones)
  return sleep(2000).then(resolve=>phoneAvailable[phones])
}
const phoneModels=["apple","oppo","samsung"]
const mapLoop=async ()=>{
  const promises=phoneModels.map(phones=>phoneToGet(phones))
  console.log("promises",promises)
  const numberPhones=await Promise.all(promises)
  console.log("number",numberPhones)

  const moreThan20=phoneModels.filter((phone,index)=>{

    const numberPhone=numberPhones[index]
    return numberPhone>20
  })
  console.log("morethan20",moreThan20)
}
mapLoop()
// const forEach=async()=>{
//   console.log("start")
//   phoneModels.forEach(async phones=>{
//     console.log("phones",phones)
//     const numberPhones=await phoneToGet(phones)
//     console.log(numberPhones)
//   })
//   console.log("end")
// }
// forEach()
// const forLoop=async()=>{
//   console.log("start")
//     for(let i=0;i<phoneModels.length;i++){
//       const mobile=phoneModels[i]
//       console.log(mobile)
//       const result=await phoneToGet(mobile)
//       console.log("number",result)
//     }
//     console.log("end")
// }
// forLoop()