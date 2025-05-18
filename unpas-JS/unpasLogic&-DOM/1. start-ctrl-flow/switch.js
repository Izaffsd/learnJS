 var item = prompt('masukkan pilihan anda | ayam, susu, coke, sate, nasi');

 switch ( item ){
    case "ayam":
    case 'susu':
    case 'nasi':
        alert('anda memilih makanan / minuman yang sihat' );
        break;

    case 'coke':
    case 'sate':
        alert('anda memilih makanan / minuman yang tidak sihat' );
        break;
    
    default:
        alert('anda memilih item yang tidak ada');
}