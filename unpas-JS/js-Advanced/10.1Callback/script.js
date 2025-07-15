// const students = [
//   {
//     nama: 'Iskandar',
//     umur: 20,
//     hobby: {
//       utama: 'Coding',
//       kedua: 'Membaca'
//     }
//   },
//   {
//     nama: 'Aina',
//     umur: 19,
//     hobby: {
//       utama: 'Melukis',
//       kedua: 'Menonton drama'
//     }
//   },
//   {
//     nama: 'Farhan',
//     umur: 21,
//     hobby: {
//       utama: 'Gaming',
//       kedua: 'Berenang'
//     }
//   }
// ];

// students.map( (a, i) => console.log(`${i + 1} Hi saya ${a.nama} dan umur saya ${a.umur}, Saya suka ${a.hobby.utama} dan juga ${a.hobby.kedua}`) )


// students.forEach( ( a, i ) => console.log(`${i + 1} Hi saya ${a.nama} dan umur saya ${a.umur}, Saya suka ${a.hobby.utama} dan juga ${a.hobby.kedua}`))

// for (const index in students) {
//     // console.log(typeof index)
//     console.log(`${Number(index) + 1} Saya ${students[index].nama} umur ${students[index].umur}`);
// }

// console.log(students)



// Contoh kalau guna fetch() (native JS), tak ada data — kau terus dapat json():

// fetch('dataPel.json') // Fail JSON mesti dalam folder sama
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(person => {
//       console.log(`Nama: ${person.nama}, Umur: ${person.umur}, Hobby Utama: ${person.hobby.utama}`);
//     });
//   })
// .catch(err => console.error('Gagal fetch:', err));



// Jika kau guna Axios, axios.get(url) akan beri response object yang lebih kurang macam ni:

// {
//   data: {...},           // ✅ Kandungan sebenar dari API (ini yang kita nak!)
//   status: 200,
//   statusText: "OK",
//   headers: {...},
//   config: {...},
//   request: {...}
// }


const list = document.getElementById('list')
// axios.get('dataPel.json')
//   .then(result => {
//     result.data.forEach( (person, i) => {
//         // console.log(i)
//         list.innerHTML += `<li>${i + 1}: Nama: ${person.nama}, Umur: ${person.umur}, Suka: ${person.hobby.kedua}</li>`
//     //   console.log(`Nama: ${person.nama}, Umur: ${person.umur}, Suka: ${person.hobby.kedua}`);
//     });
//   })
// .catch(err => console.error('Error Axios:', err));

// fetch('dataPel.json')
//   .then( resp =>  resp.json() )  // data dalalm promise // dah kalau promise kalau nak jalan dalam asynchronous so kene dalam then lagi ( undefined kalau console.log yang first )
//   .then( data => {
//     console.log( data )
//   })
//   .catch( err => console.error(err))

// const test = {
//   nama: 'super'
// }
// const button = document.querySelector('.but')
// button.addEventListener('click', function(){
  
//   const movies = getData(test.nama) // ni scynchronous so js tak tahu tu asynchronous = so bgtahu dalam func tu ada asynchronous = letak keyword async dekat func tu dan mana code yang asynchornous tu letak await = so jadi promnise = so 
//   console.log(movies)
// })


// function getData(keyword){
//   return fetch('http://www.omdbapi.com/?apikey=e3f9e626&s=' + keyword )
//   .then( resp =>  resp.json() )  // data dalalm promise // dah kalau promise kalau nak jalan dalam asynchronous so kene dalam then lagi ( undefined kalau console.log yang first )
//   .then( data => {
//      data.Search 
//   })
//   .catch( err => console.error(err))
// }

// .then(data => {
//   return data.Search;
// })
//  Kau tak return data.Search — jadi function tu tak hantar apa-apa balik ke movies.



// const test = {
//   nama: 'super'
// }
// const button = document.querySelector('.but')
// button.addEventListener('click', async function(){
  
//   const movies = await getData(test.nama)
//   console.log(movies)
// })

// function getData(keyword){
//   return fetch('http://www.omdbapi.com/?apikey=e3f9e626&s=' + keyword )
//   .then( resp =>  resp.json() )  // data dalalm promise // dah kalau promise kalau nak jalan dalam asynchronous so kene dalam then lagi ( undefined kalau console.log yang first )
//   .then( data => data.Search ) // // ✅ return data
//   .catch( err => console.error(err))
// }





const test = {
  nama: 'tt1650062'
}
const button = document.querySelector('.but')
button.addEventListener('click', async function(){
  
  const movies = await getData(test.nama) // tunggu getData selesai
  console.log(movies) 
})


async function getData(keyword) {
  try {
    const resp = await fetch('http://www.omdbapi.com/?apikey=e3f9e626&i=' + keyword); // tunggu fetch
    const data = await resp.json(); // tunggu proses .json()
    return data; // bagi balik array movie
  } catch (err) {
    console.error(err); // error handling
  }
}

document.addEventListener('click', function(e){
  if( e.target.classList.contains('but') ){
    const imdbID = e.target.dataset.imdbid
    console.log(imdbID)
    console.log('okkk')
  }
})


// akan ambil nilai dari attribute data-imdbid (case sensitive). <button class="but" data-imdbid="tt1650062">Click</button>
