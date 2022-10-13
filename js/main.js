(function () {
const switcher = document.querySelector('.content-switcher__slider');
const projectsBtn = document.querySelector('.content-switcher__projects');
const experienceBtn = document.querySelector('.content-switcher__experience')
const portfolioExperience = document.querySelector('.portfolio__experience');
const portfolioProjects = document.querySelector('.portfolio__projects');

projectsBtn.addEventListener('click', () => {
    switcher.classList.remove('experience-on');
    portfolioExperience.classList.remove('portfolio__experience_open');
    portfolioProjects.classList.add('portfolio__projects_open');

})
experienceBtn.addEventListener('click', () => {
    switcher.classList.add('experience-on');
    portfolioExperience.classList.add('portfolio__experience_open')
    portfolioProjects.classList.remove('portfolio__projects_open')
})
}())

(function () {
const themeBtn = document.querySelector('.theme-button');
const themeBtnIco = document.querySelector('.theme-button__ico');
const body = document.querySelector('body');
const contactBtn = document.querySelector('.button__contact');
const cvBtn = document.querySelector('.button__cv');
const profileName = document.querySelector('.profile__name');
const switcher = document.querySelector('.content-switcher__wrap-main');
const slider = document.querySelector('.content-switcher__slider');
const switchePortfolio = document.querySelector('.content-switcher__projects');
const switcherExperience = document.querySelector('.content-switcher__experience');
const portfolioProjectPic = document.querySelectorAll('.portfolio__project-pic')
themeBtn.addEventListener('click', () => {
    if (themeBtn.classList[2] === 'theme-button_dark') {
        themeBtn.classList.remove('theme-button_dark');
        themeBtnIco.classList.remove('theme-button__ico_dark');
        body.classList.remove('body_dark-theme');
        contactBtn.classList.remove('button__contact_dark-theme');
        cvBtn.classList.remove('button__cv_dark-theme');
        profileName.classList.remove('profile__name_dark-theme');
        switcher.classList.remove('content-switcher__wrap-main_dark-theme');
        slider.classList.remove('content-switcher__slider_dark-theme');
        switchePortfolio.classList.remove('content-switcher__projects_dark-theme');
        switcherExperience.classList.remove('content-switcher__experience_dark-theme');
        for (let i = 0; i < portfolioProjectPic.length; i++) {
            portfolioProjectPic[i].classList.add('portfolio__project-pic_light-border')
        }
    } else {
        themeBtn.classList.add('theme-button_dark');
        themeBtnIco.classList.add('theme-button__ico_dark');
        body.classList.add('body_dark-theme')
        contactBtn.classList.add('button__contact_dark-theme')
        cvBtn.classList.add('button__cv_dark-theme')
        profileName.classList.add('profile__name_dark-theme')
        switcher.classList.add('content-switcher__wrap-main_dark-theme')
        slider.classList.add('content-switcher__slider_dark-theme')
        switchePortfolio.classList.add('content-switcher__projects_dark-theme')
        switcherExperience.classList.add('content-switcher__experience_dark-theme');
        for (let i = 0; i < portfolioProjectPic.length; i++) {
            portfolioProjectPic[i].classList.remove('portfolio__project-pic_light-border')
        }
    } 
})
}())