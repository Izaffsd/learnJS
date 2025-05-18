var a = 5;
var b = "5";

if (a === b){
    console.log('3 equal');
}

// input prompt pasti jadi string walapun angka tetap diaanggap string

// angka == 1 betul  sebab tak beza pakai === untuk jenis string dan number "1" betul sebb prompt = string jenis string
        //    parseInt
var angka = prompt('masukkan angka');

// minta input paparkan inputnya jika 2 keluar 2

if ( angka === "1" ){
    alert('ankga 1');
}
else if ( angka == 2 ){
    alert('angka 2');
}
else if ( angka === 3 ){
    alert('angka 3 tk jadi sbb ===');
}
else {
    alert('angka yang anda masukkan tidak valid');
}
// var cant  a == 1; 
var a=1;
var b=2;

if ( a === "1" ){
    console.log('he');
}
else {
    console.log('hello');
}

var baki =  prompt('masukkan nilai');
// minta input
// kira baki jika genap atau ganjil
// paparkan


if(baki % 2 === 0){
    alert( baki + ' bilangan genap');
}
else if(baki % 2 === 1) {
    alert( baki + ' bilangan ganjil');
}
else {
    alert('bukan angka tuuu');
}