const toggleSwitch = document.querySelector ('input[type="checkbox"]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// function toggleDarkLight(isdark){
//     nav.style.backgroundColor = isdark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)' ;
// textBox.style.backgroundColor = isdark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
// toggleIcon.children[0].textContent =isdark ? 'Dark Mode' : 'light Mode';
// isdark ? toggleIcon.children[1].classList.replce('fa-sun', 'fa-moon');
// isdark ?  imageMode('Dark') : ;
// }

function darkMode(){
nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
toggleIcon.children[0].textContent = 'Dark Mode';
toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
imageMode('Dark');
}
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0  / 50%)';
    toggleIcon.children[0].textContent = 'light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
imageMode('Light');
    }
function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','Dark');
        darkMode();
    }else{
         document.documentElement.setAttribute('data-theme', 'light');
         localStorage.setItem('theme','Light');
         lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme)

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark'){
        toggleSwitch.checked= true;
        darkMode();
    }
}