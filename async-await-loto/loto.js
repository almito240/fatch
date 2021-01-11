// let counter=1
// function creatRandNum(inputNumber){
//     return new Promise((resolve,reject)=>{
//         let randNum=Math.floor(Math.random()*11);
// if(inputNumber== randNum){
//     resolve(`nice work `+ `${randNum}`)
// }
// reject(`you lost try again`)
//     })
// }

// async function ranBtn(){
//     try{
//         await creatRandNum(input.value).then((res)=>{printToDiv(res)});
        
//     }
//     catch(eror){
//         printToDiv(eror)
//     }
//     finally{
//         conunterDiv.innerHTML=`<h3>numbers of trys:${++counter}</h3>`
//     }
// }

// function printToDiv(params){
// main.innerHTML=params
// }

let prom= new Promise((resolve,reject)=>{
    let bool=true;
    if(bool){
        resolve("yes")
    }else{
        reject("sorry")
    }

})
 prom.then(res =>console.log(res)).catch(rej=>console.log(rej))
