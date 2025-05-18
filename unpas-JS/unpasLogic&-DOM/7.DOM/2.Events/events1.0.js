// const li2 = document.querySelectorAll('li')[1];
// li2.style.backgroundColor = 'blue'

const p3 = document.querySelector('.p3');

function ubahWarna() {
    p2.style.backgroundColor = 'yellow'
}



// Element Method
const p2 = document.querySelector('.p2');
// p2 lpstu pakai titik sebab pakai Method dan diisi dgn function

p2.onclick = ubahWarna; // X - ubahWarna() = tak perlu buka kurungan sebab tu akan jalankan functionnya so bila diClick baru jalankan functionnya


// addEventListener
const p4 = document.querySelector('#b p');
p4.addEventListener('click', function () {
// always tangkap yang luarnya dulu 
    const ulB = document.querySelector('#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');

    liBaru.appendChild(teksLiBaru);
    ulB.appendChild(liBaru);

});

// const p5 = document.querySelector('#b .p5');
// const p5 = document.getElementsByTagName('p')[4];

// const sectB = document.getElementById("b");
// const p5 = sectB.querySelectorAll('p')[1];

const p5 = document.querySelectorAll('p')[4];


// const p5 = document.querySelector('.p5');

p5.style.color = 'purple';

p5.addEventListener('mouseleave', function(){
    p5.style.color = 'blue';
});
p5.addEventListener('mouseenter', function(){
    p5.innerHTML = '<h2>Paragraf 5 jadi h2</h2>';
});

p5.addEventListener('click', function(){
    p5.classList.toggle('p5');
});


