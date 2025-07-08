// func courseILP = higher order func -> sebb terima arguments as func
// grad -> terima arguments as func = Callback func
function courseILP( bengkel, grad ){
    console.log(`assigment ${bengkel}`)
    grad()
}
// 
function grad(){
    console.log('done assigment PAI')
}
courseILP('TPP', grad)

// cth : setTimeout = higher order func dan ada parameter func = callback
setTimeout(function(){
    console.log('lepas 1s')
}, 1000)

const h2 = document.getElementsByTagName('h2')[0]

h2.addEventListener('mouseenter', function(){
    h2.style.backgroundColor = 'violet'
})


function hi( waktu ){
    return function( nama ){
        return `hi ${nama}, sekrg masa ${waktu}, ok`
    }
}

let malam = hi('malam')
console.dir(malam(3))

