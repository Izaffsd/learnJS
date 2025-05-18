// 1. Parent Node
// Elemen <div class="container"> ialah parent node kepada:
// <div class="card">.

// 2. Child Nodes
// Elemen <div class="card"> mempunyai anak node:
// <img>, <span class="nama">, <span class="telp">, dan <span class="close">.

// 3. Element vs. Node
// Semua elemen HTML (seperti <div>, <img>, dan <span>) ialah element nodes.
// Teks di dalam <span> (contohnya, "Sandhika Galih") ialah text nodes.

// const container = card.parentNode; // Mengembalikan <div class="container">
// // console.log(container);

// // const children = card.childNodes; // NodeList semua anak node (termasuk teks!)
// // console.log(children);

// const children = card.children; // HTMLCollection elemen anak sahaja
// // console.log(children); // Output: <img>, <span.nama>, <span.telp>, <span.close>


// console.log(card.firstChild);  // Node pertama (termasuk teks atau elemen)
// console.log(card.firstElementChild); // Elemen pertama (<img>)
// console.log(card.lastChild);   // Node terakhir (teks atau elemen)
// console.log(card.lastElementChild);  // Elemen terakhir (<span class="close">)


// const card = document.querySelectorAll('.card')[2]
const card = document.querySelector('.card')
const deleteBut = document.querySelectorAll('.close') 
// nodelist = array

// deleteBut.addEventListener('click', function(){
//     card.remove() // node manipulation
//     // hapuskan keseluruhan elemen <div class="card"> bersama dengan semua anak node di dalamnya,
//     // seperti elemen <img>, <span class="nama"></span>

//     // Pilih child node yang ingin dipadam, seperti span dengan class "nama"
//     // const childNode = card.querySelector('.nama');

//     // Padamkan child node (bukan keseluruhan card)
//     // card.removeChild(childNode);
// })

// for ( let c = 0; c <  deleteBut.length; c++){
//     deleteBut[c].addEventListener('click', function(e){
//         // alert('no ke' + [c + 1])
//         // console.log(event)
//         // deleteBut[c].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }


// looping setiap elem . tetap merujuk kepada objek even 
// ( edit as html kat inspect) tak boleh
// deleteBut.forEach(function(elem){
//     // console.log(elem)
//     // arg = a.close dan span.close and dalam dia dah takde element atau node lain
//     elem.addEventListener('click', function(eve){
//         // console.log(eve)
//         // srcElement: span.close ( dari arg a/span tu, eve = pakai event untuk akses to information more luas / khusus )

//         eve.target.parentElement.style.display = 'none'
//         eve.preventDefault()
//         eve.stopPropagation() // stop the event = bila close alert ok tak excute
//     })
// })

// // // elemen di dalam .card juga mempunyai event listener, event itu mungkin memicu kedua-duanya.

// // 
// const cards = document.querySelectorAll('.card')
// cards.forEach(function(cardd){
//     cardd.addEventListener('click', function(eve){
//        alert('ok')
//     })
// })

// const nama = document.querySelector('.nama')
// // console.log(nama.parentElement.parentElement)
// // console.log(nama.nextSibling) // node termasuk space
// // console.log(nama.nextElementSibling)
// console.log(nama.previousElementSibling.nextElementSibling) // nama


// event bubbling
// lebih efektif sbb tambah element baru di html bukan di script ( edit as html kat inspect) boleh
const container = document.querySelector('.container')

container.addEventListener('click', function(cont){
    console.log(cont.target)
    // arg cont = close jika close so kalau kelik img arg cont = img
    if( cont.target.className == 'close' ){
    // console.log(cont.target)
        let prom = prompt('tulis yes jika pasti untuk delete')
        if( prom == 'yes'){
            cont.target.parentElement.style.display = 'none'   
        }
        else{
            alert('tak jadi delete')
        }
        cont.preventDefault();
    }
})
