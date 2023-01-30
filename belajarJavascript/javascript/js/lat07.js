let bil = [1, 3 , 5, 7, 9];

function kali(num) {
    return num * 2;
}

console.log(kali(2));

let hasil = bil.map(num => num + 2);

console.log(hasil);

// document.querySelector("#tampil").innerHTML = hasil;

let out = '<tbody>';

hasil.forEach(el => {
    out += `<tr><td>${el}</td></tr>`;
})

out += '</tbody>'
document.querySelector("#tabel1").innerHTML = out;

hasil.forEach(e => {
    console.log(e);
})

let siswa = [
    {nama : "Siti", sekolah : "SMKN 2 Buduran", kelas : "XI RPL"},
    {nama : "Sati", sekolah : "SMKN 2 Buduran", kelas : "XI RPL"},
    {nama : "Suti", sekolah : "SMKN 2 Buduran", kelas : "XI RPL"}
];

console.log(siswa);

out = '<thead><tr><th>Nama</th><th>Sekolah</th><th>Kelas</th></tr></thead><tbody>';
has = siswa.map(a => out += `<tr><td>${a.nama}</td><td>${a.sekolah}</td><td>${a.kelas}</td></tr>`)
out += '</tbody>'

document.querySelector("#tabel").innerHTML = out;






