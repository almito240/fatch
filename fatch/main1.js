//https://api.jikan.moe/v3/search/anime?q=abc {anime to search}
let api = "https://api.jikan.moe/v3/search/anime"
let result;


function turnAnimaInfoToJson(input) {
    return fetch(`${api}?q=${input}`).then(res => res.json())
}



async function getInfo(Input) {
    try {
        loader.innerHTML += '<img src="/Imges/dots.loader.gif">'
        await turnAnimaInfoToJson(Input).then(res => animaRes = res)
    }
    catch (eror) {
        console.log(eror);
    }
    finally {
        loader.innerHTML = ''

    }
}


function clickToShow() {
    getInfo(animaInput.value).then(() => {
        for (const iteratr of animaRes.results) {
            main.innerHTML += `<div id='imgDiv'><img src="${iteratr.image_url}" alt=""><br/>title:${iteratr.title}<br/>score:${iteratr.score}<br/>synopsis:${iteratr.synopsis}</div>`
        }
    })
}

            
