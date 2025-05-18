/* Kita ingin memeriksa nilai ('lightblue') dan jenis data (string).
Ini memastikan bahawa hanya apabila warna benar-benar 'lightblue' sebagai string, kondisi akan bernilai true.

Jika kita menggunakan ==, kadang-kadang ia boleh membawa kepada hasil yang tidak dijangka disebabkan oleh penukaran jenis data secara automatik.

Secara umum, === disyorkan dalam JavaScript kerana ia lebih tepat dan mengelakkan hasil yang tidak diingini akibat penukaran jenis data. */

// 1 == '1';   true
 // 1 === '1';  false 



/* Element Node: mewakili tag HTML, contohnya <div>.
 Text Node: mewakili teks di dalam elemen.
 Attribute Node: mewakili atribut elemen, seperti id atau class. */

const button = document.getElementById("tUbah");

// const body = document.getElementsByTagName('body')[0] // mengenmbalikan HTML Collection jadi isi array

// button.addEventListener("click", function() {
//     body.style.backgroundColor = "blue";
// })

// document.head – Mengakses elemen <head> halaman.
// document.documentElement – Mengakses elemen akar, iaitu <html>.

let div = document.getElementsByTagName('div');



const b = document.getElementById("b");

// Buat tombol baru secara global
const butRandom = document.createElement('button');
const butTeks = document.createTextNode('Klik untuk warna random');
butRandom.appendChild(butTeks);

tUbah.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    
    // document.body.setAttribute("class", "biru-muda");

    // document.getElementsByTagName('section')[0].style.backgroundColor = 'lightblue'

    // document.querySelector('section').style.backgroundColor = 'lightblue';

    // for (let i = 0; i < sections.length; i++) {
    //     sections[i].style.backgroundColor = 'lightblue';
    // }

    // let i = 0;
    // while (i < div.length) {
    //     div[i].style.backgroundColor = 'lightblue';
    //     i++;
    // }

    document.body.classList.toggle('biru-muda')

    butRandom.classList.toggle('butRandomC')
// buat jadikan bila klik tUbah jadi butRandom hilang
    b.appendChild(butRandom);

}

butRandom.addEventListener('mouseleave', function() {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const bC = Math.floor(Math.random() * 255 + 1);
    console.log('R ' + r);
    console.log('G ' + g);
    console.log('B ' + bC);

    // b.style.backgroundColor = 'rgba('+ r +',' + g + ', '+ bC +')'; 
    b.style.backgroundColor =  `rgb(${r}, ${g}, ${bC})`;
});

butRandom.addEventListener('mouseenter', function () {
    const randomColor = generateRandomColor();
    butRandom.style.backgroundColor = randomColor;
});

// Fungsi untuk menghasilkan warna acak
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
                // bilangan bulat -> sebagai indeks untuk mengakses karakter dalam letters 
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  
// tUbah.onclick = function() {
//     if (document.body.style.backgroundColor == 'lightblue') {
//         document.body.style.backgroundColor = 'white'; // Tukar ke warna asal (putih)
//     } else {
//         document.body.style.backgroundColor = 'lightblue'; // Tukar ke biru muda
//     }
// }
// tUbah.onclick = ubah;
 


let no1 = 1;
let no2 = 2;
let sum4 = 4;
let sumOp = '+';
let sum = [];

function sumfunc(){
    for (let i = 0; i < 3; i++) {
        // sum = 4 + (1 + 2);
        // sum = 7;
        // sum = 7 + (1 + 2);
        // sum = 10;
        // sum = 10 + (1 + 2);
        // sum = 13;

        // if sum = '+'
        //operasi += lakukan (menggabungkan string) dengan hasil
        // sum = sum + (no1 + no2);
        // sum = '+33' + '3'; // Konkatenasi string
        // sum = '+333';
        sumOp += no1 + no2;

        // sum = [3, 3, 3]
    
        sum.push(no1 + no2); // Tambahkan hasil penjumlahan ke array

    }
    // // gabungkan string dengan array menggunakan +, array dikonversi menjadi string:
    // [3, 3, 3] menjadi '3,3,3'
    return sumOp + sum;
}
console.log(sumfunc());

const h3 = document.getElementsByTagName("h3")[0];

h3.addEventListener('mouseenter', function(){
    const ranColor = genColor();
    h3.style.color = ranColor;
});

function genColor(){
    const letterss = '0123456789ABCDEF';
    let clor  = '#';
    for( let i = 0; i < 6; i++ ){
        clor += letterss[Math.floor(Math.random() * 16)];
    }
    return clor;
}


const butRanColor = document.createElement('button');
const textRanColor = document.createTextNode('RANGE DI BWH UNTUK RANDOM COLOR');
butRanColor.appendChild(textRanColor);
butRanColor.setAttribute('type', 'button');



h3.after(butRanColor);

butRanColor.addEventListener('mouseenter', function(){
    butRanColor.style.cursor = 'pointer';

    // document.body.style.backgroundColor = "cyan";
});

const sliderColor = document.querySelectorAll('input[type=range]')[0]
const sliderColor1 = document.querySelectorAll('input[type=range]')[1]
const sliderColor2 = document.querySelectorAll('input[type=range]')[2]

// const sliderColor = document.querySelector('input[name=sMerah]')

const sliderValue = document.getElementById('sliderValue');
const sliderValueG = document.getElementById('sliderValueG');
const sliderValueB = document.getElementById('sliderValueB');



sliderColor.addEventListener('input', function(){
    const rr = sliderColor.value
    const gg = sliderColor1.value
    const bb = sliderColor2.value

    sliderValue.textContent = rr;
    sliderValueG.textContent = gg;
    sliderValueB.textContent = bb;

    butRanColor.style.backgroundColor = `rgb(${rr}, ${gg}, ${bb})`
    console.log('ni r' + rr)

});

sliderColor1.addEventListener('input', function(){
    const rr = sliderColor.value
    const gg = sliderColor1.value
    const bb = sliderColor2.value

    sliderValue.textContent = rr;
    sliderValueG.textContent = gg;
    sliderValueB.textContent = bb;

    butRanColor.style.backgroundColor = `rgb(${rr}, ${gg}, ${bb})`
    console.log('ni g' + gg)

});

sliderColor2.addEventListener('input', function(){
    const rr = sliderColor.value
    const gg = sliderColor1.value
    const bb = sliderColor2.value

    sliderValue.textContent = rr;
    sliderValueG.textContent = gg;
    sliderValueB.textContent = bb;

    butRanColor.style.backgroundColor = `rgb(${rr}, ${gg}, ${bb})`
    console.log('ni b' + bb)

});



// Contoh: Jika kursor berada 300px dari tepi kiri, event.clientX = 300.
// Contoh: Jika lebar tetingkap adalah 1920px, window.innerWidth = 1920.

// event.clientX / window.innerWidth = 300 / 1920 = 0.15625 × 255 = 39.84375 = 40


// body tapi content nya limit jadi yang kosong tak dianggap body atau luar -> = set pakai css
document.body.addEventListener('mousemove', function(event){
    //1 . position mouse x dan y -> nak tahu posisi x bila dgerakkn = event.clientX
    // console.log(event.clientY)
    // method clientX untuk position X / koordinat objek yang harus dikirim ke function = event
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)

    // ukuran browser  ( semua mcm tombol min, close ) = window.innerWidth
    //  console.log(window.innerWidth)

    // posisi y = no.genap ( ( cari tahu posisi cursor . terhadap sumbu Y dibahagi dengan browsernya ) )
    const yPos = Math.round((event.clientY / window.innerHeight) * 255)


    document.body.style.backgroundColor =  `rgb(${xPos}, ${yPos}, 100)`

})


