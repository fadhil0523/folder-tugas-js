let buttonDarkMode = document.getElementById('buttonDarkMode');

buttonDarkMode.addEventListener('click', () =>{
    document.body.classList.toggle('darkmode-button')
    document.getElementById('whiteText').classList.toggle('changeColor')
})