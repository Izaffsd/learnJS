var nombor1 = 1
var nombor2 = 0
var nomborLast = 5

while (nombor1 <= nomborLast) {
    nombor2 += nombor1
    nombor1++
}
console.log(`nilai nombor1: ${nombor1} no.2 ${nombor2} no.3 ${nomborLast}`)

let i = 1;            // Nilai permulaan
let jumlah = 0;       // Jumlah keseluruhan
let nomborAkhir = 5;  // Tetapkan nombor akhir (contoh)

while (i <= nomborAkhir) {
    jumlah += i;  // Tambahkan nilai i kepada jumlah
    i++;          // Naikkan nilai i sebanyak 1
}

console.log(`Jumlah keseluruhan dari 1 hingga ${nomborAkhir} adalah ${jumlah}`);



// NO AKHIR = 5
// NO AWAL 1
// TOTAL SEMUA

let number = 1
let total = 4
let hasilLoop = 0

while ( number <= total ){
    hasilLoop += number
    number++
}

console.log(number + 'x')