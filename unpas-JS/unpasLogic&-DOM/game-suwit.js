var tanya = true;

while ( tanya ) {
    var player = prompt("masukkan pilihan anda | gunting, kertas & batu");
// amik input or pilihan player



    // amik pilhan computer

    var comp = Math.random();
    console.log(comp);

        if( comp < 0.34 ){

            comp = 'kertas';

        }
        else if ( comp >= 0.34 && comp < 0.68){

                comp = 'gunting'
        }
        else {

                comp = 'batu';

        }

        var hasil = '';
        if ( player == comp ){

            hasil = 'Seri';

        } else if ( player == 'kertas' ){
            // if( comp == 'gunting' ){
            //     hasil = 'Kalah';
            // }
            // else {
            //     hasil = 'Menang';
            // }
            hasil = ( comp == 'gunting' ) ? 'Kalah' : 'Menang';

        } else if ( player == 'batu'){

            hasil = ( comp == 'gunting' ) ? 'Menang' : 'Kalah';
        }
        else if (player == 'gunting'){

            hasil = ( comp == 'batu' ) ? 'Kalah' : 'Menang';

        }else {
            hasil = 'memasukkan pilihan yang salah';
        }



    // membangkitkan bilangan random


    alert('anda memilih ' + player + ' dan komputer memilih ' + comp + '\nMaka hasilnya : Anda ' + hasil);


    tanya = confirm('lagi ?');
}
    // menentukan rules
alert('arigato sudah bermain');

    // tampilkan hasilnya



// // Menjana nombor rawak antara 1 dan 10
// var correctNumber = Math.floor(Math.random() * 10) + 1;

// // Tetapkan bilangan percubaan yang dibenarkan
// var percubaan = 3;

// // Mulakan gelung permainan
// while (percubaan > 0) {
//     // Minta pengguna meneka nombor
//     var tekaanPengguna = prompt("Teka nombor antara 1 hingga 10 (Anda ada " + percubaan + " peluang lagi):");

//     // Tukarkan tekaan pengguna kepada nombor
//     tekaanPengguna = Number(tekaanPengguna);

//     // Semak jika tekaan itu betul
//     if (tekaanPengguna === correctNumber) {
//         alert("Tahniah! Anda telah meneka nombor yang betul: " + correctNumber);
//         break;  // Tamatkan gelung
//     } else if (tekaanPengguna > correctNumber) {
//         alert("Terlalu tinggi! Cuba lagi.");
//     } else if (tekaanPengguna < correctNumber) {
//         alert("Terlalu rendah! Cuba lagi.");
//     } else {
//         alert('input anda salah');
//     }

//     // Kurangkan bilangan percubaan yang tinggal
//     percubaan--;

//     // Semak jika tiada lagi percubaan yang tinggal
//     if (percubaan === 0) {
//         alert("Maaf, anda telah kehabisan percubaan. Nombor yang betul ialah " + correctNumber);
//     }
//     else if (){
//         alert("ll");
//     }
// }

// // Menjana nombor rawak antara 1 dan 10
// var correctNumber = Math.floor(Math.random() * 10) + 1;

// // Tetapkan bilangan percubaan yang dibenarkan
// var percubaan = 3;

// // Mulakan gelung permainan
// while (percubaan > 0) {
//     // Minta pengguna meneka nombor
//     var tekaanPengguna = prompt("Teka nombor antara 1 hingga 10 (Anda ada " + percubaan + " peluang lagi):");

//     // Semak jika pengguna menekan "Cancel"
//     if (tekaanPengguna === null) {
//         alert("Permainan dibatalkan.");
//         break;  // Keluar dari gelung
//     }

//     // Semak jika input kosong atau bukan nombor
//     if (isNaN(tekaanPengguna) || tekaanPengguna.trim() === '') {
//         alert("Sila masukkan nombor yang sah.");
//         continue;  // Teruskan ke iterasi seterusnya
//     }

//     // Tukarkan tekaan pengguna kepada nombor
//     tekaanPengguna = Number(tekaanPengguna);

//     // Semak jika tekaan itu betul
//     if (tekaanPengguna === correctNumber) {
//         alert("Tahniah! Anda telah meneka nombor yang betul: " + correctNumber);
//         break;  // Tamatkan gelung
//     } else if (tekaanPengguna > correctNumber) {
//         alert("Terlalu tinggi! Cuba lagi.");
//     } else if (tekaanPengguna < correctNumber) {
//         alert("Terlalu rendah! Cuba lagi.");
//     }

//     // Kurangkan bilangan percubaan yang tinggal
//     percubaan--;

//     // Semak jika tiada lagi percubaan yang tinggal
//     if (percubaan === 0) {
//         alert("Maaf, anda telah kehabisan percubaan. Nombor yang betul ialah " + correctNumber);
//     }
// }
