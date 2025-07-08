//! Arrow Function	        Return	    Auto Return?
// () => "Hi"	            Yes	           ✅
// () => { return "Hi"; }	Yes	           ❌ (manual return)
// () => { "Hi" }	        No	           ❌ (undefined)
// () => ({ nama: "Is" })	Yes	           ✅ (object literal dengan () diperlukan)


// // func expres
// const welcArrow = function( nama ){
//     return `welcome to arrow func ya ${nama}`
// }

// console.log(welcArrow('iskandar'))

// arrow
const welcArrow = ( nama ) => {
    return  `func tu hilang kan je ${nama} letak arrow tu kan sebelah {`
}
console.log(welcArrow('iskandar'))


// const duaPara = ( password, email ) => {
//     return `ni ${password} ni @ ${email}`
// }
// console.log(duaPara('p123', 'is@gmail.com'))


// // satu parameter = impilisit return --- ( ) , { } & return takyah
// const implisitReturn = nama => `satu parameter just perlu arrow ( => ) . tau ${nama}`

// console.log(implisitReturn('iskandar'))


// const noPara = () => `tkde para = kena ada ( )`

// console.log(noPara())


// 3. Arrow Function Ringkas (tanpa {})
// Kalau function hanya ada 1 baris return, kau boleh tulis tanpa {} dan return:

// const welcArrow = nama => `welcome back, ${nama}`;
// ➡️ Ini auto-return.

// () => ({ nama: "Is" })
// () yang balut object literal dalam arrow function BUKAN IIFE.
// Ia cuma grouping operator supaya JavaScript faham itu object, bukan block {}.


// func map
// Tujuan utama pakai (function() {})():
// ✅ 1. Terus jalankan function tanpa simpan nama


//  callback function bernama
// function kiraPanjang(nama) {
//   return nama.length;
// }

// const panjang = namaPenuh.map(kiraPanjang);




// callback function yang diberi kepada .map() (anonymous)

let test = ['23', '234523', 2342]

let newArr = test.map(function(newM){
    return newM.length
})
console.log(newArr)

let mahasiswa = ['is', 'dod', 'ariansyah']

let jumlahHuruf = mahasiswa.map(function(nama){
    return nama.length
})
console.log(jumlahHuruf)

let totalChar = mahasiswa.map( nama =>  nama.length )

// obj literal 
const objArrow = mahasiswa.map( nama => ( { nama, totalChar: nama.length }
    // { nama }	Object shorthand
    // nama: nama ( properti sama dgn nilainya jadi = nama je)
)
)
console.table(objArrow)