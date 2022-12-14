// cara membuat object pada javascript
// 1. object literal
// kelemahan/PROBLEM : tidak efektif untuk object yang banyak/lebih dari 1



// 2. function declaration
// function declaration, kalian tidak perlu membuat duplikat kode(copas) untuk menambahkan suatu data, sehingga kode yang dihasilkan lebih rapi dan efisien

// kelemahan/PROBLEM : membuat function declaration tetap dibuatkan duplikatnya seperti membuat dengan object literal, tetapi dibalik layar, adapun solusinya seperti berikut.

const methodMahasiswa = {
	makan : function(porsi){
		this.energy += porsi; //this.energy = this.energy + porsi
		console.log(`Hallo ${this.nama}, selamat makan`);
	}, //jangan lupa titikkoma
	main : function(jam){
		this.energy -= jam
		console.log(`${this.nama}, bermain, energy berkurang menjadi ${this.energy}`);
	}
}

function Mahasiswa(nama,energy){
	let mahasiswa = Object.create(methodMahasiswa); // membuat variabel baru dan memanggil method dari luar dengan properti : Object.create(nama variabel  yang didalamnya ada method)

	mahasiswa.nama = nama; // membuat properti mahasiswa.nama diisikan dengan (nama)
	mahasiswa.energy = energy; // membuat properti mahasiswa.energy diisikan dengan (energy)

	// memanggil object dari luar dengan manual
	// mahasiswa.makan = methodMahasiswa.makan;

	// mahasiswa.main = methodMahasiswa.main
	
	return mahasiswa;
}

let rezal = Mahasiswa('Rezal', 20);
let nur = Mahasiswa('nur', 10);

// adapun kelemahanya kode diatas tetep melakukan 2x kerja
