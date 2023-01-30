let buah = ['Mangga','Jambu','Jeruk','Duren','Apel'];

console.log(buah);

// document.querySelector('#tampil').innerHTML = buah[0];

buah.forEach(el => {
    console.log(el);
    // document.querySelector('#sapi').innerHTML += el + '<br>';
});

// function kali(a,b) {
//     return a*b;
// }

let perkalian = (a,b) => {
    return a * b;
}

// function tampil(a) {
//     return a;
// }

let tampilan = (a) => {
    console.log(a);
}

// console.log(kali(2,3));
// console.log(tampil('nurdin'));

console.log(perkalian(3,5));
tampilan('nurdin');

// let siswa = {
//     nama : ['Siti', 'Setyo'],
//     sekolah : 'SMKN 2 BUDURAN',
//     kelas : ['XI RPL', 'XI MM']
// };

// console.log(siswa);
// console.log(siswa.nama) ;

let siswa = '{"Siswa" : [' +
    '{ "Nama":"Nurdinray", "Kelas":"XI RPL", "Sekolah":"SMKN 2 Buduran" },' +
    '{ "Nama":"Erwinto", "Kelas":"XI RPL", "Sekolah":"SMKN 2 Buduran" },' +
    '{ "Nama":"Nasruna", "Kelas":"XI RPL", "Sekolah":"SMKN 2 Buduran" } ]}';

const obj = JSON.parse(siswa);
// console.log(obj.Siswa[0].Nama);

document.querySelector('#tampil').innerHTML = obj.Siswa[0].Nama ;

obj.Siswa.forEach(el=>{
    console.log(el);
    document.querySelector('#sapi').innerHTML += el.Nama + ' ' + el.Kelas + ' ' + el.Sekolah + '<br>'
})