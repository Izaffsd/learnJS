// Math.random(); // Math ialah objek, dan random() ialah method

// Kurungan () diperlukan kerana ia adalah fungsi yang dipanggil.


// Method: Fungsi dalam objek yang memerlukan kurungan. exp : .floor
// Bergantung pada objek yang memanggilnya , Contoh: person.greet()

// Property: Ciri data dalam objek yang tidak memerlukan kurungan. exp: .PI


// let comp = Math.round(Math.random() * 10 );
// 0 smpai 9

// pilihan komputer
function getValueComp(){
    const comp = Math.random();
    if( comp < 0.33 ) return 'ant';
    if ( comp >= 0.33 && comp < 0.66 ) return 'eleph';
    return 'people';
}


// aturan permainan -> menang atau kalah
// diisi 2 yang join permainan di parameter
function getHasil(comp, player){
   // var hasil = '';  = return langsung hasil


    if ( player == comp ) return 'Seri';

    if ( player == 'eleph' ) return ( comp == 'people' ) ? 'Menang' : 'Kalah';

    if ( player == 'ant' ) return ( comp == 'eleph' ) ? 'Menang' : 'Kalah';

    if ( player == 'people' ) return ( comp == 'ant') ? 'Menang' : 'Kalah';

    // if ( player == 'ant' ) return ( comp == 'people' ) ? 'Kalah' : 'Menang';

    // else {
    //     hasil = 'memasukkan pilihan yang salah';
    // } just need nilai hasilnya je
}

// const pilhanImg = document.querySelector('.eleph') = harus ada titik


function pusing(){
    const imageComp = document.querySelector('.img-komputer');
    const picture = ['eleph', 'ant', 'people']
    let i = 0
    const waktuStart = new Date().getTime()
    // satu method untuk berulang selama Interval waktu tertentu
    setInterval(function(){
        // new Date() = pada saat awal, getTime() = saat pengulangannya
        // setiap pengulanggannya kan + 0.2 saat ( tambah terus ) jadi bila dh lebih 1.5 saat berhenti
        if ( new Date().getTime() - waktuStart > 1500) {
            clearInterval();
            return
        }
        imageComp.setAttribute('src', 'img/' + picture[i++] + '.png')
        if ( i == picture.length ) i = 0
        
    }, 200)
    // setiap 0.2 saat ganti2 gambarnya

}


const pilhanImg = document.querySelectorAll('li img') 
// = nodelist

pilhanImg.forEach(function(pil){
    // method persatu -> membuat parameter lalu arguemennya bila di click
    pil.addEventListener('click', function(){
        // console.log(pil)
        const pilCom = getValueComp();
        const pilPlayer = pil.className;
        const hasil = getHasil(pilCom, pilPlayer)

        // console.log('Pilihan Computer : ' + pilCom)
        // console.log('Pilihan Player : ' + pilPlayer)
        // console.log('hasilnya : ' + hasil)


        pusing();

        // jalankan ni bila dah setel pusing atau berulang iaitu selama 1.5 saat
        setTimeout(function(){
            const imgCom = document.querySelector('.img-komputer');
            imgCom.setAttribute('src', 'img/' + pilCom + '.png' )

            const info = document.querySelector('.info');
            info.innerHTML = hasil 
            }, 1500
        )

        // untuk img komputer based on pilCom ( getValueComp() )
        // const imgCom = document.querySelector('.img-komputer');
        // imgCom.setAttribute('src', 'img/' + pilCom + '.png' )

        // const info = document.querySelector('.info');
        // info.innerHTML = hasil 
        // textContent sama
    })
})




// const pGajah = document.querySelector('.eleph')
// pGajah.addEventListener('click', function(){
//     const pilCom = getValueComp();
//     const pilPlayer = pGajah.className;
//     const hasil = getHasil(pilCom, pilPlayer)

//     console.log('Pilihan Computer : ' + pilCom)
//     console.log('Pilihan Player : ' + pilPlayer)
//     console.log('hasilnya : ' + hasil)

//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', 'img/' + pilCom + '.png' )

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil

// });

// const pOrang = document.querySelector('.people')
// pOrang.addEventListener('click', function(){
//     const pilCom = getValueComp();
//     const pilPlayer = pOrang.className;
//     const hasil = getHasil(pilCom, pilPlayer)

//     console.log('Pilihan Computer : ' + pilCom)
//     console.log('Pilihan Player : ' + pilPlayer)
//     console.log('hasilnya : ' + hasil)

//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', 'img/' + pilCom + '.png' )

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil

// });


// const pSemut = document.querySelector('.ant')
// pSemut.addEventListener('click', function(){
//     const pilCom = getValueComp();
//     const pilPlayer = pSemut.className;
//     const hasil = getHasil(pilCom, pilPlayer)

//     console.log('Pilihan Computer : ' + pilCom)
//     console.log('Pilihan Player : ' + pilPlayer)
//     console.log('hasilnya : ' + hasil)

//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', 'img/' + pilCom + '.png' )

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil

// });






// var b = parseInt(prompt());

// let n = parseInt(prompt('masukkan nombor'))
// if ( n == '1' ) alert(n = 5)