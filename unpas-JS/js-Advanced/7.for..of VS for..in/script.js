
const pel = ['11', '44', '453', '12341']

// for (let i = 0; i < pel.length; i++){
//     console.log(pel[i])
// }


// pel.forEach( (i) => console.log( i ))

// for..of
// for( const num of pel ){
//     console.log(num)
// }

// pel.forEach( (m, i) => console.log(m, i))
// pel.forEach( ( m, i ) => console.log(`number ${m} = index ke - ${i + 1}`) )


// for..of
for ( const [ m, i ] of pel ){
    console.log(`number ${m} = index ke - ${i + 1}`)
}

const liN = document.querySelectorAll('.nodeL')
const output = document.querySelector('.output')
// console.log(liN)
// console.log(output)


let hasil = '<ul>'

liN.forEach( ( m, i ) => hasil += `<li>${m.innerHTML} = index ke - ${i}</li>`) 

hasil += `</ul>`

output.innerHTML = hasil


for ( list of liN ){
    // console.log(list.innerHTML)
}


function total(){
//    return [2, 3, 6, 7].reduce( ( accm, cvI ) => accm + cvI  ) = kalau array boleh
    let juml = 0
    // [2, 3, 6, 7].forEach( m => juml += m )
    // return juml
    //    return arguments.reduce( ( a, i ) => a + i ) = tak boleh

    for ( const a of arguments) {
        juml += a
    }
    return juml
}

console.log( `functon arguments bukan array ${total(2, 4, 6, 7, 9)}` )


// for ..in = buat loopin untuk iterating over enumerable(prop pada objek)

const obj = {
    nama: 'is',
    umur: 20,
    email: 'is@gmail.com'
}
for ( const a in obj){
    // console.log(a) (looping property)
    console.log(obj[a])
}
