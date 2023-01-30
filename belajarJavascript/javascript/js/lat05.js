function perkalian(a,b) {
    return a * b;
}

// console.log(perkalian(3,5));

let kali = (a,b) => a * b;
console.log(kali(4,2));


// Arrow Function Zodiak
let zodiak = (bulan,tanggal) => {
    let hasil = "Salah";

    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
        hasil = "Zodiak belum dibuat";
        if (bulan == 1) {
            hasil = "Capricorn";
            if (tanggal > 21) {
                hasil = "Aquarius";
            }
        }
        if (bulan == 2 && tanggal < 30) {
            hasil = "Aquarius";
            if (tanggal > 18 ) {
                hasil = "Pisces";
            }
        }
        if (bulan == 4 && tanggal < 31) {
            hasil = "Aries";
            if (tanggal > 10 ) {
                hasil = "Taurus";
            }
        }
    }
    return hasil;
}
console.log(zodiak(1,12));

// Arrow Function Lulus
let lulus = (nilai) => {
    let result = "invalid";
    if (nilai > 0 && nilai <= 100) {
        if (nilai > 75) {
            result = "LULUS";
        } else{
            result = "TIDAK LULUS";
        }
    }
    return result;
}
console.log(lulus(78));
