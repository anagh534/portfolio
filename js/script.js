//theme change function
var r = document.querySelector(':root');
let theme = false;


function changeTheme() {
    theme = !theme;
    if (theme) {
        r.style.setProperty('--bg', '#131617');
        r.style.setProperty('--font', '#fff');
        r.style.setProperty('--heading', '#000');
        r.style.setProperty('--main', '#fff');
    } else {
        r.style.setProperty('--font', '#000');
        r.style.setProperty('--bg', '#fff');
        r.style.setProperty('--heading', '#fff');
        r.style.setProperty('--main', '#273c66');
    }
}

