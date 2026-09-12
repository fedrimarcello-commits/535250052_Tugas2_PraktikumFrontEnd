const areatombol = document.getElementById('Tombol');
const tombolnya = document.createElement('button');
const breaks = document.createElement('br');
const NIM = "535250052";
const Nama = "Fedri Marcello"

//Tombol awal
tombolnya.id = "tombols";
tombolnya.textContent = "Masuk";
areatombol.appendChild(tombolnya);

tombolnya.addEventListener('click', () => {
    areatombol.removeChild(tombolnya); // hapus tombol Mulai
    //Membuat Div di HTML secara Dinamis
    const divBaru = document.createElement('div');
    divBaru.id = 'Profil';
    document.body.appendChild(divBaru);
    let teks = document.createTextNode("NIM: " + NIM);
    let teks2 = document.createTextNode("Nama: " + Nama);
    //untuk munculin NIM dan Nama
    divBaru.appendChild(teks);
    divBaru.appendChild(breaks);
    divBaru.appendChild(teks2);
    //Membuat tombol hapus
    const tombolnya2 = document.createElement('button');
    tombolnya2.id = 'tombolss';
    tombolnya2.textContent = 'Kembali';
    divBaru.appendChild(tombolnya2);
    
    // untuk bagian tombol hapus
    tombolnya2.addEventListener('click', () => {
    document.body.removeChild(divBaru);
    areatombol.appendChild(tombolnya);

    });
});



