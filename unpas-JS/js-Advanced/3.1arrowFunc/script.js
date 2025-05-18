// // func expres
// const welcArrow = function( nama ){
//     return `welcome to arrow func ya ${nama}`
// }

// console.log(welcArrow('iskandar'))

// // arrow
// const welcArrow = ( nama ) => {
//     return  `func tu hilang kan je ${nama} letak arrow tu kan sebelah {`
// }
// console.log(welcArrow('iskandar'))


const duaPara = ( password, email ) => {
    return `ni ${password} ni @ ${email}`
}
console.log(duaPara('p123', 'is@gmail.com'))


// satu parameter = impilisit return --- ( ) , { } & return takyah
const implisitReturn = nama => `satu parameter just perlu arrow ( => )`

console.log(implisitReturn('iskandar'))


const noPara = () => `tkde para = kena ada ( )`

console.log(noPara())

// func map

let mahasiswa = ['is', 'dod', 'ariansyah']

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length
// })
// console.log(jumlahHuruf)

// let totalChar = mahasiswa.map( nama =>  nama.length )

// obj
const objArrow = mahasiswa.map( nama => (
    { nama, totalChar: nama.length }
    // nama: nama ( properti sama dgn nilainya jadi = nama je)
)
)
console.table(objArrow)