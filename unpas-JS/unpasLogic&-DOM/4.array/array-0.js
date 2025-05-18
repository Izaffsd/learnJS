var arr = ['muhd' , 'iskandar' , 'affi' , 3];

for (var i = 0; i < arr.length; i++){
    console.log('Pelajar (index) ' + ( i + 1 ) + ' : ' + arr[i] );
}


// var arr = [ 'muhd' , 'iskandar' , 'affi' ];

// method array  
// 1. join , length
// 2. push , pop
// 3. shift , unshift
// 4. splice , slice


// arr.push('bin' , 'mohd'); // tambah elemen akhir
// arr.pop(); // delete elemen akhir

// arr.shift(); // delete elemen awal
// arr.unshift('bin' , 'mohd'); // tambah elemen awal

// arr.splice(2, 0, 'bin' , 'mohd'); // tambah elemen sesuai index , 0 = delete 0 elemen
// arr.splice(1, 2, 'bin' , 'mohd'); // output = muhd - bin - mohd
         // start = 1 , delete = 2 , insert = 'bin' , 'mohd'

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


// function hello(){
//     return 'hello';
// }
// console.log(hello());

// function hello(){
//     console.log('hello');
// }
// hello();