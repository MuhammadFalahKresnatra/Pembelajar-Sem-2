let tampil = document.querySelector("#belajar");

klik.addEventListener("click", hasil);
klik.onclick = function (b) {
    b = "teflon"
    alert(b);
}

function hasil() {
    
    // let a = document.querySelector("#tanggal").value;
    // tampil.innerHTML = a;
    // alert("sapi");

}

// zodiak(4, 23);
function zodiak() {
    let hasil = "Salah";
    let tanggal = document.getElementById("tanggal").value;
    let bulan = document.getElementById("bulan").value;

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
    console.log(hasil);
    tampil.innerHTML = hasil;
}

lulus(67);
function lulus(nilai) {
    let kkmc = 70;
    let kkmb = 84;
    let kkma = 91;
    let hasil = "Nilai salah";
    if (nilai > 0 && nilai <= 100 ) {
        if (nilai > kkmc) {
            hasil = "LULUS DENGAN PREDIKAT C";
        }
        if (nilai > kkmb) {
            hasil = "LULUS DENGAN PREDIKAT B";
        }
        if (nilai > kkma) {
            hasil = "LULUS DENGAN PREDIKAT A";
        }
        if (nilai <= kkmc) {
            hasil = "TIDAK LULUS";
        }
    }
    console.log(hasil);
}

console.log(terbilang(3200000));
function terbilang(angka) {
    let bilangan=[
        " ", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"
    ];

		if(angka < 12){

			return bilangan[angka];

		}else if(angka < 20){

			return terbilang(angka-10)+" belas";

		}else if(angka < 100){

			return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);

		}else if(angka < 200){

			return "seratus "+terbilang(parseInt(angka)-100);

		}else if(angka < 1000){

			return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);

		}else if(angka < 2000){

			return "seribu "+terbilang(parseInt(angka)-1000);

		}else if(angka < 1000000){

			return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);

		}else if(angka < 1000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);

		}else if(angka < 1000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyard "+terbilang(parseInt(angka)%1000000000);

		}else if(angka < 1000000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000000))+" triliun "+terbilang(parseInt(angka)%1000000000000);

		}
}

prima(6257)
function prima(bilangan) {
    let prima = true
    let hasil = "";
    if (bilangan < 2) {
        hasil = "Tidak Valid (Bil Prima dimulai dari angka 2)";
    } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i === 0) {
                prima = false;
            }
        }
        if (prima) {
            hasil = bilangan + " Merupakan bilangan Prima";
        }else{
            hasil = bilangan + " Bukan bilangan Prima";
        }
    }
    console.log(hasil);
}