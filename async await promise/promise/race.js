const promise4=()=>{
    return new Promise((resolve,reject)=>setTimeout(reject,2000,"Success2"))
}

const promise5=()=>{
    return new Promise((resolve,reject)=>setTimeout(resolve,2000,"Success"))
}

const main=async()=>{
    try{

        const a=promise4()
        const b=promise5()
        const res=await Promise.race([a,b])
        console.log(res)
    }
    catch(error){
        console.log("Error",error)
    }
}
main()