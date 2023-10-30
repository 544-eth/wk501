const heading = document.getElementById('title')

heading.textContent = 'Fundamentals of JS'

const list1 = document.querySelector('ul :nth-child(1)')
const list2 = document.querySelector('ul :nth-child(2)')
const list5 = document.querySelector('ul :nth-child(5)')
const list = document.querySelectorAll('li')


list5.textContent = 'Maltina'
list2.textContent = 'Rice'
list1.textContent = 'Beans'
list[3].textContent = 'Guiness'
 

const para = document.querySelector('p')

para.innerHTML = `<strong>mohammed Ali</strong> once said <q>Suffer now and enjoy later </q>`