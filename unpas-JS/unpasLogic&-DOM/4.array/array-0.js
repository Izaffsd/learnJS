var arr = ['muhd' , 'iskandar' , 'affi' , 3];

for (var i = 0; i < arr.length; i++){
    console.log(`Pelajar (index) ${ i + 1 } : ${ arr[i] } ` );
}
// Pelajar (index) ' + ( i + 1 ) + ' : ' + arr[i] 

// var arr = [ 'muhd' , 'iskandar' , 'affi' ];

// method array  
// 1.  = gabungkan elemen array jadi string , length = dapatkan panjang (bilangan elemen) - bukan index
// 2. push = tambah elemen di akhir array , pop = buang elemen terakhir
// 3. shift – buang elemen pertama , unshift - tambah elemen di depan
// 4. splice , slice

// splice(start, deleteCount, item1, item2, ...)
// Guna untuk tambah atau buang elemen dari array asal

const nombor = [1, 2, 3, 4, 5];
nombor.splice(2, 1, 99); // mula di index 2, buang 1, tambah 99
console.log(nombor); // [1, 2, 99, 4, 5]


// arr.push('bin' , 'mohd'); // tambah elemen akhir
// arr.pop(); // delete elemen akhir

// arr.shift(); // delete elemen awal
// arr.unshift('bin' , 'mohd'); // tambah elemen awal

// arr.splice(2, 0, 'bin' , 'mohd'); // tambah elemen sesuai index , 0 = delete 0 elemen
// arr.splice(1, 2, 'bin' , 'mohd'); // output = muhd - bin - mohd
//         //  start = 1 , delete = 2 , insert = 'bin' , 'mohd'

// var arr2 = arr.slice(1, 3); // nak tampil kan start dari index 1 (iskandar) sampai index < 3 (affi)

// console.log(arr.join( ' - '));
// console.log(arr2.join( ' - ')); // join tuk ubah jadi string


// var angka = [ 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ];

// var cetak = function(e){
//     console.log(e);
// }
// angka.forEach(cetak);

// angka.forEach(function(e){
//     console.log(e);
// });

// var nama = ['muhd' , 'iskandar' , 'affi'];

// // for (var i = 0; i < arr.length; i++){
// //     console.log('Pelajar (index) ' + ( i + 1 ) + ' : ' + arr[i] );
// // }
// nama.forEach(function(e , i){
//     console.log('pelajar ke-' + (i + 1) + ' adalah : ' + e);
// });


// var angka = [ 1 ,2 ,20 ,4 ,3 ,6 ,10 ,8 ,11 ];

// var angka2 = angka.map(function(e , i){
//     return e * 2;
//     // console.log( (i + 1) + ' adalah : ' + e);
// });

// console.log(angka2.join(' - '));


var angka = [ 1 ,2 ,20 ,4 ,3 ,6 ,10 ,8 ,11 ];

// angka.sort(); // start dari no awal 1 ,- , 10 ,11 angka
// Fungsi sort dengan logik perbandingan


// angka.sort((a, b) => a - b); // Susun secara menaik

angka.sort(function(a, b){
    return a - b;
//     Jika a - b adalah negatif, a dianggap lebih kecil daripada b, jadi a akan berada sebelum b dalam array yang disusun.
// Jika a - b adalah sifar, a dan b dianggap sama, dan susunan mereka tidak berubah.
// Jika a - b adalah positif, a dianggap lebih besar daripada b, jadi a akan berada selepas b dalam array yang disusun.
}); 
// Contoh perbandingan langkah demi langkah untuk [2, 20, 4]:

// 2 - 20 → negatif (2 di depan 20).
// 2 - 4 → negatif (2 di depan 4).
// 4 - 20 → negatif (4 di depan 20). Hasil: [2, 4, 20].

// menggabungkan semua elemen dalam array menjadi satu string, dipisahkan oleh argumen yang diberikan
console.log(angka.join(' - '));



const angkaa = [1, 4, 2];

angkaa.sort(function(a, b) {
  console.log(`${a} : ${b}`);
  return a - b;
});


function hello(){
    return 'hellso';
}
console.log(hello());

function hellos(){
    console.log('heladadlo');
}
hellos();