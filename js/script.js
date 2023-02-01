//theme change function
var r = document.querySelector(':root');
var icon = document.querySelector("#theme");
let theme = false;


function changeTheme() {
    theme = !theme;

    if (theme) {
        icon.classList.replace("fa-moon", "fa-sun");
        r.style.setProperty('--bg', '#131617');
        r.style.setProperty('--font', '#fff');
        r.style.setProperty('--heading', '#000');
        r.style.setProperty('--main', '#fff');
        r.style.setProperty('--border-light', '#333');
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        r.style.setProperty('--font', '#000');
        r.style.setProperty('--bg', '#fff');
        r.style.setProperty('--heading', '#fff');
        r.style.setProperty('--main', '#273c66');
        r.style.setProperty('--border-light', '#ddd');
    }
}


// https://demo.w3layouts.com/demos_new/template_demo/03-02-2021/alexander-liberty-demo_Free/503901858/web/index.html?_gl=1*1nepa56*_ga*MTA5NzU3ODI3OC4xNjc1MjI5MTI4*_ga_EGV5GTJEP5*MTY3NTIyOTEyOC4xLjEuMTY3NTIyOTE0OC4wLjAuMA..*_ga_9HSZ46TKMQ*MTY3NTIyOTEyOS4xLjEuMTY3NTIyOTE0OS4wLjAuMA..&_ga=2.149040756.394950959.1675229130-1097578278.1675229128
