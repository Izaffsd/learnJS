// const prom = new Promise( resolve  => 
//     setTimeout(() => {
//         resolve('ok')
//     }, 2000)
// )
// console.log(prom) // pending sebab synchrous ( console )

// prom.then( resp => console.log(resp)) // baru jadi asynchrounous


function tryPromise(){
    return new Promise( (resolve, reject)  => {
        let time = 3000
            if( time < 2000 ){
                setTimeout(() => {
                    resolve('ok')
            }, 2000)
            }
        else{
            setTimeout( () => {
                reject('error tu')

            }, time )
        }
}
)
}

// const prom = tryPromise()
// prom.then( resp => console.log(resp)).catch( () => console.log( prom ))

async function call(){
    try{
        const prom = await tryPromise() // function asynchoronous
        console.log(prom)    
    }
    catch( err ){
        console.error(err)
    }
}
call()