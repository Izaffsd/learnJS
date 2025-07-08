// EMEBEDED EXPRESSION
console.log(`${ 1 + 1 }`)
console.log(`${alert('kjdfla halo')}`)

const x = 11
console.log(`${ ( x % 2  == 0 ) ? 'genap' : 'ganjl'}`)

// ctrl / , = setting
// 1. HTML Fragments

const iskandar = {
    nama: 'iskandar',
    umur: 20,
    makan : function(makanan){
        return `suka makan ${makanan}`
    }
}
const el = `<div class="is">
    <h2>${iskandar.nama}</h2>
    <h4>${iskandar.umur}</h4>
    <h4>${iskandar.makan('ayam')}</h4>
</div>`

console.log(el)


const is = document.querySelector('.iskandar')
is.innerHTML = el
is.style.backgroundColor = 'cyan'




// 2. looping
const student = [

    {
        nama: 'iskandar',
        favFood: function(food){
            return `${this.nama} suka makan ${food}`
        }
    }
    ,
    {
        nama: 'zul',
        favFood: function(food){
            return `${this.nama} suka makan ${food}`
        }
    }
    ,
    {
        nama: 'ald',
        favFood: function(food){
            return `${this.nama} suka makan ${food}`
        }
    }
    
]

// const ele = `<div class="student">
//     <h4>${student[1].nama}</h4>
//     <h4>${student[2].favFood('ayam')}</h4>
// </div>`
// is.innerHTML = ele



// std = elemen atau value obj tu


// const elem = student.map( std =>  `<div class="student">
//     <h4>${std.nama}</h4>
//     <h4>${std.favFood('ayam')}</h4>
// </div>`).join('br - each')
// is.innerHTML = elem



// 3. conditional
// ternary


const lagu = {
    judul: 'Pulang',
    penyanyi: 'Insomniacks',
    feat: 'Justin Bieber'
}


let songTitle = lagu.judul

// if (lagu.feat){
//     songTitle +=` (feat ${lagu.feat})`
// //    lagu.judul +=` (feat ${lagu.feat})`
// }



const elemnt = `<div class="lagu">
    <ul>
        <li>Penyanyi :${lagu.penyanyi}</li>
        <li>Lagu : ${songTitle} -> ${ ( lagu.feat ) ? `(feat ${lagu.feat})` : '' }</li> 
        <!-- <li>Lagu : ${lagu.judul}</li> -->

    </ul>
</div>`

// is.innerHTML = elemnt



// 4 nested
// HTML fragments

const ilp = {
    bengkel: ['tpp', 'cadd', 'tpm', 'tkr'],
    ketuaTpp: 'aldzukhruf',
    semester: 4
}

function course(bengkel){
    return `<ul>
        ${bengkel.map( a => `<li>${a}</li>`).join('')}
    </ul>`
}
    // ${ilp.bengkel.map( a => `<li>${a}</li>`).join('')}

const ilpkls = 
    `<h3>${ilp.ketuaTpp}</h3>
    <h5>${ilp.semester}</h5>
    ${course(ilp.bengkel)}
    `

is.innerHTML = ilpkls
