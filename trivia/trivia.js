let categoryName = new Map();
categoryName.set("Countries", ["SouthKorea", "China", "Japan", "Seol", "Thailand"])
categoryName.set("names", ["cup", "fireman", "docktor", "techer", "baker"])
categoryName.set("Food", ["pizza", "sushi", "pasta", "burger", "falafel"])
categoryName.set("Animels", ["dog", "cat", "fish", "cow", "ship"])
categoryName.set("colors", ["red", "blue", "pink", "purple", "black"])
 
let qustions= new Map ();
 qustions.set("Countries","q1");
 qustions.set("names","q2");
 qustions.set("Food","q3");
 qustions.set("Animels","q4");
 qustions.set("colors","qcolor of ");

 



for (const key of categoryName.keys()) {
   main.innerHTML += `<div id="categuryCard${key}"  onmouseover=showOptions('${key}') onmouseout=hideOptions('${key}') class="card">
   <h2 id="${key}key" onclick="showQustion('${key}')">${key}</h2>
<div id="answerdiv${key}"  style="display:none"></div>
</div>`

   let arrayAns = document.getElementById(`answerdiv${key}`)
   for (const iterator of categoryName.get(key)) {
      arrayAns.innerHTML += `<h3 id="${qustions.get(key)}" onclick="corectAnwer()">${iterator}</h3>`
   }
arrayAns.innerHTML+=`<h2 id="${key}question" style="display:none">${qustions.get(key)}</h2>`
}

function showOptions(key) {
   document.getElementById(`answerdiv${key} class="answer"` ).style.display = 'block'
 
}

function hideOptions(key) {
   document.getElementById(`answerdiv${key}`).style.display = 'none'
}
function showQustion(param){
   for (const key of categoryName.keys()){
      document.getElementById(`${key}question`).style.display = 'none'
   }
document.getElementById(`${param}question`).style.display = 'block'

}
function corectAnwer(){
  
  answer="china"
  switch(answer){
      case "china":
         arrayAns.innerHTML+=`<div>great gob</div>` 
         // arrayAns.innerHTML= `very good`;
// //      console.log(goodAmswer);
// //       default:
// //          `categury${key}`.innerHTML="wrong "

  }
 }
//  let isClicked=false;
//  function showOption(categuryKey){
//     isClicked= !isClicked;
//    for( const item of categoryName.get(categuryKey)){
//       let categorieItem=document.getElementById(`categuryCard${categorieItem}`)
//       if(isClicked){
//          categorieItem.firstChild.style.display="none"
//          categorieItem.innerHTML+=`<h1 id="option${item}">${item}</h1>`
//       }
//       else{
//          categorieItem.childNodes.forEach(elem=>{elem.style.display="none"})
//          categorieItem.firstChild.style.display="block";
//       }

//  }
//   }
//  let isClicked = false;
//  function showOption(categuryKey){
//     isClicked= !isClicked;
//    for( const item of categoryName.get(categuryKey)){
//       let categorieItem=document.getElementById(`categuryCard${categorieItem}`)
//       if(isClicked){
//          categorieItem.firstChild.style.display="none"
//          categorieItem.innerHTML+=`<h1 id="option${item}">${item}</h1>`
//       }
//       else{
//          categorieItem.childNodes.forEach(elem=>{elem.style.display="none"})
//          categorieItem.firstChild.style.display="block";
//       }

//  }
//  }
  //for(const item of categoryName.keys()){


//   }
//    function createOptions(categurykey){
//       let categuryitem = document.getElementById(`option${categurykey}`)
//       for (const itemInArray of categoryName.get(categurykey)){
//          categuryitem.innerHTML+=`<h1 id="option${itemInArray}">${itemInArray}</h1>`

//       }
//       categuryitem.style.display="none"
//    }
//      let isHover=false;
//      function showOptions(paramKey){
//         isHover = !isHover;
//         let categuryitem=document.getElementById(`options${paramKey}`)
//         categuryitem.style.display=isHover ?"block": "none";
//      }
