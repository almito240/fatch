// document.body.innerHTML = '<input id="first"></input><input id="second"></input><input id="third"></input><button onclick="biggestNum()">click</button>'

// let num1 = document.getElementById("first")
// let num2 = document.getElementById("second")
// let num3 = document.getElementById("third")
// let biggestNumber;

// function biggestNum() {
//     if (num1 || num2 || num3 === Number) {
//         biggestNumber = Math.max(num1.value, num2.value, num3.value)
//         document.body.innerHTML = biggestNumber
//     }
//     else { 'NOT vailed input' };
// }
// צור דף 111
// HTML אשר קולט מהמשתמש מספר למשתנה num,
//  אם המספר גדול מ10 אז רשום למסך "greater then 10"


// function greater(){
//     let num=inputNumber.value;
//    if(num > 10){
// document.writeln("greater then 10");} 
// }



//222 צור דף HTML אשר קולט מהמשתמש מספר למשתנה num,
//  אם המספר גדול מ10 הוא רושם לconsole את
//   "greater then 10" , אם הוא קטן מ10 אז רושם
//    "less then 10". יש להשתמש if else



// function greaterThenLessthen(){
//     let num =inputNumber.value;
//     if(num> 10){
//      console.log("greater then 10");
//     }else {console.log("less then 10");

//     }
// }
//333 צור דף HTML אשר קולט מהמשתמש מספר למשתנה num,
// . אם המספר גדול מ10 אז רשום לconsole את "greater then 10" ,
//  אם הוא קטן מ10 אז רשום
//  "less then 10" ואם שווה ל10 אז רשום "equal to 10"

// function greaterThenLessthenEquelTo(){
//     let num =inputNumber.value;
//     if(num> 10){
//      console.log("greater then 10");
//     }else if (num<10) {
//         console.log("less then 10");
//     } else if(num==10){
//         console.log( "equal to 10");
//     }
// }

//4)
//צור דף HTML אשר קולט מהמשתמש שני מספרים ומכניסה אותם למשתנים first , second .
//  הדף מדפיס לconsole איזה ערך גדול מבין השניים ואיזה ערך קטן.
//  אם הערכים זהים אז רשום "values are equal"

// function whosBigger() {

//     let first = inputNumberOne.value;
//     let second = inputNumberTwo.value;
//     if (first > second) {
//         console.log("greater then ");
//     } else if (first < second) {
//         console.log("less then ");
//     } else if (first == second) {
//         console.log("values are equal");

//     }
// }
// console.log(whosBigger());

//5)

// צור דף HTML אשר מציג את השנה והחודש  נוכחי
// (לא מספר חודש אלא שם חודש לדוגמא "JAN" עבור ינואר) .
//  עליכם להשתמש ב Date וכן ב getMonth וכן בשימוש בתנאים. 

// dateMonth = new Date(2020, 11)
// dateMonth.getMonth()
// showdate.innerHTML = dateMonth.toDateString();


// 6)

// צור דף HTML אשר מציג את השנה והיום  הנוכחי
// (לא מספר יום אלא שם לדוגמא "SUN" עבור יום ראשון) .
//  עליכם להשתמש ב Date וכן ב getDay וכן בשימוש בתנאים. 

// let dateDay= new Data().getDay()
// let dateDay=(new Date().getDay());
// showdate.innerHTML=dateDay;


// 7) 

// switch case

// function getTheMonth() {
// let dateMonth=(new Date().getMonth());
//     switch (dateMonth) {
//      case 1:
//      console.log('jan');
//      break;
//      case 2:
//      console.log('feb');
//      break;
//      case 3:
//      console.log('mar');
//      break;
//      case 4:
//      console.log('apr');
//      break;
//      case 5:
//      console.log('may');
//      break;
//      case 6:
//      console.log('jun');
//      break;
//      case 7:
//      console.log('jul');
//      break;
//      default:
//      console.log('Not 1-7 number');
//      break;
//     }
// }
// getTheMonth()

//8)

// function getTheDay() {
//     let dateDay=(new Date().getDay());

//     switch (dateDay) {
//      case 1:
//      console.log('Sunday');
//      break;
//      case 2:
//      console.log('Monday');
//      break;
//      case 3:
//      console.log('Tuesday');
//      break;
//      case 4:
//      console.log('Wednesday');
//      break;
//      case 5:
//      console.log('Thursday');
//      break;
//      case 6:
//      console.log('Friday');
//      break;
//      case 7:
//      console.log('Saturday');
//      break;
//      default:
//      console.log('Not 1-7 number');
//      break;
//     }
// }
// getTheDay()

//9)

//  צור דף HTML אשר קולט מהמשתמש בעזרת prompt
//  את הגיל שלו ומודיע לו אם  הוא יכול להכנס למועדון 
//  ,אם הגיל גדול מ18 אז הדפס הודעת אישור
//   , אחרת הדפס הודעה על אי אישור. יש לטפל במקרה שהמשתמש  ביטל או הכניס גיל שאינו מספר
 
// document.body.innerHTML =`<div> <button onclick="overEightTeen()"></button></div> `
  
// function overEightTeen(){

//     let userInput = prompt("enter your age")
//     if(userInput > 18 && userInput / 1) {
//         document.writeln(`wellcom`) 
//     }else{
//         document.writeln(`GO AWAY`)
//     }
// }
// overEightTeen()

//13
// כתוב קוד אשר מקבל ציון משמתמש , אם הציון גדול או שווה 55 אז מדפיס
//  PASS אחרת מדפיס FAILURE. יש להשתמש בtrenry operator. אפשר להניח שהקלט תקין

// userAge.value= prompt("enter your grade:")
// if( userAge.value >= 55){
//     main.innerHTML= "PASS";
// }else{
//     main.innerHTML="failure";
// }
//15)
// כתוב תכנית שמדפיסה את המספרים 2,1,....100 כל אחד בשורה 

// i=0
// while(i<100){
//   console.log(i);
//     i++
// }


// 16)
// כתוב תכנית שקולטת 5 מספרים מהמשתמש, 
// מחשבת סכום וממוצע ומדפיסה למסך את הערכים שלהם. 
// בצע בעזרת לולאה
// ==============================================================================================================
// document.body.innerHTML = '<input id="first"></input><input id="second"></input><input id="third"></input><input id="four"></input><input id="five"></input><button onclick="sumAndAvg()">click</button>'
// let num1 = document.getElementById("first")
// let num2 = document.getElementById("second")
// let num3 = document.getElementById("third")
// let num4 = document.getElementById("four")
// let num5 = document.getElementById("five")

// let sum=0
// let i= 
// function sumAndAvg(){
//  while( i < 5 ){
//     let num= userAge.value;
//     sum+=num
//     i++
//  } 
//  let avg= sum/i
// console.log(sum);
//  console.log(avg);
// }
// ============================================================================= תשובה מהאינטרנט
// var i;
// function sum() {
//     var i, sum = 0;
//     for (i = 0; i < arguments.length; i++)
//         sum += arguments[i];
//     return sum;

// }
// var total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(total);

//17)
//כתוב תוכנית שמדפיסה את כל המספרים השלמים הזוגיים מ2-50. 
//    for(i=2 ; i < 50 ;i++){
//        if(i % 2== 0){
//            console.log(i);
//        }

//    }
// 18)
// כתוב תוכנית שמדפיסה את כל המספרים השלמים 
// מ1-50 בקפיצות של 3 ז"א 1,4,7,...

// for(let i= 1;i< 50 ;i++){
//     i+=2
//     console.log(i);
// }

// 19)
// כתוב תוכנית שמקבלת מהמשתמש מספר שלם ומחשבת עצרת.
//  לדוגמא עבור 4 נקבל : 1*2*3*4 ז"א 24

// =========================================================================================================

// let azeret = (num) => {
//     if (num === 1) { //  stop recursion
//       return 1;
//     } else { 
//       return (num * azeret(num - 1));
//     }
//   }
//   console.log(azeret(4));



// 20)
// כתוב תכנית אשר קולטת מהמשתמש חמישה מספרים ממשים
//   ומחשבת את המנימום והמקסימום מבינהם ומדפיסה אותו. אפשר להשתמש ב
//    Number.MAX_SAFE_INTEGER 
//  , 

let Temp= Number.MIN_SAFE_INTEGER;
inputFromUser= input.value;

while (i<3){
  if (inputFromUser === Number){
    Temp > inputFromUser
    Temp= inputFromUser
    i++
  }else{
    console.log("number not valid");
  }

}




//28)
// כתוב תכנית אשר קולטת מהמשתמש 
// n ספרים ממשים חיוביים
//  ומחשבת את המנימום והמקסימום מבינהם ומדפיסה אותו
// . קליטת המספרים מסתימת כאשר המשתמש 
// מכניס 0 או מספר שלילי ואז מדפיסים את המספר 
// המקסימלי והמינימלי שחושב.
//  במה כדאי להשתמש 
// : while , for  או do while


// document.body.innerHTML = '<input id="first"></input><input id="second"></input><input id="third"></input><button onclick="minMax()">click</button>'

// let num1 = document.getElementById("first")
// let num2 = document.getElementById("second")
// let num3 = document.getElementById("third")
// let biggestNumber;
// let smallstNumber;

// for(let i=1;i<5; i++){

// }
// while(num1||num2||num3 >=1){
// function minMax(){
//     biggestNumber=Math.max(num1.value,num2.value,num3.value);
//     smallstNumber=Math.min(num1.value,num2.value,num3.value)
//     document.body.innerHTML = biggestNumber
// document.body.innerHTML = smallstNumber
// }
// }


