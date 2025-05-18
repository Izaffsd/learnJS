// constructor function
const Student1 = function(){
    this.nama = 'iskandar'
    this.umur = 20
    this.tahun = 2005
    
    this.hi = function( hp ){
        return  `saya ${this.nama} pakai hp ${hp}`
    }
    console.table(this)
}

const Is1 = new Student1()
console.log(Is1.hi('iPhone 18'))


// arrow func
const Student2 = (function(){
    this.nama = 'iskandar'
    this.umur = 20
    this.tahun = 2005
    
    this.hi =  hp  => `saya ${this.nama} pakai hp ${hp}`
    console.table(this)
})

const Is2 = new Student2()
console.log(Is2.hi('iPhone 18'))


// obj literal
const ali1 = {
    nama: 'ali'     ,
    umur: 23    ,
    sayhi: () => {
        // console.log(`hi, saya ${this.nama} umur saya ${this.umur}`)
        // tk boleh sbb arrow func tk de konsep this / bukan global just lexical dia cari this tkde sbb tu undefined
        console.log(this) // dekt console -> ali1.sayhi() = window bukan obj
    }
}



// constructor function
const Student = function(){
    this.nama = 'iskandar'
    this.umur = 20
    this.tahun = 2005
    
    this.hi = function( hp ){
        return  `saya ${this.nama} pakai hp ${hp}`
    }
// umur = 2 // ni kalau func declare = jadi sbb cri dekt global
    setInterval( () => {
        // tkde konsep this / glocal so cri dekt lexical
        // console.log(this.umur++)
    }
    , 1000
    )

    console.table(this)
}

const Is = new Student()
console.log(Is.hi('iPhone 18'))


const box = document.querySelector('.box')

box.addEventListener('click', function(){
    // console.log(this)
    //this berisi elemen<div class="box"></div>
    // let that = this
let satu = 'size'
let dua = 'caption'

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu]
    }

    this.classList.toggle(satu)

        setTimeout( () => {
            // console.log(that)
            this.classList.toggle(dua)

        }
        ,900
        )
})


