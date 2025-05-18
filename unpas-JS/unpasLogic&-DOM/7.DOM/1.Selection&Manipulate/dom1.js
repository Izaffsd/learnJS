// HTMLCollection = hanya element p, div
//Node List = semua termasuk comment , content


// DOM Selectiion
// document.getElementById() -> kembalikan element id
// getElementById  -> hanya satu id yang boleh jika ada dua judul id tak boleh
// kalau ada id boleh pakai
const judulh1 = document.getElementById("judul");

judulh1.style.color = 'red'; // inline css

              // back-color ->  - jadi tolak
judulh1.style.backgroundColor = '#ccc'; // inline css

judulh1.innerHTML = "iskandar affi";

// ById and tagname pling cepat

// document.getElementsByTagName()
// -> HTMLCollections
const p = document.getElementsByTagName("p");
// = jadi no index / array 
// p.style.backgroundColor = 'yellow';

// p[0].style.backgroundColor = 'yellow';
// p[1].style.backgroundColor = 'yellow';
// p[2].style.backgroundColor = 'yellow';
// p[3].style.backgroundColor = 'yellow';

// length = 4
for ( let i = 0; i < p.length; i++ ) { 
    p[i].style.backgroundColor = "yellow";

}

 
const h1 = document.getElementsByTagName("h1")[0];

h1.style.fontSize = '70px'; // inline css


// document.getElementsByClassName()
// -> HTMLCollections , inline css (Elements = array)
const p1 = document.getElementsByTagName('p')[3];

p1.style.color = 'red';

/* Kelas (class) Boleh Dikongsi Oleh Banyak Elemen

ID dalam HTML mesti unik untuk setiap elemen, tapi class boleh dikongsi oleh banyak elemen.
Contoh:
<div class="highlight">Pertama</div>
<p class="highlight">Kedua</p>
<span class="highlight">Ketiga</span>

Di sini, ada tiga elemen yang gunakan class highlight.
Bila guna getElementsByClassName("highlight"), ia perlu kembalikan semua elemen
yang pakai class itu, jadi hasilnya adalah satu koleksi (HTMLCollection),
bukan satu elemen tunggal. */

const span1 = document.getElementsByTagName('span')[1]; // [0] = test

span1.style.fontSize = '50px';




// tidak ubah struktur HTML seperti menambah id dan class better query
// document.querySelector() -> element
const li2 = document.querySelector('#b ul li:nth-child(2)');

li2.style.backgroundColor = 'green';



// document.querySelectorAll() -> element

const pAll = document.querySelectorAll('p');

for ( let i = 0; i < pAll.length; i++ ){
    
    pAll[i].style.color = 'white';
    
}



// const sectionb = document.getElementById('b');
// const p4 = sectionb.querySelector('p');

// p4.style.backgroundColor = 'black';


const sectionb = document.querySelector('section#b');
const p4 = sectionb.getElementsByTagName('p')[0];

p4.style.backgroundColor = 'black';


