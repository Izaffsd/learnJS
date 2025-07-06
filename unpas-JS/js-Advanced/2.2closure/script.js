// function parent(){
//     let nama = 'nama global / dev'
//     function inner(){
//         // klau pkai car lokal dh tak jadi closure sbb dh tk pkai lexical scopenya
//         let nama = 'nama lokal / is'
//         console.log(nama)
//     }
//     inner()
// }
// parent()



// Kalau function inner mempunyai variable lokal yang sama nama dengan variable luar, maka ia tidak akan menggunakan variable dari lexical scope — maka tak wujud closure untuk variable tersebut.

// function parent(){
//     let nama = 'nama global / dev'
//     let umur = 20
//     function inner(){
//         //! klau pkai var lokal dh tak jadi closure sbb dh tk pkai lexical scopenya
//         // let nama = 'nama lokal / is'
//         // func inner perlukan 2 data dari luar so masuk ke closure scope juga
//         console.log(nama)
//         console.log(umur)

//     }
//     console.dir(inner) // tmpilkn objeknya
// }
// parent()


// function parent(){
//     // let nama = 'nama global / dev'
//     return function( nama ){
//         // klau pkai var lokal dh tak jadi closure sbb dh tk pkai lexical scopenya
//         // let nama = 'nama lokal / is'
//         console.log( nama )
//     }
//     // return inner
// }
// let simpanFunc = parent()

// simpanFunc('iskandar')
// simpanFunc('amir')

// function ucapSalam( waktu ){

//     return function( nama ){
//         console.log(`Hi ${nama}, waktu nya ${waktu}`)
//     }

// }

// let Pagi = ucapSalam('Pagi')
// let Malam = ucapSalam('Malam')

// Pagi('Iskandar Affi')
// Malam('Devis')

// console.dir(Malam) // scopes


(function() {
  console.log("Hello dari IIFE");
})();

// expression

// sudah brp kali dh dclick

let add = ( function(){
let i = 4

    return function(){
         for ( let counter = 1; counter <= i; counter++ ){
            console.log(`tah ${i} k ${counter}`)
        }
    }
}
)
()

// tk nk sbb bila dh bnyk or panjng akn effect cth ->
// counter = 10
add()


// imediatly envold func

// anonimos func
// () = func
// akhir untuk jalankannya = ()

(function(){
    let i = 2
        console.log('hellosdf ' + i)
}())

// tkleh akses sbb func scope
// console.log(i)