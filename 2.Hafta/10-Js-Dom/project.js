//  const button = document.querySelector('button') =>ilk yontem
// const button = document.querySelector('#buttonId') =>2.yontem
// const button = document.querySelector('.buttonClass') =>3.yontem
const button = document.getElementById('buttonId'); /* => 4.yontem */
//const button = document.getElementsByClassName('buttonClass')[0];

//ilk yontem
/* button.addEventListener('click',()=>{
    console.log('tiklandi')
}) */
//ikinci yontem
function add() {
    console.log('tik');
}

console.log(button)

const liElements = document.querySelectorAll('li')
console.log(liElements)
for (var i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', (e) => {
        /* console.log(e);
        console.log(e.target) */
        e.target.style.color = 'blue';
    })
}

const ulDegerleri = document.querySelector('ul')
console.log(ulDegerleri)

const liDegerleri = document.querySelectorAll('li')
liDegerleri.forEach(elements => { elements.addEventListener('click', e => e.target.remove()) })

const liElemani = document.createElement('li');
liElemani.textContent = 'Javascript';
//append sona eleman ekler
//prepend basa eleman ekler

button.addEventListener('click',()=>{
    ulDegerleri.append(liElemani)
})
/* button.addEventListener('click',()=>{
    ulDegerleri.prepend(liElemani)
}) */