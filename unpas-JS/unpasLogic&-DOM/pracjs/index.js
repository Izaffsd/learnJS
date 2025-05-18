// papar menu buah
let buah = prompt("masukkan pilhan buah antara epal & oren")

// papar input menu buah

function pilihanBuah(){

    if( buah == 'epal' ){
        return buah = 'epal'
    }
    else if ( buah == 'oren' ){
        return  buah = 'oren'
    }
    else {
        alert('pilih buah dan oren sahaja')
        throw new Error('Program ditamatkan kerana pilihan tidak sah.');
       
    }

}
buah = pilihanBuah();
alert('anda pilih ' + buah)


// papar kuantiti menu buah
let kuantiti = prompt('berapa biji ' + buah + ' anda mahu, 1 buah biji RM 4' )

let harga = 0
harga = kuantiti * 4
// kira jumlah harga *10
// jika plih buah lebih 10 dapat diskaun

let diskaun = 0

if ( kuantiti > 10){
    diskaun = harga * (10 / 100)
}

harga = harga - diskaun


alert('anda mendapatkan diskaun RM' + diskaun)
alert('Total RM' + harga)





// paparkan pada skrin jumlah