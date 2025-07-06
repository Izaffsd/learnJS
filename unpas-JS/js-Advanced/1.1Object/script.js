// 1. prototype

// FunctionName.prototype

//  (constructor function)


function Pelajar(nama) {
  this.nama = nama;
}
Pelajar.prototype.sayHi = function () {
  console.log("Hi saya " + this.nama);
};

let ani = new Pelajar("Ani");
let bob = new Pelajar("Bob");

ani.sayHi(); // Hi saya Ani
bob.sayHi(); // Hi saya Bob

console.log(Pelajar.prototype); 


// Inheritance tu konsep OOP
const parent = {
  hello() {
    console.log("Hi from parent");
  }
};

const child = Object.create(parent);

console.log(child); // {} kosong
child.hello(); // Hi from parent

child.nama = "Iskandar";
console.log(child); // { nama: 'Iskandar' }
child.hello(); // Masih boleh guna dari parent



// Bayangkan methodPilihNo2 = "Parent"
// objBaru = "Anak"

// Anak tu tak ada harta (kosong),
// Tapi bila dia perlu sesuatu, dia pinjam/warisi dari parent.


// // 1. object literal
// // tidak efektif kalau banyak
// // nama object takaleh sama
// let objectLit = {
//     nama: 'iskandar',
//     umur: 19,
//     bulking: function(gProtien){        
//         return `saya ${this.nama} suka makan ayam ${gProtien}g protien jer`
//     }
// }

// let eren = {
//     nama: 'eren',
//     umur: 19,
//     bulking: function(gProtien){        
//         return `umur saya ${this.umur} suka makan ayam ${gProtien}g protien jer`
//     }
// }
// console.log(eren.bulking(23))



// // 2. func declare

// const methodPilihNo = {
//     tambah: function(no1, no2){
//         this.total = no1 + no2
//         console.log(`total tambah + kedua arg ${no1} dan ${no2} adalah ${this.total}`)
//     }
//     , 
//     darab: function(no1, no2){
//         this.total = no1 * no2
//         console.log(`total darab * kedua arg ${no1} dan ${no2} adalah ${this.total}`)
//     }
//     ,
//     bahagi: function(no1, no2){
//         this.total = no1 / no2
//         console.log(`total bahagi / kedua arg ${no1} dan ${no2} adalah ${this.total}`)
//     }
    
// }

// function Studentt(nama, umur, total){
//     // hubung dengan objek lain
//     let pilihanNo = Object.create(methodPilihNo)
    
//     pilihanNo.nama = nama
//     pilihanNo.umur = umur
//     pilihanNo.total = total


// //     bila dah buat:    let pilihanNo = Object.create(methodPilihNo)

// // Tak perlu lagi:
//     // buat properti nama kira yg berisi dari objek lain
//     // pilihanNo.tambah = methodPilihNo.tambah;
//     // pilihanNo.darab = methodPilihNo.darab;
//     // pilihanNo.bahagi = methodPilihNo.bahagi;

//     return pilihanNo
// }


// let henry = Studentt('henry', 4, 0)
// let surinto = Studentt('surinto', 3, 0)

// // henry.tambah(10, 5);



function Student1(nama, energi){
    let student = {}
    student.nama = nama
    student.energi = energi

    student.makan = function(ayam){
        if (typeof ayam !== 'number') {
            console.log("Sila masukkan nombor untuk makan.");
            return;
        }
        this.energi += ayam
        console.log(`hi ${this.nama}, selamat makan -> ${this.energi}`)
    }

    student.main = function(jam){
        this.energi -= jam
        console.log(`kamu banyak main dan bermalasan ${this.nama} = ${this.energi}`)
    }
    return student
}

let senah = Student1('senah', 8)
let yahiko = Student1('yahiko', 8)




// 3. func constructor hampir sama dgn func Declare
// tidak perlu declare var object ( var = {}) dan tak perlu direturn sebab dah auto
// keyword new

let funConstr = function(no1, no2){
    this.no1 = no1
    this.no2 = no2
    this.no3New = function(){
        return no1 + no2
    }
}

let totalConst = new funConstr(2, 3)



// 4. object.create()
// Object.create() (Prototypal Inheritance gaya manual)

const methodPilihNo2 = {
    tambah: function(no1, no2){
        this.total = no1 + no2
        console.log(`total tambah + kedua arg ${no1} dan ${no2} adalah ${this.total}`)
    }
    , 
    darab: function(no1, no2){
        this.total = no1 * no2
        console.log(`total darab * kedua arg ${no1} dan ${no2} adalah ${this.total}`)
    }
    ,
    bahagi: function(no1, no2){
        this.total = no1 / no2
        console.log(`total bahagi / kedua arg ${no1} dan ${no2} adalah ${this.total}`)
    }
    
}
// this merujuk kepada objek yang memanggil method tu — dalam kes ini: pelajar
// this.total = ..., JS akan tambah property total ke dalam pelajar itu sendiri.
const pelajar = Object.create(methodPilihNo2);
pelajar.nama = 'Iskandar';




// protype inheritance

// function Student(nama, umur, total){
//     // hubung dengan objek lain
//     // let pilihanNo = Object.create(methodPilihNo2)
//     // belakang layar
//     // let this = {} / Object.create(Student.prototype)
    
//     this.nama = nama
//     this.umur = umur
//     this.total = total

//     // buat properti nama kira yg berisi dari objek lain
//     // pilihanNo.tambah = methodPilihNo2.tambah;
//     // pilihanNo.darab = methodPilihNo2.darab;
//     // pilihanNo.bahagi = methodPilihNo2.bahagi;

//     // return this
// }

// Student.prototype.tambah = function( no1, no2 ){
//     this.total = no1 + no2
//     return `TOTAL TAMBAH ${no1} + ${no2} adalah ${this.total} tau ${this.nama}`
// }

// Student.prototype.darab = function( no1, no2 ){
//     this.total = no1 * no2
//     return `TOTAL darab ${no1} * ${no2} adalah ${this.total} tau ${this.nama}`
// }

// Student.prototype.bahagi = function( no1, no2 ){
//     this.total = no1 / no2
//     return `TOTAL bahagi ${no1} / ${no2} adalah ${this.total} tau ${this.nama}`
// }


// // versi Class yg terjadi protype juga
// class StudentC {
//     constructor( nama, year, total ){
//         this.nama = nama
//         this.year = year
//         this.total = total
//     }

//     makan( no1, no2 ){
//         this.total = no1 + no2
//         return `TOTAL TAMBAH ${no1} + ${no2} adalah ${this.total} tau ${this.nama}`
//     }
    
//     darab( no1, no2 ){
//         this.total = no1 * no2
//         return `TOTAL darab ${no1} * ${no2} adalah ${this.total} tau ${this.nama}`
//     }
    
//     bahagi( no1, no2 ){
//         this.total = no1 / no2
//         return `TOTAL bahagi ${no1} / ${no2} adalah ${this.total} tau ${this.nama}`
//     }
// }

// let henry2 = new StudentC('henry', 4, 0)
// let surinto2 = new StudentC('surinto', 3, 0) 


// let arr = [3, 2, 4] // dekt console Array.protype , Object.protype, Number.protype
// console.log(arr.reverse())




const newD = document.createElement('div')
newD.setAttribute('class', 'container')

newD.style.backgroundColor = 'aqua'


const newH1 = document.createElement('h1')
const newTextH1 = document.createTextNode('hello world')

newH1.appendChild(newTextH1)

newH1.innerHTML = '<em>Practice DOM</em>'


newD.appendChild(newH1)

document.body.appendChild(newD)


newH1.style.color = 'red'
