
function tambahTugas(){
    const inputTugas = document.getElementById('inputTugas')
    const senaraiTugas = document.getElementById('senaraiTugas')

    if(inputTugas.value.trim() === ""){
        alert("sila taip tugasan!")
        return
    }
    const li = document.createElement('li')
    li.textContent = inputTugas.value

    const padam = document.createElement('button')
    padam.textContent = 'Padam'
    padam.style.marginLeft = '1rem'

    padam.onclick = function(){
        senaraiTugas.removeChild(li)
    }
    li.appendChild(padam)
    senaraiTugas.appendChild(li)
    
    inputTugas.value = ""
}
