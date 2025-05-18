// var tanya = true;

// while ( tanya ) {
//     var player = prompt("masukkan pilihan anda | gunting, kertas & batu");
// // amik input or pilihan player



//     // amik pilhan computer

//     var comp = Math.random();
//     console.log(comp);

//         if( comp < 0.34 ){

//             comp = 'kertas';

//         }
//         else if ( comp >= 0.34 && comp < 0.68){

//                 comp = 'gunting'
//         }
//         else {

//                 comp = 'batu';

//         }

//         var hasil = '';
//         if ( player == comp ){

//             hasil = 'Seri';

//         } else if ( player == 'kertas' ){
//             // if( comp == 'gunting' ){
//             //     hasil = 'Kalah';
//             // }
//             // else {
//             //     hasil = 'Menang';
//             // }
//             hasil = ( comp == 'gunting' ) ? 'Kalah' : 'Menang';

//         } else if ( player == 'batu'){

//             hasil = ( comp == 'gunting' ) ? 'Menang' : 'Kalah';
//         }
//         else if (player == 'gunting'){

//             hasil = ( comp == 'batu' ) ? 'Kalah' : 'Menang';

//         }else {
//             hasil = 'memasukkan pilihan yang salah';
//         }



//     // membangkitkan bilangan random


//     alert('anda memilih ' + player + ' dan komputer memilih ' + comp + '\nMaka hasilnya : Anda ' + hasil);


//     tanya = confirm('lagi ?');
// }
//     // menentukan rules
// alert('arigato sudah bermain');



    // tampilkan hasilnya



// const choices = document.querySelectorAll('.choice');
// const resultText = document.getElementById('result-text');
// const playerChoiceText = document.getElementById('player-choice');
// const compChoiceText = document.getElementById('comp-choice');
// const playAgainButton = document.getElementById('play-again');

// choices.forEach(choice => {
//     choice.addEventListener('click', playGame);
// });

// playAgainButton.addEventListener('click', () => {
//     playAgainButton.classList.add('hidden');
//     resultText.textContent = 'Pilih untuk bermain!';
//     playerChoiceText.textContent = '-';
//     compChoiceText.textContent = '-';
// });

// function playGame(event) {
//     const playerChoice = event.currentTarget.getAttribute('data-choice');
//     const compChoice = getCompChoice();
//     const result = getResult(playerChoice, compChoice);

//     playerChoiceText.textContent = playerChoice;
//     compChoiceText.textContent = compChoice;
//     resultText.textContent = 'Anda ' + result;

//     playAgainButton.classList.remove('hidden');
// }

// function getCompChoice() {
//     const random = Math.random();
//     if (random < 0.34) return 'kertas';
//     else if (random >= 0.34 && random < 0.68) return 'gunting';
//     else return 'batu';
// }

// function getResult(player, comp) {
//     if (player === comp) return 'Seri';
//     if (player === 'kertas') return (comp === 'gunting') ? 'Kalah' : 'Menang';
//     if (player === 'gunting') return (comp === 'batu') ? 'Kalah' : 'Menang';
//     if (player === 'batu') return (comp === 'kertas') ? 'Kalah' : 'Menang';
// }


let tanya = true;

const submitBtn = document.getElementById('submit-btn');
const playAgainBtn = document.getElementById('play-again');
const playerInput = document.getElementById('player-input');
const playerChoiceText = document.getElementById('player-choice');
const compChoiceText = document.getElementById('comp-choice');
const gameResultText = document.getElementById('game-result');

submitBtn.addEventListener('click', playGame);
playAgainBtn.addEventListener('click', resetGame);

function playGame() {
    let player = playerInput.value.toLowerCase();
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'kertas';
    } else if (comp >= 0.34 && comp < 0.68) {
        comp = 'gunting';
    } else {
        comp = 'batu';
    }

    let hasil = '';
    if (player === comp) {
        hasil = 'Seri';
    } else if (player === 'kertas') {
        hasil = (comp === 'gunting') ? 'Kalah' : 'Menang';
    } else if (player === 'batu') {
        hasil = (comp === 'gunting') ? 'Menang' : 'Kalah';
    } else if (player === 'gunting') {
        hasil = (comp === 'batu') ? 'Kalah' : 'Menang';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }

    // Tampilkan hasil
    playerChoiceText.textContent = player;
    compChoiceText.textContent = comp;
    gameResultText.textContent = hasil;

    playAgainBtn.classList.remove('hidden');
    submitBtn.disabled = true;
    playerInput.disabled = true;
}

function resetGame() {
    // Reset elemen
    playerChoiceText.textContent = '-';
    compChoiceText.textContent = '-';
    gameResultText.textContent = '-';
    playerInput.value = '';

    // Enable tombol dan input
    playAgainBtn.classList.add('hidden');
    submitBtn.disabled = false;
    playerInput.disabled = false;
}




// // Menjana nombor rawak antara 1 dan 10
// var correctNumber = Math.floor(Math.random() * 10) + 1;

// // Tetapkan bilangan percubaan yang dibenarkan
// var percubaan = 3;

// // Mulakan gelung permainan
// while (percubaan > 0) {
//     // Minta pengguna meneka nombor
//     var tekaanPengguna = prompt("Teka nombor antara 1 hingga 10 (Anda ada " + percubaan + " peluang lagi):");

//     // Tukarkan tekaan pengguna kepada nombor
//     tekaanPengguna = Number(tekaanPengguna);

//     // Semak jika tekaan itu betul
//     if (tekaanPengguna === correctNumber) {
//         alert("Tahniah! Anda telah meneka nombor yang betul: " + correctNumber);
//         break;  // Tamatkan gelung
//     } else if (tekaanPengguna > correctNumber) {
//         alert("Terlalu tinggi! Cuba lagi.");
//     } else if (tekaanPengguna < correctNumber) {
//         alert("Terlalu rendah! Cuba lagi.");
//     } else {
//         alert('input anda salah');
//     }

//     // Kurangkan bilangan percubaan yang tinggal
//     percubaan--;

//     // Semak jika tiada lagi percubaan yang tinggal
//     if (percubaan === 0) {
//         alert("Maaf, anda telah kehabisan percubaan. Nombor yang betul ialah " + correctNumber);
//     }
//     else if (){
//         alert("ll");
//     }
// }

// // Menjana nombor rawak antara 1 dan 10
// var correctNumber = Math.floor(Math.random() * 10) + 1;

// // Tetapkan bilangan percubaan yang dibenarkan
// var percubaan = 3;

// // Mulakan gelung permainan
// while (percubaan > 0) {
//     // Minta pengguna meneka nombor
//     var tekaanPengguna = prompt("Teka nombor antara 1 hingga 10 (Anda ada " + percubaan + " peluang lagi):");

//     // Semak jika pengguna menekan "Cancel"
//     if (tekaanPengguna === null) {
//         alert("Permainan dibatalkan.");
//         break;  // Keluar dari gelung
//     }

//     // Semak jika input kosong atau bukan nombor
//     if (isNaN(tekaanPengguna) || tekaanPengguna.trim() === '') {
//         alert("Sila masukkan nombor yang sah.");
//         continue;  // Teruskan ke iterasi seterusnya
//     }

//     // Tukarkan tekaan pengguna kepada nombor
//     tekaanPengguna = Number(tekaanPengguna);

//     // Semak jika tekaan itu betul
//     if (tekaanPengguna === correctNumber) {
//         alert("Tahniah! Anda telah meneka nombor yang betul: " + correctNumber);
//         break;  // Tamatkan gelung
//     } else if (tekaanPengguna > correctNumber) {
//         alert("Terlalu tinggi! Cuba lagi.");
//     } else if (tekaanPengguna < correctNumber) {
//         alert("Terlalu rendah! Cuba lagi.");
//     }

//     // Kurangkan bilangan percubaan yang tinggal
//     percubaan--;

//     // Semak jika tiada lagi percubaan yang tinggal
//     if (percubaan === 0) {
//         alert("Maaf, anda telah kehabisan percubaan. Nombor yang betul ialah " + correctNumber);
//     }
// }
