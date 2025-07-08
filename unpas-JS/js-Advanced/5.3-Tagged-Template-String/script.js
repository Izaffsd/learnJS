//  tagged template = tambah nama function
//  tag template tu akan memecah dan dipecahkan oleh expression
//  ...valus = rest parameter
const nama = 'Izaf'
const age = 20
// cth kalau ada nilai banyak atau tambah -> email
const email = 'halo@gmail.com'

function titik( strings, ...values ){
    // let result = ''
    // strings.forEach( ( str, i ) => {
    //     result += `str[] ${str} v[] ${values[i] || ''}`
    // })
    // return result

// accumulator = untuk simpan / gabung setiap isi array 
    return strings.reduce( ( resultAc, str, i) => `${resultAc}${str} <span class="hl">${values[i] || ''}</span>`, '' ) // reduce ada nilai awal so kat hujung ni letak ''

}
const span = ``
const tempStr = titik`My name is ${nama} and my age is ${age} add email saya ${email}`

document.body.innerHTML = tempStr

// ${name} = namanya expression dan ia masuk ke parameter berikutnya
console.log(tempStr)