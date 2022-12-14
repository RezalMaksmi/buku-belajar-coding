// arrow function adalah Bentuk lain yang lebih ringkas dari function expression
// atau membuat function yang lebih ringkas

// perbandingan function expression dengan arrow function

// function expression
let tampilPesan = function (nama){
	alert(`halo ${nama}`);
} 
tampilPesan('rezal nur s');

// arrow function
let tampilPesan = (nama) =>{
	alert(`halo ${nama}`);
}
tampilPesan('Syaifudin')


// ========================================
// contoh
const tampilPesan = function(nama){
	return `halo, ${nama}`
}
console.log(tampilPesan('Rezal'))

// =========================================
//const tampilNama = (nama) =>{ // jika parameternya 1 yaitu nama saja maka tidak perlu kurung tidak masalah
const tampilNama = nama =>{
	return `Halo ${nama}`
}
console.log(tampilNama('Rezal Nur S'))

// 
const salam = (nama,waktu) =>{ // kalau parameternya ada 2, harus memakai kurung
	return `halo, ${nama} selamat ${waktu}`;
}
console.log(salam('Rezal','Malam'));


// =============================================
// implisit return
const tampilNama = nama => `Halo ${nama}`
// tanpa kurung kurawal dan return 
console.log(tampilNama('Rezal Nur S'))


// jika tanpa parameter, wajib menggunakan kurung () isinya kosong
const tampilSalam = () => `Halo Rezal`
console.log(tampilSalam())




// ========================================
let mahasiswa = ['rezal','andika','kurniawan']
// let jumlahHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// })

let jumlahHuruf = mahasiswa.map(nama => nama.length)
console.log(jumlahHuruf);

// ================================
let mahasiswa = ['rezalnur', 'andika sputra', 'paijo asekkk']

let tampilkan = mahasiswa.map(nama => ({ nama:nama, jumlahHuruf:nama.length /* ini mengembalikan object */  }))
// console.log(tampilkan);


console.table(tampilkan);
