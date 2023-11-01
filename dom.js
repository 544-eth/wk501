const heading = document.getElementById('title')

heading.textContent = 'Fundamentals of JS'

const list1 = document.querySelector('ul :nth-child(1)')
const list2 = document.querySelector('ul :nth-child(2)')
const list5 = document.querySelector('ul :nth-child(5)')
const list = document.querySelectorAll('li')
const title2 = document.querySelector('#title')
title2.style.background = 'linear-gradient(180deg, #eee, green, #ddd)'
title2.style.textTransform = 'uppercase'
title2.style.color = 'purple'

document.querySelector('p').style.color = 'purple'

list5.textContent = 'Maltina'
list2.textContent = 'Rice'
list1.textContent = 'Beans'
list[3].textContent = 'Guiness'
 

const para = document.querySelectorAll('p')

para[0].innerText = `<strong>mohammed Ali</strong> once said <q>Suffer now and enjoy later </q>`
para[1] .innerHTML = `<strong>mohammed Ali</strong> once said <q>Suffer now and enjoy later </q>`
para[2].textContent = `<strong>mohammed Ali</strong> once said <q>Suffer now and enjoy later </q>`


document.getElementsByClassName('para')[0].style.fontSize = '2rem'
document.getElementsByClassName('para')[2].style.border = '2rem double purple'
document.querySelector('.para').style.border = '30px solid purple'
document.getElementsByTagName('p')[0].innerHTML = 'alcohol'