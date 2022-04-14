async function getChampions(){
    const response = await fetch('http://127.0.0.1:5500/devops/DevOps-project3-BlogLoL/json/gallery.json')
}

const containerBox = document.querySelector('.container-box-pictures')

window.addEventListener('load', () => {
    for(let i = 0; i<159; i++){
        containerBox.innerHTML += (
            `
            <div class="container-champion"></div><br>
            `
        )
    }
})