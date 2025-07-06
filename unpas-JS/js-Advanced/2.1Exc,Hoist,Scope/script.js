// 2 fase pada Execution Context
// 1. Creation
// 2. Exectuion


var nama = 0

// di creation phase pada global context

// js cek dulu dari console = semua variable diisi dgn undefined cth var nama = undefined
// nama function = fn()
// nama konsep tu hoisting // benderanya dinaikkan keatas dulu 
// onject window  sebagai = global object
// this = window

// then execution phase / line by line dari atas ke bawah 

console.log(hello())

var nama = 'iskandar'
var umur = 19

function hello(){
    console.log( `halo, nama saya ${nama} umur ${umur}`)
    // local execution context = dh tak jadi global
    // return
}

// function membuat local execution context
// yg di dalamnya terdapat creation dan excutiopn phase
// selain akses window juga boleh obj arguments yg di masukkan dari parameternya
// dlm nya ada hoisting juga ada hoisting nya local
// di dalam func ada var tak klau ada naikkan keatas / di dalam func ada func lagi tak 
// klau ada var isi dulu dgn undefined pada fase creation -> klau dh execution baru diisi dgn nilainya


// JavaScript "mengangkat" deklarasi var x ke atas, tetapi nilai 5 tidak diangkat.
// var x;
// console.log(x); // undefined
// x = 5;
// console.log(x); // 5

// // 1. Variabel global (var) dieksekusi terlebih dahulu.
// // 2. Fungsi hanya dideklarasikan, tetapi tidak langsung dijalankan.
// // 3. console.log(printURL(username)) memanggil fungsi, dan hasilnya dicetak.

// var nama = 'Iskandar'
// var username = 'Izaffsd'

// function printURL(){
//     var github = 'https://github.com/'
//     return github + username
// }
// console.log(printURL())
// // = https://github.com/Izaffsd

console.log('jdsjs')
var nama = 'Iskandar'
var username = 'Izddaffsd'

function printURL(){
    // console.log(arguments[0])
    var github = 'https://github.com/'
    return github + arguments[0]
}
console.log(printURL('jadkljf'))
// // = https://github.com/ali


// var nama = 'Iskandar'
// var username = 'Izaffsd'
// // amik yg global klau takde baru error

// function printURL(){
//     // ali masuk ke obj arguments sbb ada obj baru time creation dan excution
//     // console.log(arguments[0]) // = 'ali' index 1, index 2 oren
//     var github = 'https://github.com/'
//     return github + username
// }
// console.log(printURL( 'ali', 'oren' ))
// = https://github.com/Izaffsd



function a(){
    
    console.log('ini a')
    // 2. sblum print a, hoisting dlu dlmnya -> func b dan c lpstu baru print 'ini a'

    function b(){
        console.log('ini b')

        function c(){
            // ada var tk? = takde , ada func tk? = takde baru di print 'ini c'
            console.log('ini c')
        }
        c()
    }
    // 3. sblum print b, hoisting dlu dlmnya -> func c lpstu baru print 'ini b'
    b()
}
// 1. hoisting dlu  
a()
// 4. baru line by line


// undefined
// sandhika satu 
// dua() = erik
// erik