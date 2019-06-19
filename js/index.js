// Your code goes here
// mouseover 
let logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', function(){
    logo.style.color = 'red'
})

//keydown
let mapImg = document.querySelector('.img-content img')
document.addEventListener('keydown', function () {
    mapImg.style.border = '1px solid red'
})

//wheel
document.addEventListener('wheel', function(){
    mapImg.style.border = '5px solid blue'
})

//drag / drop


//onLoad 
let container = document.querySelector('.container')
window.addEventListener('load', (event) => {
    container.style.border = '1px solid brown'

});

//focus 
let contact = document.querySelector('input[type="password"]')
contact.addEventListener('focus', (event) => {
    event.target.style.background = 'yellow'
})

//resize
window.addEventListener('resize', (event)=>{
    console.log(event)
});

//scroll 
window.addEventListener('scroll', (event) =>{
    let othImg = document.querySelector('.img-fluid')
    othImg.style.border = '10px solid crimson'
})