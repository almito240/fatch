
function returnPromiseValue(boolParam) {
 return new Promise((resolve,reject) => {
  
   if(boolParam){
       resolve ("yes")

   } else{
       reject ("sorry")
   }

}) 
}
let bool =true;
 returnPromiseValue(bool)
 returnPromiseValue(bool).then(res => console.log(res))
  .catch(rej => console.log(rej))
  .finally(() => {})




  
