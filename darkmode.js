let darkmode = localStorage.getItem('darkmode');
let lightmode = localStorage.getItem('lightmode');


const themeSwitch = document.getElementById('theme-switch');

// const enableDarkmode = () => {
//     document.body.classList.add('darkmode');
//     localStorage.setItem('darkmode','active');
// }

// const disableDarkmode = () => {
//     document.body.classList.remove('darkmode');
//     localStorage.setItem('darkmode',null);
// }

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode','active');
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode',null);
}

if(darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener("click",()=>{
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})