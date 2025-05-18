// 1. prototype

// 1. object literal
// tidak efektif kalau banyak
// nama object takaleh sama
// let objectLit = {
//     nama: 'iskandar',
//     umur: 19,
//     bulking: function(gProtien){        
//         return `suka makan ayam ${gProtien}g protien jer`
//     }
// }
// // objectLit.bluking(23)

// let eren = {
//     nama: 'eren',
//     umur: 19,
//     bulking: function(gProtien){        
//         return `suka makan ayam ${gProtien}g protien jer`
//     }
// }

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

// function Student(nama, umur, total){
//     // hubung dengan objek lain
//     let pilihanNo = Object.create(methodPilihNo)
    
//     pilihanNo.nama = nama
//     pilihanNo.umur = umur
//     pilihanNo.total = total


//     // buat properti nama kira yg berisi dari objek lain
//     // pilihanNo.tambah = methodPilihNo.tambah;
//     // pilihanNo.darab = methodPilihNo.darab;
//     // pilihanNo.bahagi = methodPilihNo.bahagi;

//     return pilihanNo
// }


// let henry = Student('henry', 4, 0)
// let surinto = Student('surinto', 3, 0)



// function Student(nama, energi){
//     let student = {}
//     student.nama = nama
//     student.energi = energi

//     student.makan = function(ayam){
//         this.energi += ayam
//         console.log(`hi ${this.nama}, selaman makan -> ${this.energi}`)
//     }

//     student.main = function(jam){
//         this.energi -= jam
//         console.log(`kamu banyak main dan bermalasan ${this.nama} = ${this.energi}`)
//     }
//     return student
// }

// let senah = Student('senah', 8)
// let yahiko = Student('yahiko', 8)




// 3. func constructor hampir sama dgn func Declare
// tidak perlu declare var object ( var = {}) dan tak perlu direturn sebab dah auto
// keyword new

// let funConstr = function(no1, no2){
//     this.no1 = no1
//     this.no2 = no2
//     this.no3New = function(){
//         return no1 + no2
//     }
// }

// let totalConst = new funConstr(2, 3)



// 4. object.create()


const methodPilihNo = {
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

// protype inheritance

function Student(nama, umur, total){
    // hubung dengan objek lain
    // let pilihanNo = Object.create(methodPilihNo)
    // belakang layar
    // let this = {} / Object.create(Student.prototype)
    
    this.nama = nama
    this.umur = umur
    this.total = total

    // buat properti nama kira yg berisi dari objek lain
    // pilihanNo.tambah = methodPilihNo.tambah;
    // pilihanNo.darab = methodPilihNo.darab;
    // pilihanNo.bahagi = methodPilihNo.bahagi;

    // return this
}

Student.prototype.tambah = function( no1, no2 ){
    this.total = no1 + no2
    return `TOTAL TAMBAH ${no1} + ${no2} adalah ${this.total} tau ${this.nama}`
}

Student.prototype.darab = function( no1, no2 ){
    this.total = no1 * no2
    return `TOTAL darab ${no1} * ${no2} adalah ${this.total} tau ${this.nama}`
}

Student.prototype.bahagi = function( no1, no2 ){
    this.total = no1 / no2
    return `TOTAL bahagi ${no1} / ${no2} adalah ${this.total} tau ${this.nama}`
}


// versi Class yg terjadi protype juga
class Student {
    constructor( nama, year, total ){
        this.nama = nama
        this.year = year
        this.total = total
    }

    makan( no1, no2 ){
        this.total = no1 + no2
        return `TOTAL TAMBAH ${no1} + ${no2} adalah ${this.total} tau ${this.nama}`
    }
    
    darab( no1, no2 ){
        this.total = no1 * no2
        return `TOTAL darab ${no1} * ${no2} adalah ${this.total} tau ${this.nama}`
    }
    
    bahagi( no1, no2 ){
        this.total = no1 / no2
        return `TOTAL bahagi ${no1} / ${no2} adalah ${this.total} tau ${this.nama}`
    }
}

let henry = new Student('henry', 4, 0)
let surinto = new Student('surinto', 3, 0) 


let arr = [3, 2, 4] // dekt console Array.protype , Object.protype, Number.protype
console.log(arr.reverse())




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
