/*
// this
var a = 10;
console.log(window); //this same
console.log(this.a);
*/

// cara 1 - func declare

// function halo(){
//     console.log(window); 
//     console.log('haloo');
// }
// window.halo();
// this kembalikan obj global


// cara 2 -obj literal
     //tambahkan properties time buat objek
var obj = {
    a : 4,
    nama : 'saya is'
};
// let i = obj
// // halo = method
// obj.halo = function(){
//     console.log(this); 
//     console.log('haloo');
// }
// obj.halo();
// this kemabalikan obj yang bersangkutan



// cara 3 - constructor

function Halo(nama){
    // console.log(nama = nama);
    console.log(this.nama = nama);
    console.log(this);


    console.log('haloo');
}
// new Halo();
var obj1 = new Halo('ali');
// var obj2 = new Halo();
// this kembalikan object yang baru dibuat

