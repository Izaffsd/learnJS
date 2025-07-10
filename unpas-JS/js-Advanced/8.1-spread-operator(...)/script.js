const obj = {
    buah1: 'epal',
    buah2: 'durian',
    buah3: 'mangga'
}
// console.log(...Object.values(obj))
// Output: epal durian mangga
// console.log(`Saya suka ${Object.values(obj).join(', ')} `)
// Output: Saya suka epal, durian, dan mangga




// gabung 2 aray 
const buah = [ 'epal', 'mangga', 'durian' ]
const sayur = ['timun', ' kobes', 'tomato']

console.log(...sayur)
console.log(...sayur[1])

const semua = ['ni buah', ...buah, 'ni pulak sayur', ...sayur]
console.log( semua )
console.log( buah.concat(sayur) )

// document.body.innerHTML = semua // output = ni buah,epal,mangga,durian,ni pulak sayur,timun, kobes,tomato


const li = document.querySelectorAll('li') // nodelist
console.log(li[0].innerHTML) 
// const arrLI = []
// for(let i = 0; i < li.length; i++){
//     arrLI.push(li[i].innerHTML)
// }
// console.log(arrLI)
// document.body.innerHTML = arrLI // output = epal,mangga,durian


console.log( [...li].map( m => m.innerHTML) ) // spread dan simpan dalam array


const nama = document.querySelector('.nama')
// console.log(...nama.textContent)

// looping pakai map untuk span kan eachnya
const loopM = [...nama.textContent].map( a => `<span>${a}</span>` ).join(' ')
nama.innerHTML = loopM
console.log(loopM)