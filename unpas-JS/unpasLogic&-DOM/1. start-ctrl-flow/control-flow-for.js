// for (var nilaime = 1; nilaime <= 10; nilaime++){
//     console.log('hello world ' + nilaime + 'x');
// }

// var nilaivan = 1;
// var totalvan = 10;
// var nilaioperasi =  2;

// while ( nilaivan <= nilaioperasi ){
//     console.log('van no. '+ nilaivan + 'x beroperasi dengan baik');
//     nilaivan++;
// }

// for ( nilaivan = nilaioperasi + 1; nilaivan <= totalvan; nilaivan++ ){
//     console.log('van no. '+ nilaivan + 'x TIDAK beroperasi');

// }


var totalvan = 10;
var nilaioperasi =  6;
// var vancomeback = 10;

// && = tidak boleh menjadi 8, 10, dan 5 secara serentak ( MUSTAHIL )


for( var nilaivan = 1; nilaivan <= totalvan; nilaivan++ ) {
    
    if ( nilaivan <= nilaioperasi && nilaivan !== 5 ) {
        console.log('van no. '+ nilaivan + 'x beroperasi dengan baik');
    }
    else if( nilaivan === 8 || nilaivan === 10 || nilaivan === 5) {
                        //  && = salah - nilaivan tu ada 2 
        console.log('van no. '+ nilaivan + 'x KEMBALI');
    }
    // else if( nilaivan === 10 ){
    //     console.log('van no. '+ nilaivan + 'x KEMBALI');
    // }
    else {
        console.log('van no. '+ nilaivan + 'x TIDAK beroperasi');
    }
    
}