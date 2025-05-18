// function untuk kira 2 kubus

// kira

// papar


// function total2kubus(a, b){
//     var total;
//     volA = a * a * a;
//     volB = b * b * b;
//     total = volA + volB;

//     return total;
// }
// console.log('total = ' + total2kubus(8, 3))

// function total2kubus(a, b){

//     return a * a * a + b * b * b;
// }
// console.log( total2kubus(8, 3) )



// function tambah(a, b) {

//     return a + b;
// }
// // var a = 5;
// // var b = 3;
// var a = parseInt(prompt('angka 1'));
// var b = parseInt(prompt('angka 2'));

// var total = tambah(a*3, b*3);
// console.log(total);
// console.log(tambah(a, b)); // cth jika var total delete 


// function untuk total tambah arguments

// paparkan

// function tambah(){
//     var hasil = 0;
//     for ( var i = 0; i < arguments.length; i++ ){
//         hasil += arguments[i]; // hasil = hasil + arg[i]
//     }
//     return hasil;

// }
// var test = tambah(2, 3, 4, 7);
// console.log(test);


// objek khas yang dipanggil arguments yang tersedia dalam fungsi JavaScript untuk mengakses semua argumen yang diberikan.
// Langkah 1: arguments mengandungi [2, 3, 4, 7]
// Langkah 2: Gelung for mengira semua elemen satu persatu:
// hasil = 0 + 2 = 2
// hasil = 2 + 3 = 5
// hasil = 5 + 4 = 9
// hasil = 9 + 7 = 16



// var a = 5;
// a dapat diakses dari mana-mana bahagian kod di luar fungsi, termasuk di dalam fungsi tes itu sendiri.

// var b; deklarasi di skop global

// function tes(){
//     var b = 3;
// b hanya "hidup" di dalam fungsi tes dan tidak dapat diakses dari luar fungsi tersebut.

// b = 3;   // mengubah nilai b di dalam fungsi
//     // console.log(a);
// }
// tes();
// console.log(b); // undefined if luar b = 3


// logic telesuri jika dah 0 jadi 1
function faktori( n ){
    if ( n === 0) return 1;
    return n * faktori( n - 1 );
}
console.log(faktori(5));

// Dalam matematik, faktorial ditulis sebagai n! dan ia bermaksud hasil darab semua nombor dari n hingga 1. Sebagai contoh, 5! (faktorial 5) ialah 5 * 4 * 3 * 2 * 1, yang sama dengan 120.

// Langkah 1: faktori(5) akan kira 5 * faktori(4)
// Langkah 2: faktori(4) akan kira 4 * faktori(3)
// Langkah 3: faktori(3) akan kira 3 * faktori(2)
// Langkah 4: faktori(2) akan kira 2 * faktori(1)
// Langkah 5: faktori(1) akan kira 1 * faktori(0)
// Langkah 6: faktori(0) akan terus memulangkan 1 (kes asas)


var a = 5;
var b;       // deklarasi di skop global

function tes(){
    b = 3;   // mengubah nilai b di dalam fungsi
    console.log(a); // ini akan memaparkan 5
    return b
}

tes();
console.log(b); // ini sekarang akan memaparkan 3

// console.log(tes()); // kalau padam yang atas jadi sama


// Fungsi dan Parameter
// Tujuan: Untuk membahagikan kod kepada blok kecil yang boleh digunakan semula.

// Fungsi dengan parameter
// para = minta harga dan diskaun %
function kiraDiskaun(harga, diskaunPeratus){
    // function untuk kira diskaun = 100 darab ( 20 / 100 ) = 0.2 * 100 = 20
    const diskaun = harga * ( diskaunPeratus / 100 )
    // return ke function kiraDiskaun
    return harga - diskaun
}

// calculate it

const hasil = kiraDiskaun(100, 20)
console.log('total setelah diskaun = RM' + hasil)

// Memanggil fungsi
// Harga asal RM100, diskaun 20%



// Buat fungsi yang menerima senarai markah pelajar dalam bentuk array, mengira purata markah, dan menentukan gred berdasarkan purata tersebut.

// Kriteria Gred:

// A: 80 - 100
// B: 65 - 79
// C: 50 - 64
// D: 40 - 49
// F: 0 - 39

// function untuk terima markah pelajar ( array ), kira purata markah dan tentukan gred based on purata

function senaraiMarkah(nama, markah){
    if ( markah >= 80 ) return 'nama : ' + nama + '\n' +'Gred : ' + 'A'
    else if( markah >= 65) return 'B'
    else if( markah >= 50) return 'C'
    else if( markah >= 40) return 'D'
    else if( markah >= 0) return 'F'
}

const markahPelajar = senaraiMarkah('Ali', 90)
let result
if ( markahPelajar >= 40 ) {
    result = 'Tahniah '
}
else {
    result = 'cuba lagi! '
}

console.log(result + '\n' + markahPelajar)



// Objek
// Tujuan: susun data structre and function ( method )
// Bila Digunakan: uruskan banyak data berkaitan seperti maklumat pengguna atau produk.

// Objek
const pelajar = {
    nama: 'Iskandar',
    hp: [11, 'XR'],
    kenalDiri: function(){
        console.log(`nama saya ${this.nama} dan hp saya ada ${this.hp}`)
    }
}

// function untuk kenalkan diri = paparkan

// Akses data dalam objek
console.log(pelajar.nama)
// Iskandar
pelajar.kenalDiri()
// Hai, saya Iskandar dan saya belajar JavaScript.


// 2 , 4, 7, 9 , 11
// function untuk total tambah arguments( built - in func)
function total(){
    // hasil harus ada nilai awal sebelum terima nilai jika tidak NaN / undefined
    let hasil = ''

    for( let i = 0; i < arguments.length; i++ ){
        hasil += arguments[i]
    }
    return hasil
}
console.log('semua total dari arg = ' + total('is', 'kan', 'dar'))
// paparkan


