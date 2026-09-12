const areatombol = document.getElementById('Tombol');
const tombolnya = document.createElement('button');
const tombolnya2 = document.createElement('button');
const breaks = document.createElement('br');
const NIM = "535250052";
const Nama = "Fedri Marcello"

//Membuat tombol untuk munculin
tombolnya.id = "tombols";
tombolnya.textContent = "Munculkan";
areatombol.appendChild(tombolnya);

//Membuat tombol hapus
tombolnya2.id = 'tombolss';
tombolnya2.textContent = 'Kembali';
areatombol.appendChild(tombolnya2);

//Membuat div jadi dinamis
const divBaru = document.createElement('div');
divBaru.id = 'Profil';

tombolnya.addEventListener('click', () => {
    document.body.insertBefore(divBaru, areatombol);
    divBaru.innerHTML ="";
    let teks = document.createTextNode("NIM: " + NIM);
    let teks2 = document.createTextNode("Nama: " + Nama);
    //untuk munculin NIM dan Nama
    divBaru.appendChild(teks);
    divBaru.appendChild(breaks);
    divBaru.appendChild(teks2);
});

tombolnya2.addEventListener('click', () => {
    divBaru.innerHTML = ""
    document.body.removeChild(divBaru);
});

