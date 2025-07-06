// hasil += arg -> hasil = hasil + arg[i] & i++ -> i = i + 1 
// Parameter adalah nama pemboleh ubah yang ditentukan dalam definisi fungsi
// Argumen adalah nilai sebenar
// salam("Iskandar"); // "Iskandar" = argumen

//  buat objek van

// this / window / global bila nanti nak buat objek baru just isi walaupon luar dari blok function
function Van( driver, desti, penumpang, duit ){
// Parameter menjadi properti objek: Setiap parameter awal
// disimpan sebagai properti dalam objek.

    this.driver = driver;
    this.desti = desti;
    this.penumpang = penumpang;
    this.duit = duit;


// method untuk tambah penumpang yang diisi lalu disimpan atau ditambah dalam prope
// Method ini menambah penumpang: namaPenumpang yang diberikan sebagai argumen akan ditambah ke dalam array penumpang.
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);

        return this.penumpang;
        // hanya menghantar balik nilai kepada tempat di mana fungsi itu dipanggil.
    }
// method penumpang bila naik tu bila dah dapat value (nilai) ia akan kembali atau disimpan dalam properti objek penumpang


    this.penumpangTurun = function (namaPenumpang, bayar) {
        if(this.penumpang.length == 0) {
            alert("Van masih kosong");

            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++) {

            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;

                this.duit += bayar;

                return this.penumpang;
            }
        }

    }
}

// buat objek baru dengan properti yang berdasarkan argumen yang kita berikan (driver, desti, penumpang, dan duit).
var van1 = new Van ( 'Iskandar', ['KL', 'Banting'], [], 0 );
var van2 = new Van ( 'Affi', ['Sel', 'Klang'], [], 0 );


/* console -> van1.penumpangNaik('')
van1.penumpang
van1.penumpangTurun("Ali", 5)

van1.duit
*/