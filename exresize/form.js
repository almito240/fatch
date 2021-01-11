// function validation(){
//     if(inputid.value==inputid2.value){
//         return true
//     }
// alert("not the same")
// return false
// }



let size =500;

      
           let startinterval = setInterval(()=>{
            size --;
            box.style.width = `${size}--px`
            box.style.height =`${size}--px`
        },100)

        function stopresizeBox(){
            if(size <= 50){
                clearInterval(startinterval);
            }
        }  
        
       