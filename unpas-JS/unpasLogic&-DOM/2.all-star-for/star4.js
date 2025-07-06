// var pattern = '';
// var rowscols = 6;


//     for (let i = 1; i <= rowscols; i++) {
//         console.log('*'.repeat(i));
//     }
//     for (let i = rowscols - 1; i >= 1; i--) {
//         console.log('*'.repeat(i));
//     }


// console.log(pattern);



// var star = '';

// // First half (increasing part)
// for (var i = 0; i < 6; i++) {
//     for (var j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star += '\n';
//     // star += ' ';
// }

// // Second half (decreasing part)
// for (var i = 5; i >= 0; i--) {
//     for (var j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star += '\n';
//     // star += ' ';
// }

// console.log(star);






// var star = '';

// // Bahagian pertama (bahagian menaik)
// for (var i = 0; i < 7; i++) {  // Tukar dari 6 ke 7 untuk menghasilkan 7 bintang pada baris terakhir
//     for (var j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star += '\n';
// }

// // Bahagian kedua (bahagian menurun)
// for (var i = 5; i >= 0; i--) {  // Bermula dari 6 bintang untuk menurun
//     for (var j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star += '\n';
// }

// console.log(star);

var star = '';

for ( var i = 0; i <= 7; i++ ) {


    for ( var w = 0; w <= i; w++ ) {
        star += '*';
    }

    // star += '*';
    // star += ' ';
    star += '\n';
}
for ( var i = 7; i > 0; i-- ) {
// Kalau tak nak baris kosong terakhir, tukar jadi: >

    for ( var w = 0; w < i; w++ ) {
        star += '*';
    }

    // star += '*';
    // star += ' ';
    star += '\n';
}
console.log(star);