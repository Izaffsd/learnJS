// const items = document.querySelectorAll('.items img')
// // akses setiap img(looping[array]) then bagi event
// const main = document.getElementById('mainImage')

// items.forEach(function(evemain){
//     evemain.addEventListener('click', function(){
//         // console.log(evemain)
//         main.src = evemain.src;
//         main.alt = evemain.alt;
//     })
// })


// event bubling (traversal / telusuri)
const container = document.querySelector('.container')
const mainImg = document.querySelector('.big')
const small = document.querySelectorAll('.small')


container.addEventListener('click', function(eve){

    // cek jika di klik adalah yg small
    if(eve.target.className == 'small'){
        // tukar atr src mainImg jadi atr src small
        mainImg.src = eve.target.src
        // console.log(mainImg)
        mainImg.classList.add('faded')

        setTimeout(function(){
        mainImg.classList.toggle('faded')

                  }, 500
        )
       
        //  Elemen lain boleh diset semula ke keadaan asal jika bahagian item.className = 'small'; diaktifkan.

        // 2. bila img lain di klik,  img2 akan reset class ke keadaan asal iaitu small
        small.forEach(function(item){
            console.log(item)
                item.className = 'small'

        })
        // 1. img2 dapat kelas active
        eve.target.classList.add('active')

    }

})
