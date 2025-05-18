// for, while, do while

alert('Mula');
var required = prompt('masukkan text');
for (var i = 1; i < 4; i++){
    alert('anda masukkan ' + required);
}
alert('Tamat');


// if else & switch

var baki =  prompt('masukkan nilai');
if(baki % 2 === 0){
    alert('bilangan genap ' + baki);
}
else if(baki % 2 === 1) {
    alert('bilangan ganjil ' + baki);
}
else {
    alert('nilai tidak valid');
}

var ulang = true;
while(ulang){
    console.log('print kat console');
    console.log('helloa ni');
    ulang = confirm('nak stop ke ulang?');
}

var totalvan = 10;
var nilaivan = 1;
while (nilaivan <= totalvan) {
    console.log("van no. " + nilaivan + "x beroperasi dengan baik");
    nilaivan++;
    // nilaivan = nilaivan + 1;
}