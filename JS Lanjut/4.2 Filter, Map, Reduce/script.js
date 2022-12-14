// filter, map, reduce == 3 function ini merupakan prototype dari tipe data array

// + Array.prototype.map()
// + Array.prototype.filter()
// + Array.prototype.reduce()


// ilustrasi
// filter == untuk mengumpulkan / mefilter data yang dicari
// map == untuk memotong isi array = hampir sama seperti foreach bedanya kalau foreach tidak menghasilkan array baru tapi kalau map menghasilkan array baru
// reduce == menggabungkan dari setiap array menjadi 1

// contoh menggunakan for
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka yang lebih >= 3
// contoh menggunakan for
// dan dimasukkan kedalam array kosong
const newAngka = [];
// console.log(angka[0])
for( i = 0 ; i < angka.length ; i++ ){
	// console.log(angka[i])

	if( angka[i] >= 3){
		newAngka.push(angka[i])

	}
}
console.log(newAngka);


// cara menggunakan filter

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = angka.filter(function(i){ // a merepresentasi dari tiap" element didalam angka 
	return i >= 3;
})

// arrow function == const newAngka = angka.filter( i => i >= 3) == kode lebih ringkas
console.log(newAngka);

// ================================================================================================
// Map
// soal = kalikan semua angka didalam array dengan 2

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const newAngka = angka.map( a =>
	a * 2
)
console.log(newAngka);



// reduce melakukan sesuatu terhadap seluruh element pada arraynya
// soal = tolong jumlahkan semua nilai didalam array angka
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const newAngka = angka.reduce((accumulator, currentValue) => 
	accumulator + currentValue//, 0  ini nilai awalnya adalah 0
) // currentValue looping tiap" element array, sedangkan accumulator adalah hasil dari prosesnya
console.log(newAngka);


// method Chaining
// cari angka > 5
// dan hasilnya dikali 3
// kemudian jumlahkan 
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const hasil = angka.filter( a => a > 5); // mencari angka yang lebih dari 5 hasil : 8,9,9
.map(a => a * 3); // setiap angka yang dicari lalu dikalikan 3 hasil :  24, 27, 27
.reduce((acc, curr) => acc + curr); //jumlah semua angka tadi dan hasilnya : 78
console.log(hasil);



