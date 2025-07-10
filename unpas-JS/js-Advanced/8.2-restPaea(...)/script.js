function myFunction(a, b, ...arg){
    let kira = 0
    arg.forEach( a => kira += a )
    console.log(kira)
    return `a = ${a}, b = ${b}, baki + arg = ${kira}`
}
const func = myFunction( 2, 4, 5, 6, 7, 8 )
document.body.innerHTML = func



const myFunc = funcArg( 2, 4, 5, 6, 7, 8 )

console.log( myFunc )
function funcArg(...arguments){
    // console.log(arguments) // letak kat parameter = array
    // return Array.from(arguments)
    // return [...arguments]
    // let i = 0
    // for ( const a of arguments ){
    //     i += a
    // }
    // return `total args ${i}`
    // return [...arguments].reduce( ( accm, cvI ) => accm += cvI )
    return arguments.reduce( ( accm, cvI ) => accm += cvI )

}




// array destructring

const buah = ['epal', 'buah naga', 'durian', 'mangga', 'kelapa']
const [epal, ...restBuah] = buah

console.log( `1st var = ${epal}, rest = ${restBuah.join(' ')}` )


// objek destructring
const myFav = {
    makanan: 'Pasta',
    minuman: 'Milo o Ice',
    hobby: {
        st: 'Coding',
        nd: 'Workout'
    }

}

const { makanan : makan, ...arg } = myFav
console.log(makan)
const argH = arg.hobby
console.log(arg)


function filterNum( type, ...values ){
    console.log(typeof type )
    return values.filter( a => typeof a === type )
    
}

console.log( filterNum( 'number', false, 22, {}, '343', 234, 'bukan num', undefined, true ) )
