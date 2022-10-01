(function () {
const switcher = document.querySelector('.content-switcher__slider');
const portfolioBtn = document.querySelector('.content-switcher__portfolio');
const experienceBtn = document.querySelector('.content-switcher__experience')
portfolioBtn.addEventListener('click', () => {
    switcher.classList.remove('experience-on')
    // switcher.classList.add('portfolio-on')
})
experienceBtn.addEventListener('click', () => {
    // switcher.classList.remove('portfolio-on')
    switcher.classList.add('experience-on')
})
}())