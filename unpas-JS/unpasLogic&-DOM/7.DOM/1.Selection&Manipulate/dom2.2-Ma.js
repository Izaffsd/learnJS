 // Dom Node Manipulation
 // buat element Baru

const pBaru = document.createElement('p');
// isi value p
const teksBaru = document.createTextNode('Paragraf Baru');
// masukkan / isi / simpannya
pBaru.appendChild(teksBaru);

const sectionA = document.getElementById('a');

// masukkan / isi / simpannya
sectionA.appendChild(pBaru);

// tambah list baru kat tengah
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

// selalu panggil tempatnya dulu 
liBaru.appendChild(teksLiBaru);


const ul = document.querySelector('section#b ul');

const li2 = ul.querySelector('li:nth-child(2)');

// selalu panggil tempatnya lalu isi parameter = first listBaru tu masuk before li2
ul.insertBefore(liBaru, li2);



// 1. tahu parentnya mcm section a , 2. element yang akn remove  
// (remove link)
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// tukar element p jadi h2
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector('p');


const h2 = document.createElement('h2');
const teksH2 = document.createTextNode('Teks Baru h2');

h2.appendChild(teksH2);

sectionB.replaceChild(h2, p4);

// element
h2.style.backgroundColor = 'purple';

// semua yang ada dalam parentNode  
sectionA.style.color = "lightblue";

liBaru.style.color = "blue";
