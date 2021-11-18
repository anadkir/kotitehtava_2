//tehtava1

let x = 3
let y = 'dimu'
let z = [1, 2, 3]

if (x > 1){
    console.log('Muuttuja x on suurempi kuin 1')
}

if (y === 'dimu'){
    console.log('Muuttuja y on "dimu"')
}

if (z.includes(3)){
    console.log('Array z sisältää numero 3')
}

if (z.includes(x)){
    console.log('Array z sisältää muuttujan x arvoa')
}else{
    console.log('Array z ei sisällä muuttujan x arvoa')
}

if (z.length === x){
    console.log('Array z pituus on sama kuin muuttujan x arvo')
} else {
    console.log('Array z pituus on eri kuin muuttujan x arvo')
}

//tehtava2

let n1 = Math.floor(Math.random() * 11)
let n2 = Math.floor(Math.random() * 11)
let n3 = Math.floor(Math.random() * 11)

console.log(n1, n2, n3)

if (n1 > n2){
    console.log('Numero 1 suurempi kuin numero 2')
}

if (n3 > n1 > n2){
    console.log('Numero 1 on suurempi kuin numero2, mutta pienempi kuin numero 3')
}

if (n1 > n2 + n3){
    console.log('Numero 1 on suurempi kuin numeroiden 2 ja 3 summa')
}

if (n1 > 0 || n1 < 4){
    console.log('Numero 1 on suurempi kuin 0 tai pienempi kuin 4')
}

//tehtava3

let numerot = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numerot.forEach(
    (value) => {
        let divElement = document.createElement('div')
        divElement.innerHTML = value.toString()
        divElement.classList.add('numerot')
        divElement.style.color = 'blue'
        document.body.appendChild(divElement)
    }
)

//tehtava4

let elements = document.getElementsByClassName('numerot')
for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', (e) => {
        e.target.innerHTML = Number(e.target.innerHTML) + 1
    })
}

//tehtava5

let element = document.createElement('button')
document.body.appendChild(element)
element.innerText = 'Vaihda väri!'
element.style.width = '100px'
element.style.height = '30px'
function mixer ( ) {
    let color = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + color
}
setInterval(mixer, 1000)
element.addEventListener('click', mixer)

