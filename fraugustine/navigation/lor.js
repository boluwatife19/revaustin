const furt = document.querySelector('.furt')
const ham = document.querySelector('.hambuger')
const nav = document.querySelector('.bug')
const nas = document.querySelector('.bar')

furt.addEventListener('click', () => {
    nav.classList.toggle('active')
    furt.classList.toggle( "gutr")
    nas.classList.toggle( "frr")
    ham.classList.toggle( "bgyf")
})

const quote = [
    'And if we are careful to obey all this law before the Lord our God, as he has commanded us, that will be our righteousness.',
    'We are witnesses of these things, and so is the Holy Spirit, whom God has given to those who obey him.',
    'For with much wisdom comes much sorrow; the more knowledge, the more grief.',
    'An honest witness does not deceive, but a false witness pours out lies.',
    'All day long he craves for more, but the righteous give without sparing.',
    'I instruct you in the way of wisdom and lead you along straight paths.',
    'Cast all your anxiety on him because he cares for you.',
    'Praise be to the Lord, to God our Savior, who daily bears our burdens.'
]

const img= [
    'mvmlvm', 
    'igsk,go'

]

let i = 0;
let k = 0;
const mlq = document.querySelector('.quote')
const mag = document.getElementById('klop')



function clo(){
i+=1
k+1
if(i > quote.length-1){
    i = 0;
}
if(k > img.length-1){
    k = 0;
}

    mlq.innerHTML= quote[i]
    mag.innerHTML= img[mag]
    
}

setInterval(clo, 5000)