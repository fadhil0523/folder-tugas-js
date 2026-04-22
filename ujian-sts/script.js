let buttonDarkMode = document.getElementById('buttonDarkmode');

buttonDarkMode.addEventListener('click', () =>{
    document.body.classList.toggle('darkmode-button')
    document.getElementById('whiteText').classList.toggle('changeColor')
})