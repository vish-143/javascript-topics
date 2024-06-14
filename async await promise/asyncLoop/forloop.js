const forLoop=()=>{
    let arr=[2,4,6,8,10]
    let sqrt=[]
    for(let i=0;i<arr.length;i++){
       sqrt.push(arr[i]*arr[i])
    }
    console.log(sqrt)
}
forLoop()