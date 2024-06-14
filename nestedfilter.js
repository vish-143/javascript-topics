const fruitData = [
    {
        name: "Apples",
        details: [
            {
                fruitId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                fruitId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        name: "Oranges",
        details: [
            {
                fruitId: '3',
                gradingDetails: [{ grade: 'B' }]
            },
            {
                fruitId: '4',
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
];
// let output = fruitData.filter(eachVal => {
//     let opt = eachVal.details.some((
//         { gradingDetails }) => gradingDetails
//         .some(({ grade }) => grade === 'A'));
//     return opt;
// })
// let output=fruitData.filter((ele)=>{
//     let out=ele.details.filter(({fruitId})=>fruitId==='1')[1]
//     return out
// })

console.log(JSON.stringify(output));