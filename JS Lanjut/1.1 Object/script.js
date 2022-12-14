// cara membuat object pada javascript
// 1. object literal

let mahasiswa = {
	// properti
	nama : 'Rezal',
	energy : 10,

	// kemudian kita bisa membuat method/fungsi yang ada didalam object :
	makan: function(porsi){
		this.energy = this.energy + porsi
		console.log(`Hallo ${this.nama}, selamat makan`);
	}
}
// jika ingin menambah mahasiswa yang ke dua dengan cara diatas sangat tidak baik, karena banyak tumpukan kode disetiap penambahan data selanjutnya (copas)

// 2. function declaration
// function declaration, kalian tidak perlu membuat duplikat kode(copas) untuk menambahkan suatu data, sehingga kode yang dihasilkan lebih rapi dan efisien

// contoh:
function Mahasiswa(nama,energy){
	let mahasiswa = {};
	mahasiswa.nama = nama; // membuat properti mahasiswa.nama diisikan dengan (nama)
	mahasiswa.energy = energy; // membuat properti mahasiswa.energy diisikan dengan (energy)

	mahasiswa.makan = function(porsi){
		this.energy += porsi; //this.energy = this.energy + porsi
		console.log(`Hallo ${this.nama}, selamat makan`);
	}
	mahasiswa.main = function(jam){
		this.energy -= jam
		console.log(`${this.nama}, bermain, energy berkurang menjadi ${this.energy}`);
	}
	return mahasiswa;
}

let rezal = Mahasiswa('Rezal', 20);
let nur = Mahasiswa('nur', 10);


// 3. Constructor Function (ketwor new)
// function ini hampir sama dengan function Declaration

function Mahasiswa(nama,energy){
	this.nama = nama; // membuat properti this.nama diisikan dengan (nama)
	this.energy = energy; // membuat properti this.energy diisikan dengan (energy)

	this.makan = function(porsi){
		this.energy += porsi; //this.energy = this.energy + porsi
		console.log(`Hallo ${this.nama}, selamat makan`);
	}
	this.main = function(jam){
		this.energy -= jam
		console.log(`${this.nama}, bermain, energy berkurang menjadi ${this.energy}`);
	}
}

let rezal = new Mahasiswa('Rezal', 20);// wjib menggunakan 'new'
let nur = new Mahasiswa('nur', 10);
// jika tidak menggunakan new maka nyangkanya instansiasi function declaration yang membutuhkan return

// Constructor Function ini yang akan sering dipakai