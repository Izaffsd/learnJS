// const judul = document.getElementById('judul');
// judul.innerHTML = '<li>Iskandar</li>'; // <em>

const sectionA = document.querySelector('section#a');
//     // semua hilang dan tukar ni
// sectionA.innerHTML = '<div><p> paragraph 1 (inner)</p></div>';

// const judul = document.querySelector('#judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'newjudul');

// const sectA = document.querySelector('section#a a'); 
// sectA.setAttribute('id', 'aclass');

// console -> 1. sectA.setAttribute('id', 'aclass')
            // 2. sectA.getAttribute('id') == 'aclass'
            // 3. sectA.removeAttribute('href') 
            

const p2 = document.querySelector('.p2');
// p2.setAttribute("class", "pclass2"); // class p2 hilang 

// tambah atau manipulate class
// p2.classList.add('label')
// p2.classList.remove('label')
// p2.classList.toggle('label') // jika blom ada = add , dah ada = remove 

// console p2.classList.item(2) == label ( class )

// console p2.classList.contains('label') == true
// console p2.classList.contains('tiada') == false

// console p2.classList.replace('label', 'label2') == tukar label ke label2


// console.log(p2.childNodes)
// console.log(p2.children)
console.log(p2.parentElement)