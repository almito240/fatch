let count=0;
async function lottopromise(numberFromInput) {
    count++
    return new Promise((resolve, reject) => {
        let randomNum = Math.floor(Math.random() * 11);
        if (randomNum==numberFromInput) {
            resolve(`${randomNum} very good`)
        }
        reject(`you lost,try again`)  
    })

}

   function shuffleRandom() {
    lottopromise(inputId.value)
        .then(res => printToDiv(res))
        .catch(rej => printToDiv(rej))
        .finally(() => console.log(++count))
}

function printToDiv(param) {
    main.innerHTML += param
    
}



// async function randNum() {
//       try{
//           let resolve1= await lottopromise();
//           printToDiv(resolve1)
//       }
//       catch(eror){
//           printToDiv(eror)
//       }
//     finally{
//         counterDiv.innerHTML = `<h3>numbers of trys: ${counter++}</h3>`
//     }

  
    // function ranNum(numberOfInput) {
    //     return new Promise((resolve, reject) => {
    //         let head = Math.floor((Math.random() * 10) + 1);
    //         console.log(head)
    //         if (numberOfInput == head) {
    //             resolve(`nice work do it again` + ` ${head} 😀`)
    //         }
    
    //         reject('you lost try agin 😭')
    
    //     })
    // }
 
    // async function ranNumbtn() {
    //     try {
    //         let lotto = await ranNum(mainInput.value);
    //         printToDiv(lotto)
    //     }
    //     catch (error) {
    //         printToDiv(error)
    //     }
    //     finally {
    //         counterDiv.innerHTML = `<h3>numbers of trys: ${counter++}</h3>`
    //     }
    // }
    
    // function printToDiv(prams) {
    //     mainDiv.innerHTML = prams
    // }
    