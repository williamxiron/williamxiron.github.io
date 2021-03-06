gsap.registerPlugin(ScrollTrigger)

function init(){

    gsap.from('.aboutdiv', {opacity: 0, y: 100, duration: 1, scrollTrigger: {
        trigger:'.aboutdiv', markers: false
    }})

    gsap.from('.projects h1', {opacity: 0, y: 100, duration: 1, scrollTrigger: {
        trigger:'.projects h1', markers: false
    }})

    gsap.from('.projects .container', {opacity: 0, y: 100, duration: 1, scrollTrigger: {
        trigger:'.projects .container', markers: false
    }})
}



window.addEventListener('load', function(){
    init()
})
