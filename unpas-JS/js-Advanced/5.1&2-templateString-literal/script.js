const x = 11
console.log(`${ ( x % 2  == 0 ) ? 'genap' : 'ganjl'}`)

// ctrl / , = setting
// 1. HTML Fragments
// const iskandar = {
//     nama: 'iskandar',
//     umur: 20,
//     makan : function(makanan){
//         return `suka makan ${makanan}`
//     }
// }
// const el = `<div class="is">
//     <h4>${iskandar.nama}</h4>
//     <h4>${iskandar.umur}</h4>
//     <h4>${iskandar.makan('ayam')}</h4>
// </div>`

// console.log(el)

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

// const el = `<div class="student">
//     <h4>${student[1].nama}</h4>
//     <h4>${student[2].favFood('ayam')}</h4>
// </div>`

const el = student.map( std =>  `<div class="student">
    <h4>${std.nama}</h4>
    <h4>${std.favFood('ayam')}</h4>
</div>`).join('')



// 3. conditional
// ternary


const lagu = {
    judul: 'Pulang',
    penyanyi: 'Insomniacks',
    feat: 'Justin Bieber'
}

let songTitle = lagu.judul

if (lagu.feat){
    songTitle +=` (feat ${lagu.feat})`
//    lagu.judul +=` (feat ${lagu.feat})`
}
// ${ ( lagu.feat ) ? `(feat ${lagu.feat})` : '' }


const elemnt = `<div class="lagu">
    <ul>
        <li>Penyanyi :${lagu.penyanyi} s ${lagu.feat}</li>
        <li>Lagu : ${songTitle} </li> 
        <!-- <li>Lagu : ${lagu.judul}</li> -->

    </ul>
</div>`

// 4 nested
// HTML fragments

const ilp = {
    bengkel: ['tpp', 'cadd', 'tpm', 'tkr'],
    ketuaTpp: 'aldzukhruf',
    semester: 4
}
function loopBengkel( course ){
    return `
    <ol> 
        ${ course.map( each => `<li>${each}</li>`)
        .join('') }
    </ol>
    `
}
const elemen = `<div class="ilp">
    <h3>Ketua Bengkel : ${ilp.ketuaTpp}</h3>
    <h3>Semester : ${ilp.semester}</h3>
    <h3>Bengkel : </h3>
    ${loopBengkel( ilp.bengkel )}
</div>`
document.body.innerHTML = elemen
