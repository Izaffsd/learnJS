const nombor = [4, 6, -3, 9, 4, -6, 8, 3, 2, -9] // 10 nombor


// nombor.forEach(function(elemen, index) {
//   console.log("Nilai:", elemen);
//   console.log("Index:", index);
// });

// const nombor = [1, 2, 3, 4, 5];
// nombor.splice(2, 4, 99, 88, 77, 66); // mula di index 2, buang 1, tambah 99
// console.log(nombor); // [1, 2, 99, 4, 5]


// const sebahagian = nombor.slice(1, 4); // ambil index 1 hingga 3
// console.log(sebahagian); // [2, 99, 4]
// console.log(nombor);     // [1, 2, 99, 4, 5] (asal tak berubah)



function bagiSalam(nama) {
  console.log(`Hai, ${nama}!`);
}

function proses(func) {
  const lol = "Iskandar";
  func(lol); // ✅ callback function dipanggil
}

proses(bagiSalam); // Output: Hai, Iskandar!





// filter cari nombor 
for (let i = 0; i < nombor.length; i++){
    if( nombor[i] > 3){
        // console.log(nombor[i])
    }
}

// other method = push ( new array )
const newNo = []
for (let i = 0; i < nombor.length; i++){
    if(nombor[i] >= 3){
        newNo.push(nombor[i])
// console.log(newNo)

    }
}
// nilai baru akan ditolak (push) ke newNo
// Dan console.log akan keluar SELEPAS tolak tu
// Jadi akan nampak proses pertambahan satu-satu elemen


// .filter() hanya simpan elemen jika callback return true
// tapi kau return string ("${a} : ${i}"), bukan boolean.

// filter()	    Menapis elemen	    true / false	    ✅ Ya, hanya elemen true

const newNum = nombor.filter( function( a, i ){
    return `${i} ${a}`
})
console.log(newNum)


const newNumber = nombor.filter( function(a) {
    return a >= 3
})
console.log(newNumber)
// filter() akan loop dalam array tu.


const newN = nombor.filter( a => a >= 3)
console.log(newN + ' kajdkl')




// Map = Ubah elemen	Nilai baru setiap ( each ) elemen
const newNd = nombor.map( a => a * 2)

console.log(newNd)



// reduce jumlahkan seluruh elemen pada number 
// kalau tak tulis nilai awal = ,0 
// const newNomb = nombor.reduce( (accumulator, currentValue) =>
// accumulator + currentValue, 1)
// console.log(newNomb)

// method chaining 
// cari nombor > 5
// darabkan 3
// jumlahkan

const newVal = nombor
.filter( x => x > 5)
    .map( x => x * 3)
        .reduce( (acc, currV) => acc + currV, 0)


console.log(newVal)
 