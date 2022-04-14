const requestJSON = 'https://raw.githubusercontent.com/mainDevOps/DevOps-project3-BlogLoL/master/json/gallery.json'
const request = new XMLHttpRequest()

request.open('GET', requestJSON);
request.responseType = 'json';
request.send();

const containerBox = document.querySelector('.container-box-pictures')

request.onload = function() {
    const champion = request.response;
    
    for(let i = 0; i<159; i++){
        containerBox.innerHTML += (
            `
            <div class="container-champion">
                <img src=${champion[i].image}>
                <div class="description-champ">
                    <p>${champion[i].name}</p>
                    <p>PI:${champion[i].costPi}  -  RP:${champion[i].costRp}</p>
                </div>
            </div>
            `
        )
        console.log(champion[i].name)
    } 
}