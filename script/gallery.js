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