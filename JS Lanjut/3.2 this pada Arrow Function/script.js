
// konsep this pada arrow function


// constructor function // tidak bisa menggunakan arrow function // tatapi kalau method bisa
// ========================
// untuk membuat arrow function tidak bisa begitusaja mengubah semua function menjadi arrow function
const Mahasiswa = function(){ // jika baris ini dirubah = () => maka akan eror
	this.nama = 'rezal'
	this.umur = 12
	console.log(this)

	// this.Hallow = function(){
	this.Hallow = () =>{	//arrow function
		console.log(`saya ${this.nama}, dan umur saya ${this.umur} tahun.`)
	}
}

const rezal = new Mahasiswa()

// arrow function tidak memiliki konsep this
// ||
// \/
// konsep diatas akan berbeda jika tidak menggunakan constructor function
// yaitu dengan object literal

const mhs1 = {
	nama :'Rezal',
	umur : 12,

	sayHellow: function(){ // dengan function biasa maka this ini menuju ke mhs1
		console.log(`saya ${this.nama}, dan umur saya ${this.umur} tahun.`)
	}

	// dan jika menggunakan arrow function

	sayHellow: () => { // dengan arrow function maka this langsung menuju window
		console.log(`saya ${this.nama}, dan umur saya ${this.umur} tahun.`)
	}
}


// contoh laimya
const Mahasiswa = function(){ 
	this.nama = 'rezal'
	this.umur = 12
	console.log(this)

	// function ekspression
	this.Hallow = function(){
		console.log(`saya ${this.nama}, dan umur saya ${this.umur} tahun.`)
	}
	 // function declaration
	 // setInterval yang otomatis akan dijalankan pada interval/menit tertentu
	//setInterval(function () { dan // jika menggunakan function biasa maka tidak bisa karena this mengacu ke window
	setInterval(()=> { //
		console.log(this.umur++)

		//console.log(this) = cara nge cek

	}, 500) // artinya jalankan dari function inisetiap setengah detik
	// dan disini saya membuat umur akan menambah setiap setengah detik
}

const rezal = new Mahasiswa()