//https://api.jikan.moe/v3/search/ anime ?q={anime to search}
let api="//https://api.jikan.moe/v3/search/ "
let animeApi=`${api}anime`



function getAnimeApi(){
  return fetch(`${animeApi}?q=dbz`).then(res =>res.jason()) 
}



async function searchAnima(){
    try{
         getAnimeApi().then(res =>console.log(res.result))
    }
    catch(eror){
        console.log(eror);
    }
finally{

}
}
// https://api.spotify.com/v1/artists
// searchAnima()
// //https://covid-api.mmediagroup.fr/v1/cases?country= {country}
// let api ="https://covid-api.mmediagroup.fr/v1/cases?country"

// let result;


// function turnCovidInfo(country){
//     return fetch(`${api}=${country}`).then(res => res.json())
// }
// הכור לא עובד לא מאושר

// async function getInfo(countryInput){
//     try{
//         loader.innerHTML+=`<img src="/Imges/17896-wash-your-hands.gif">`
//         await turnCovidInfo(countryInput).then(res=> result=res)
//     }
//     catch(eror){
// console.log(eror);
//     }
//     finally{
//         loader.innerHTML+=``
//         // `<img src="/Imges/17896-wash-your-hands.gif">`
//     }
// }
// getInfo("france")