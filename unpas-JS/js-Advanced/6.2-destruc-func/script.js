function total(a, b){
    return [a + b, a * b]
}

// console.log( total(4, 5)[0] )
// console.log( total(4, 5)[1] )

const [jum, kali] = total(4, 5)

console.log(jum)

const pel = {
    nama: 'is',
    umur: 19,
    email: 'is@gmail.com',
    tugas: {
        halo: 'hi awak'
    }
}

// 1.
// function cetak(nama, email ){
//     return `jalo ${nama} jdfklaj ${email}`
// }

// console.log(cetak(pel.nama, pel.email))


// 2.
// function cetak(pel ){
//     return `jalo ${pel.nama} df ${pel.email}`
// }

// console.log(cetak( pel ))

// 3.
                // nama, email, { tugas: halo } other selain bawah
function cetak( { nama, email, tugas } ){
    return `jalo ${nama} df ${email}, greet ${tugas.halo}`
}

console.log(cetak( pel ))