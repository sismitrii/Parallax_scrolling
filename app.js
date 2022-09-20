const stars = document.querySelector('#stars')
const moon = document.querySelector('#moon')
const mountainsBehind = document.querySelector('#mountains_behind')
const title = document.querySelector('.anime h1')
const btn = document.querySelector('#btn')
const mountainsFront = document.querySelector('#mountains_front')
const header = document.querySelector('header')

window.addEventListener('scroll', function(){
    const value = window.scrollY;
    stars.style.left = `${value + 0.25}px`;
    moon.style.top = `${value/3}px`;
    mountainsBehind.style.top = `${value * 0.5}px`;
    mountainsFront.style.top = `${value * 0}px`;
    title.style.marginRight = `${value * 2}px`;
    header.style.top = `${value * 0.5}px`;
})