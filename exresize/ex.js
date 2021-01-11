// function findNumber(array,number){
//     let result;
//     for(i=0,i<array.lenght,i++){
//         if(number==array[i]){
//             console.log(`the number ${i}is in the arry`);
        
//     }else{
//   ("number not found")  
// }
// }
// }





   
// let answer= findNumber([1,4,7,9,0],5)

// כתבו פונקציה שמקבלת מספר כארגומנט. 
// הפונקציה יוצרת מערך של מספרים רנדומליים בין 0 ל10 ,
// הפונקציה בודקת אם המספר מופיע במערך, 
// אם כן מודפסת הודעה שהמספר נמצא והמספר עצמו, 
// אחרת מוחזר "sorry, maybe next time" .

 
// function findRandNumberInArray(num){
    
// let array=[];
// let randNum =Math.floor(Math.random()*11)
// randNum=array.push()
// if(randNum==array[0]){
//     console.log("the number is in the array");
//     return;
// }else{
//     return "sorry,maybe next time"
// }

// }
   
// צרו אובייקט של person עם שם וגיל.
//  כתבו פונקציה שמקבלת אובייקט ומספר כארגומנטים.
//  הפונקציה בודקת האם הגיל מעל ל 18,
//  אם כן מודפסת הודעה עם השם והגיל ושהוא מעל 18,
//  אחרת מוחזר "you are too young" .

//      person={
//     nameOne:"almito",
//     age:3
// } 
//     function overEighteen(person){
//    if(person.age > 18){
//        console.log(`${person.nameOne} ${person.age} is over eighteen`);
//    }
//    else{
//        return "you are too young"
//    }
//     }
 
    // Exercise: Sorting numbers from user input

    // 1. Prompt the user to enter an array of numbers in the format of "10,1, 2, 50, 9"
    //     You can use either input field or a prompt command
    // 2. Parse the string into an array of numbers, i.e. [10, 1, 2, 50, 9]
    // 3. Create a sorted array, i.e. [1, 2, 9, 10, 50]
    // 4. Print the sorted array





// function sortArray(array){
//       userArray=[]
//     let userInput=prompt("enter the numbers ");
//     userInput="8,67,98,96"
//     let num=userInput.split(",")
//     console.log(num);

//     array.sort((a,b)=> a-b)

//     console.log(array);
// }
  
// sortArray(arry)

    //var strArray = prompt();
    // var strArray = "5,34,23,8,1,55,20";
    // var numArray = strArray.split(",") ;//["5",...]
    
    // for(let i = 0 ; i < numArray.length ; i++){
    //     numArray[i] = parseFloat(numArray[i]);
    // }
   
    // numArray.sort(function(a, b){return a-b});
    // console.log(numArray);
// q 4
//  function PrintDoDiv(num){
//      for(let i=0;i<5;i++){
//          console.log(num);
//      }
//  }
// PrintDoDiv(8)
// q5
 
// let num1=2
// let num2=3
// let num3=4
// let num4=5
// let avg=(2+3+4+5)/4
// let sum=2+3+4+5

// console.log(`${sum} ${avg}`);
// q6
// let a = 1;
// let b = 2;

// a = a + b;
// b = a - b;
// a = a - b;

// a; // => 2
// b; // => 1



// function myfund(){
//     var person={fname:"yamsa",lname:"almito",age:34}
//     var text=""
//     var x;

//     for(x in person){
//         text+= person[x] + " "

//     }

//     document.getElementById("demo").innerHTML=text
// }
// From Ziv to Everyone:  10:23 AM
// let input = prompt("Please enter your numbers");

// let splittetInput = input.split(",");
// let unsortedArray = [];
// for (let i = 0; i < splittetInput.length; i++)
// {
//     let curNumber = Number.parseFloat(splittetInput[i]);
//     unsortedArray.push(curNumber);
// }

// for (let i = 0; i < unsortedArray.length; i++)
// {
//     console.log("Unsorted array item " + unsortedArray[i]);
// }

// temp = 2,5,3 copy original array to temporarry array for preserving original array
// sorted =2   temp = 5,3
// sorted =2,3   temp = 5
// sorted =2,3,5   temp = 



// let input = prompt("Please enter your numbers");

// let splittetInput = input.split(",");
// let unsortedArray = [];
// for (let i = 0; i < splittetInput.length; i++)
// {
//     let curNumber = Number.parseFloat(splittetInput[i]);
//     unsortedArray.push(curNumber);
// }

// for (let i = 0; i < unsortedArray.length; i++)
// {
//     console.log("Unsorted array item " + unsortedArray[i]);
// }

// temp = 2,5,3 copy original array to temporarry array for preserving original array
// sorted =2   temp = 5,3
// sorted =2,3   temp = 5
// sorted =2,3,5   temp = 



// let sortedArray = [];
// let tempArray = [...unsortedArray];
// for (let i = 0; i < unsortedArray.length; i++)
// {
//     let min = Math.min(...tempArray);
//     let indexOfMin = tempArray.indexOf(min);
//     console.log("Min = " + min + ", index of " + indexOfMin);

//     sortedArray.push(min);

//     tempArray.splice(indexOfMin, 1);
// }

// for (let i = 0; i < sortedArray.length; i++)
// {
//     console.log("Sorted array item " + sortedArray[i]);
// }

// function Song(){
//     this.songName = "Let it be";
//     this.print = function() {console.log("The song name is " + this.songName);}
// }
// let song1 = new Song();
// song1.print();
// let selectedSong = song1;
// selectedSong.print();
// function executeFunctionHelper(theFuncionToExecute) {
//     theFuncionToExecute();
// }
// executeFunctionHelper(selectedSong.print);
// let newPrint = selectedSong.print.bind(selectedSong);
// executeFunctionHelper();
// // let song2 = new Song();
// // console.log(song1.songName == song2.songName)
// // console.log(song1.print == song2.print)
// function getPI() {
//     console.log(3.14);
// 	return 3.14;
// }
// executeFunctionHelper(getPI());
// function myTimer(){
//     setTimeout(() => {
//         return 5;
//     }, 1000)
// }
// let ret = myTimer()
// console.log(ret);
// function myFunc(){
//     console.log(3)
//     setTimeout(() => {
//         console.log(5)
//     }, 1000)
//     console.log(4)
// }
// console.log(1)
// myFunc()
// console.log(2)