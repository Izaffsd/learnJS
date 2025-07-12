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
axios.get('dataPel.json')
  .then(result => {
    result.data.forEach( (person, i) => {
        // console.log(i)
        list.innerHTML += `<li>${i + 1}: Nama: ${person.nama}, Umur: ${person.umur}, Suka: ${person.hobby.kedua}</li>`
    //   console.log(`Nama: ${person.nama}, Umur: ${person.umur}, Suka: ${person.hobby.kedua}`);
    });
  })
.catch(err => console.error('Error Axios:', err));