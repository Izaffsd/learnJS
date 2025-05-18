// let a = 3;
// let b = 5;

// console.log(a <= b); // true
// console.log(a <= 3); // true
// console.log(b <= 3); // false


// let a = 5;
// let b = 3;

// console.log(a >= b); // true
// console.log(a >= 5); // true
// console.log(b >= 5); // false



var x = 10;
console.log("Hello World var" + " " +x)

prompt("nama kau" + x);
alert("hai");
alert("hai2");
alert("hai3");

var nama = prompt("nama anda");
alert("hello" + nama);
var tesc = true;
var tescf = false;

if(tesc === true){
    alert("youre yes");
}else {
    alert("youre no"); 
}

while ((tesc === true) && (tescf === false)) {

    var nama = prompt("masukkan nama");
    alert("yakinnn?" + nama);
    tesc = confirm("yakin?");
    tescf = confirm("yakinx?");
}
while ((tesc === true) && (tescf === false)) {
    tesc = confirm("yakin?");
}
while (true) {  
    //  This makes the loop infinite

    var nama = prompt("masukkan nama"); 
    alert("yakinnn?" + nama);
    tesc = confirm("yakin?");
    tescf = confirm("yakinx?");
    
    // Keep looping as long as either tesc is false (Cancel) or tescf is true (Yes)
    if (!(tesc === false || tescf === true)) {
        break; 
        //  Exit the loop if both tesc and tescf are false
    }
}

var star = '';

for (var i = 0; i < 6; i++){
    
                   // < salah sebab j = 0 dan i = 0  so blok yang 0 < 0 sahaja tidak dijalankan jadi
                                                                                    //     kosong
    for (var j = 0; j <= i; j++){                                                  // *
        star += "*";                                                               // **    sampai 5 column
        // star += '\n'; // 1

        // star += '\n'; // 2
        
    }
    star += '\n';
    // star += ' ';

    // console.log(star); // 1
    // *

    // *
    // *  sampai 4 row
    // star += "*";
}
console.log(star);
// * = 4 column

// console.log(star); // 2
// * = 4 row