// kiri adalah target (tempat letak), kanan adalah sumber (nilai asal)
const arrN = [2, 4, 1]
const arrS = ['isss', 'kan', 'dar', 'epal', 'naga']


const [a, b, c] = arrN

// skipping items
const [nam, , , buah, haiwan] = arrS

console.log(a)
console.log(c)


console.log(nam)
console.log(haiwan)


// swap items takde semicolon = error access
let x = 1
let z = 2;

[x, z] = [z, x]

console.log(x)
console.log(z)


// return value pada function
function tryA(){
    return ['hh', 'gg']
}
const [h, g] = tryA()
console.log(g)


// rest parameter
const arr = [111, 222, 333, 43, 55, 66, 77]

const [k, ...values] = arr

console.log(values)
console.log(k)





// object
const iss = {
    nama: 'iskandar',
    umur: 20
}

const {nama, umur} = iss

console.log(nama)
console.log(umur)



// 1. Destructuring dengan objek lain
let person = { first: 'Ali', last: 'Bin Abu' };

({ first, last } = person);

console.log(first); // Ali
console.log(last);  // Bin Abu



// script.js:67 Uncaught TypeError: console.log(...) is not a function
// ({ na, um } = { na: 'issda', um: 34}) // tambah atas ni baru tak error

// assigment tanpa declare object (for simpel obj)
({ na, um } = { na: 'issda', um: 34})
console.table(na)



// Assign dari return function
function getUser() {
  return { id: 1, fName: 'Izaf' };
}

({ id, fName } = getUser());
console.log(id);   // 1
console.log(fName); // Izaf




// Tukar nilai antara dua variabel objek

let obj = {};

({ a: obj.x, b: obj.y } = { a: 5, b: 10 });

console.log(obj); // { x: 5, y: 10 }


//  Kita mula dengan 2 objek:
let objA = { a: 1 };
let objB = { b: 2 };
// objA.a = 1
// objB.b = 2

// Ia bermaksud: Ambil nilai dari a, simpan ke objB.b   // (kanan) ini destructuring: 
//  a : 2    //  b : 1      // a : 1    // b : 2
({ a: objB.b, b: objA.a } = { a: objA.a, b: objB.b });

// a: objB.b bermaksud nilai a akan diberikan ke objB.b
// b: objA.a bermaksud nilai b akan diberikan ke objA.a

console.log(objA); // { a: 2 }
console.log(objB); // { b: 1 }



const objek = {
    buah: 'epal',
    nilai: 3
}
const { buah : jenis,  nilai : berapa} = objek
console.log(jenis)
console.log(berapa)



// memberikan default value
// const iz = {
//     brand: 'new bal',
//     // website: 'kasutNB.com@.my'
// }
// const {brand, website = 'helo@gmail.com'} = iz
// console.log(website)



// memberikan default value + assign ke var baru
const iz = {
    brand: 'new bal',
    // website: 'kasutNB.com@.my'
}
const {brand: br, website: web = 'helo@gmail.com'} = iz
console.log(br)
console.log(web)


const izkan = {
    bran: 'new bal',
    website: 'kasutNB.com@.my',
    ber: 43
}
// function pecObj(izkan){
//     return izkan.bran
// }

function pecObj( { website, ber} ){
    return { website, ber } 
}
console.log(pecObj(izkan))


function restPara(obj) {
    return { ...obj } // salin semua property
}

console.log(restPara(izkan))
