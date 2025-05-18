const name = 'Izaf', age = 20

// strings, name, age, email X
function titik3( strings, ...values){
    let result = ''
    strings.forEach( ( str, i ) => {
        result += `${str}${values[i] || ''}`
    })
    return result
}

const tempStr = titik3`My name is ${name} and my age is ${age} hehe`
// ${name} = namanya expression dan ia masuk ke parameter berikutnya
console.log(tempStr)