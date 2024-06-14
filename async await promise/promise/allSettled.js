const promise4=()=>{
    return new Promise((resolve,reject)=>setTimeout(resolve,1000,"Success"))
}

const promise5=()=>{
    return new Promise((resolve,reject)=>setTimeout(reject,1000,"Fail"))
}

const main=async()=>{
    try{

        const a=promise4()
        const b=promise5()
        const res=await Promise.allSettled([a,b])
        console.log(res)
    }
    catch{
        console.log("Error")
    }
}
main()