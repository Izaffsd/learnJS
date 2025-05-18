// const nombor = [4, 6, -3, 9, 4, -6, 8, 3, 2, -9]
// // 10 index = 9

// // mencari nombor >= 3
// // simpan nombor baru tu dalam variable

// const newNom = []
// for ( i = 0; i < nombor.length; i++ ){
//     if ( nombor[i] >= 3 ){
//         newNom.push(nombor[i])
//     }
// }

// console.table(newNom.sort())

// // filter    -   > function callback
// // a = stiap elemen array nombor
// // so return a yg >= 3
// const newNombor = nombor.filter( a => a >= 3 )
// console.table(newNombor.sort())

// // map
// // darab semua dgn 2
// const newNomMap = nombor.map( (a) => a * 2 )
// console.log(nombor)
// console.table(newNomMap)


// // reduce ADA 2 arg
// // total semua element array
// // accumulator = pengumpul yg ditotalkan
// // curV = lagi looping di elemen yg mne

// // ( , 2 ) +  4 + 6 + -3 + 9 + 4 + -6 + 8 + 3 + 2 + -9 = 18
//     // Langkah	accumulator	currentValue	Hasil (accumulator + currentValue)
//     // 1	4	6	4 + 6 = 10
//     // 2	10	-3	10 + (-3) = 7
// const newNOM = nombor.reduce( (accumulator, currentValue) => 
//     accumulator + currentValue , 2 // ada nilai awal = default = 0
// )
// console.log(newNOM)

// // method chaining ( berantai )
// // cari nombor > 5 -> * 3 = total
// const nomTotal = nombor.filter( a => a > 5 ) // 6, 8 , 9
//     .map( a => a * 3 ) // 18 , 24 , 27
//     .map( a => a / 2) // 9, 12 , 13.5
//     .reduce( ( accm, currV ) => accm + currV ) // 69 - ( tmbh map bahagi = 34.5) 

// console.log(nomTotal)


// 1 ambil semua elemen video
// ambil dari li
const videos = Array.from( document.querySelectorAll('[data-duration]') ) // - > 12 nodelist tukar jadi array baru boleh higher order func


// 2. pilih hanya yang ` JAVASCRIPT LANJUTAN `
let jsLanjut = videos.filter( ( video ) => {
     return video.textContent.includes('JAVASCRIPT LANJUTAN')
     } )

// 3. ambil durasi masing2 video  
// data set 
// chaining
        .map( item => item.dataset.duration )

// 4. ubah duration jadi float, ubah minit jadi saat = ( 15:27 ) -> minit 15 minit * 60 lpstu + 27

        .map( time => {
            // split [11, 18] tpi msih string so tukr float

            const pecahan = time.split(':')

                .map( partP => parseFloat(partP) )

            return pecahan[0] * 60 + pecahan[1]
        })

// 5. total semua saat 
        .reduce( ( aTotal, cVTime ) => aTotal + cVTime)

// 6. ubah formatnya jadi jam minit saat
const jam = Math.round(jsLanjut / 3600)
jsLanjut = jsLanjut - jam * 3600

console.log(jam + ' jam ')


const minit = Math.floor(jsLanjut / 60 )
console.log(minit + " minit")

const saat = jsLanjut - minit * 60
console.log(saat + ' saat')

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam ${minit} Minit ${saat} Saat`


const pTotalVideo = document.querySelector('.jumlah-video')
const totalVideo = videos.filter( ( video ) => {    
        return video.textContent.includes('JAVASCRIPT LANJUTAN')
    } ).length

    pTotalVideo.textContent = `${totalVideo} Video`
console.log(totalVideo)
// console.log(videos)

console.log(jsLanjut)
