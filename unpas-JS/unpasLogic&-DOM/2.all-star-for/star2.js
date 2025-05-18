var star = '';

    // mengawal coloum sebb dah letak j <= i klau tak row 
for (var col = 6; col >= 0; col--){

            // <= jadi * = 7 colom          
    for (var j = 0; j <= col; j++){                                                  
        star += "*";                                                               

    }
    star += '\n';
    // star += ' ';


}
console.log(star);


var star = ''; // Inisialisasi pembolehubah 'star' sebagai string kosong.

// Gelung luar mengawal bilangan baris
for (var col = 1; col <= 6; col++) { // Bermula dari 1 dan bertambah sehingga 6.

    // Gelung dalam mengawal bilangan bintang dalam setiap baris.
    for (var j = 0; j < col; j++) { // Bilangan bintang bergantung kepada nilai 'col'
        star += "*";  // Tambah satu bintang untuk setiap pusingan dalam gelung dalam.
    }

    // Tambahkan ruang kosong atau pecah baris selepas selesai mencetak semua bintang untuk baris itu.
    // star += ' '; 
    star += '\n';

}

console.log(star); // Paparkan corak bintang.

console.log('tes')
let bint = ''
// first bila excute ni je memg akan buat col ***** ( 5 )
for ( let coll = 4; coll >= 0; coll--){

    for ( let roww = 0; roww <= coll; roww++){
        bint += '*'

    }
    bint += '\n'
}
console.log(bint)