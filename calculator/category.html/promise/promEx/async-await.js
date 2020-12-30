let myPitem = document.getElementById("myPromise");
var myFuncCalls = 0;

function myPromise() {
  return new Promise((resolve, reject) => {
    let inputnum = document.getElementById("myNum").value;
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
    if (randomNumber == inputnum) {
      resolve(inputnum + "nice work, do it again");
    }
    reject("you lost try again");
  });
 
}


async function myFun() {
    try {
      myPromiseDiv.innerHTML+= await myPromise()
    }
     catch (error){  
      divPItem.innerHTML+= error
    }
    finally{
      function_call.innerHTML=myFuncCalls++
       
    }
  }
  myFun()