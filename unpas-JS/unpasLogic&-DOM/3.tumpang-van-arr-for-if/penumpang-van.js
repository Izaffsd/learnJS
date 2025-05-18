
// var penumpang = [];

//  func expression = 2 parameter - nama dan array penumpang 

// // nama penumpang akan masuk dalam array penumpang var penumpan tu dah array masukkan ke para ke 2
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//                         // para pertama - nama (penumpang) = nama masuk para  ke 2 ( penumpang )

// // jika van ksong // parameter + function = . penumpang.pop
//     if ( penumpang.length == 0 ) {

//          // tambah penumpang di awal array
//                     // masukkan ke dalam van nama penumpang = (syaratnya) / parameter
//         penumpang.push(namaPenumpang);
// // nama push / masukkan ke dalam array (penumpang)
//          // kembalikan isi array & keluar dari function
//         return penumpang;
//     } 
//     else {
//     // else
//         // telesuri seluruh kursi dari awal
//         for (var i = 0; i < penumpang.length; i++ ) {

//             // jika ada kerusi kosong 
//                         // [i](0) no index array = no kerusi
//              if ( penumpang[i] == undefined ) {

//                 // tambah penumpang di kerusi tersebut / penupang yang naik duduk dekat kerusi kosong 
//                 penumpang[i] = namaPenumpang;

//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//              }
            
//             // jika sudah ada nama yang sama // nama penupang input yang diberikan
//             else if ( penumpang[i] == namaPenumpang ) {
//                 // tampilkan pesan kesalahannya
//                 console.log(namaPenumpang + ' sudah ada di angkat');
            
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//             // jika seluruh kursi terisi 
//             else if ( i == penumpang.length - 1 ) {

//                 // tambah penumpang di akhir array
//                 penumpang.push(namaPenumpang);
            
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//                 // tambah penumpang di akhir array
//                 // kembalikan isi array & keluar dari function

//         }
//     }
// }

// var hapusPenumpang = function(namaPenumpang, penumpang) {

//     // jika angkot kosong
//         if ( penumpang.length == 0 ) {
        
//         // tampilkan pesan bahawa angkot kosong, dan tidak mungkin ada penumpang turun
//         console.log('angkot masih kosong');

//         // kembalikan isi array dan keluar dari function
//         // return penumpang;

//         }
//     // else 
//     else {
//         // terlusuri seluruh kerusi dari awal
//         for ( var i = 0; i < penumpang.length; i++ ){

//             // jika nama penumpang sesuai / nak turun
//             if ( penumpang[i] == namaPenumpang ) {

//                 // hapus penumpang dengan mengubah namanya, menjadi undifined
//                 // di kerusi set undifined / ganti nama jadi undifined
//                 penumpang[i] = undefined;

//                 // kembalikan isi array dan keluar dari function
//                 return penumpang;

//             } 
//             // jika tidak ada nama yang sesuai 
//             else if ( i == penumpang.length - 1 ){

//                 console.log(namaPenumpang + ' sudah ada dalam angkot');
//                 // tampilkan pesan kesalahannya

//                 return penumpang;
//                 // kembalikan isi array dan kelaur dari function
//             }
//         }
//     }
//     return penumpang;

// }

// after to malay

var penumpang = [];

// Fungsi untuk menambah penumpang, dengan dua parameter - namaPenumpang dan array penumpang
var tambahPenumpang = function(namaPenumpang, penumpang) {

    // Jika van kosong
    if (penumpang.length == 0) {

        // Tambah penumpang di awal array
        penumpang.push(namaPenumpang);

        // Kembalikan isi array dan keluar dari fungsi
        return penumpang;
    } 
    else {

        // Semak semua tempat duduk dari awal
        for (var i = 0; i < penumpang.length; i++) {

            // Jika ada tempat duduk kosong
            if (penumpang[i] == undefined) {

                // Tambah penumpang di tempat duduk tersebut
                penumpang[i] = namaPenumpang;

                // Kembalikan isi array dan keluar dari fungsi
                return penumpang;
            }
            
            // Jika sudah ada penumpang dengan nama yang sama
            else if (penumpang[i] == namaPenumpang) {

                // Paparkan mesej ralat
                console.log(namaPenumpang + ' sudah ada dalam van');
            
                // Kembalikan isi array dan keluar dari fungsi
                return penumpang;
            }

            // Jika semua tempat duduk penuh
            else if (i == penumpang.length - 1) {

                // Tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
            
                // Kembalikan isi array dan keluar dari fungsi
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {

    // Jika van kosong
    if (penumpang.length == 0) {

        // Paparkan mesej bahawa van kosong, dan tiada penumpang yang boleh turun
        console.log('Van masih kosong');

        // Kembalikan isi array dan keluar dari fungsi
        return penumpang;
    } 
    else {

        // Semak semua tempat duduk dari awal
        for (var i = 0; i < penumpang.length; i++) {

            // Jika nama penumpang dijumpai (penumpang ingin turun)
            if (penumpang[i] == namaPenumpang) {

                // Hapus penumpang dengan menukar namanya menjadi undefined
                penumpang[i] = undefined;

                // Kembalikan isi array dan keluar dari fungsi
                return penumpang;
            } 
            // Jika nama penumpang tidak dijumpai
            else if (i == penumpang.length - 1) {

                // Paparkan mesej ralat
                console.log(namaPenumpang + ' tiada dalam van');

                // Kembalikan isi array dan keluar dari fungsi
                
            }
        }
    }
    return penumpang;
}
