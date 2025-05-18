// // kat console =
// var mhs = {}
// mhs.nama = 'iskandar'
// mhs.umur = 3
// mhs['nama']

// var student = {

//     nama : 'iskandar',
//     umur :  19,
//     yes : true,
//     iphone : [ 5, 10, 13, 15],
//         alamat : {
//             norumah : 'No.35',
//             lorong : ' Jalan nilam 1/1',
//             taman : 'Taman Sri Nanding',

//         }

// }

// student.nama= ' senah';

// // Object Literal
// var student1 = {

//     nama : 'iskandar',
//     umur :  19,
//     yes : true,
//     iphone : [ 5, 10, 13, 15]
// }

// var student2 = {

//     nama : 'iskandar',
//     umur :  19,
//     yes : true,
//     iphone : [ 5, 10, 13, 15]
// }

// // Func declare
// function buatobjek(nama, umur, yes, iphone) {

//     var student = {};

//     student.nama = nama;
//     student.umur = umur;
//     student.yes = yes;
//     student.iphone = iphone;

//     return student;
// }

// var student3 = buatobjek('iskandar', 20, true, [2, 10, 13]);



// return Adalah untuk Memberi Nilai kepada Pemanggil:
// func Constructor / seperti class hruf besar
let Namaobjek = function (nama, umur, yes, iphone) {
  this.nama = nama;





  
  this.umur = umur;
  this.yes = yes;
  this.iphone = iphone;
  // method untuk paparkan nama saya = jadi harusjalankan () sbb function klau tkde () ia tidak dijalankan
  this.method = function () {
    // return 'nama saya ' + this.nama
    // bila aku console = undefine sebb
    // Dengan console.log, tindakan sudah selesai (ia mencetak ke konsol), jadi return tidak menambah nilai.
    console.log("nama saya " + this.nama);
  };
}; // new wajib untuk costruc klau tak js thought func declare
var student4 = new Namaobjek("iskandar", 34, true, [1, 3]);

// S6 atau lebih baru, anda boleh menulis constructor function dengan cara yang lebih moden menggunakan class
// class objek {
//     constructor(nama, umur, yes, iphone) {
//         this.nama = nama;
//         this.umur = umur;
//         this.yes = yes;
//         this.iphone = iphone;
//     }

//     method() {
//         console.log('Nama saya ' + this.nama);
//     }
// }

// const student4 = new Namaobjek('Iskandar', 34, true, [1, 3]);
// student4.method(); // Output: Nama saya Iskandar

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
