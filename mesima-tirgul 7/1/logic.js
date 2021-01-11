// 3.	צרו כפתור נוסף, בעת לחיצה עליו, ימחק האלמנט האחרון ברשימה.
// 4.	הוסיפו ID לכל רשומה שנוספת לרשימה.
// 5.	הוסיפו ארוע לחיצה לאלמנטים ברשימה, כאשר בלחיצה הם נצבעים באדום.
// 6.	החליפו את הארוע ברחיפה מעל האלמנט.




function addInfo(){
   
ol.innerHTML+=`<li id="${input.value}">${input.value}</li>`
}

function removelastelem(){
    ol.lastChild.style.display+="none"
}
function turnColorToRed(){
ol.style.color="red"
}
function onHoverTurnColor(){

}