const function1= async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(reject,4000,"Success1")
    })
    return "Function1"
}

const function2= async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(reject,3000,"Success2")
    })
    return "Function2"
}

const bothFunction=async()=>{
    try{
        // const result=await function1()
        // console.log(result)

        // const result2=await function2()
        // console.log(result2)

        const result=await Promise.all([function1(),function2()]) 
        console.log(result)
        
    }
    catch(error){
        console.log(error,"Something went wrong");
    }
}

bothFunction()