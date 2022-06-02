//FADE IN

const appearOptions = {
    threshhold: 1,
    rootMargin: '0px 0px -200px 0px',
}
const faders = document.querySelectorAll('.fade-in')
const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
        })
    },
    appearOptions)

faders.forEach((fader) => {
    appearOnScroll.observe(fader)
})

//HERO SECTION

const sectionOneOptions = {
    rootMargin: '-150px 0px 0px 0px',
}
const menuBar = document.querySelector('.hero__nav')
const sectionOne = document.querySelector('.hero-container')

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                menuBar.classList.add('nav-scrolled')
            } else {
                menuBar.classList.remove('nav-scrolled')
            }
        })
    },
    sectionOneOptions)

sectionOneObserver.observe(sectionOne)