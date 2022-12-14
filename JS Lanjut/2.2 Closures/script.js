// closure?
// mozila = closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) didalam function tersebut  

// w3scool = adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi

// =================
// lexical scope

function init(){
	let nama = 'rezal'; //local variabel (variabel yang dibuat didalam function)

	function tampilNama(){ // inner function
		console.log(nama);
	}
	tampilNama();
}
init();

// function tampilNama() punya akses ke variabel nama padahal ada di luar function nya


function init(){
	let nama = 'rezal'; //local variabel (variabel yang dibuat didalam function)
	let umur = 50; // umur ini tidak masuk dalam closure

	function tampilNama(){ // inner function
		console.log(nama);
	}
	console.dir(tampilNama); // dir = akan menampilkan objectnya

	// hasil = didalam function init() ada closure
}
init();

// ============================================ //
function init(){
	let nama = 'rezal'; 
	function tampilNama(){ // inner function
		console.log(nama);
	}
	return tampilNama;
}
let tampil = init();
tampil()

// ============================================ //


// jika nama pingin sesuai input user
function init(){
	// let nama = 'rezal'; 
	function tampilNama(nama){ // inner function
		console.log(nama);
	}
	return tampilNama;
}
let tampil = init();
tampil('rezal')
tampil('nur')



// ============================================= //
// bisa diringkas lagi
function init(){
	return function(nama){ // inner function
		console.log(nama);
	}
}
let tampil = init();
tampil('rezal')
tampil('Syaifudin')


// alasan menggunakan closure
// == untuk membuat function factories
// == untuk membuat privat method

// 1 == untuk membuat function factories
function ucapkanSalam(waktu){

	return function(nama){
		console.log(`halo ${nama}, Selamat ${waktu}, semoga harimu indah`)
	}
}

//mengirim data di ucapkansalam
let selamatPagi= ucapkanSalam('pagi'); 
let selamatSiang= ucapkanSalam('siang');
let selamatMalam= ucapkanSalam('Malam');

selamatPagi('rezal')
selamatMalam('nur')


// 2 == untuk membuat privat method
let counter = 0;
let add = function(){
	return ++counter;
}
// counter = 100 // maka akan mennjadi masalah, karena mempengaruhi counter
console.log(add())
console.log(add())
console.log(add())

// solusinya
let add = (function(){
	let counter = 0;

	return function(){
		return ++counter; //dimulai dari 1
		// return counter++; dimulai dari 0
	};
	
})();
counter = 100; 
console.log(add());
console.log(add());
console.log(add());