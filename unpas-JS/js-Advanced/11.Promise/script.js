const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=e3f9e626'

// axios.get(url)
// .then(resp => {
//     console.log('data', resp.data)
// })


// // constoh promise 1 ( tak nampak pending)
// let dapat1 = false
// const janji1 = new Promise( ( resolve, reject ) => {
//     if( dapat1 ){
//         resolve('janji telah ditepati')
//     }
//     else{
//         reject('ingkar janji')
//     }
// } )

// console.log(janji1)

// // tangkap resolve or reject = janji telah ditepati / ingkar janji
// janji1
//     .then( ( respone ) => console.log('ok ' + respone ) )
//     .catch( ( respone ) => console.log( 'tak ok ' + respone ) )



// contoh 2 (pending)
// let dapat2 = true
// const janji2 = new Promise( ( resolve, reject ) => {
//     if( dapat2 ){
//         setTimeout( (  ) => {
//             resolve('boleh')
//         } , 3000)
//     }
//     else{
//         setTimeout( () => {
//             reject('tak boleh')
//         } , 3000)
//     }
// } ) 

// console.log('start')
// // console.log(janji2) // pending tak selesai selagi tak then
// console.log(janji2.then( () => console.log(janji2) ))
// janji2
//     .finally( () => console.log('done menunggu/pending')) // biasa untuk animasi loading , finaly matikan animasi loadingnya
//     .then( ( resp ) => console.log(`manatap pak abu = ${resp} =`))
//     .catch( resp => console.log( `tak mantap = ${resp} =`))
// console.log('done')


// method Promise.all // amik dua api yang berbeza
// resolve atau dapat data macam JSON

let dapat = true

const film = new Promise( ( resolve, reject) => {
    if ( dapat ){
        setTimeout( () => {
            resolve( [ {
                Title: "Avengers End Game",
                Time: "4 jam",
                Actor: "Iskandar, Affi"
            } ]
            ) }, 3300
        )
    }
    else{
        reject('film tak dapat')
    }
}) 


const weather = new Promise( (resolve, reject) => {
    if( dapat ){
        setTimeout( () => {
            resolve( [ {
                Cuaca: "Hujan",
                Tempat: "Ampang",
                Temparature: "19c"
            } ]) }, 1200 
        )
    }
    else{
        reject('weather tak dapat')
    }
    
})

console.log(weather) // pending
console.log(film) // pending

// film.then( (resp) => console.log(resp)).catch( (resp) => console.log(resp) )
// weather.then( (resp) => console.log(resp)).catch( (resp ) => console.log(resp) )

// sekaligus keyword .all // dan terpisah
// Promise.all( [weather, film]  ).then( (resp ) => console.log(resp)) // 3.3 saat
//     .catch( ( resp ) => console.log(resp))



// keyword .all terpisah = spread dan respone 
Promise.all( [film, weather] )
    .then( ( respone ) => {
        const [film, weather] = respone
        console.log(film)
        console.log(weather)
    })