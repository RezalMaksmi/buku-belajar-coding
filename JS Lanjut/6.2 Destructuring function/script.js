// Destructuring Assignment

// function penjumlahanPerkalian(a, b) {
// 	return [a + b, a * b]
// }
//console.log(penjumlahanPerkalian(2, 6)) // hasil [8, 12]
// const jumlah = penjumlahanPerkalian(2, 3)[0]
// const kali = penjumlahanPerkalian(2, 3)[1] 
// kode diatas cukup ribet karena harus menambahkan index[]

// console.log(jumlah)
// console.log(kali)

// dengan menggunakan destructuring

// const [jumlah, kali] = penjumlahanPerkalian(2, 3) // jika menggunakan array maka nama variabel didalam kurung siku harus benar/sesuai, jika salah maka hasilnya juga nggak sesuai

// console.log(jumlah)
// console.log(kali)

// Destructuring function return value
function kalulasi( angka1, angka2 ){
	return {
		tambah : angka1 + angka2,
		kurang : angka1 - angka2,
		kali : angka1 * angka2,
		bagi : angka1 / angka2
	}
}

const { tambah, kurang, bagi,kali} = kalulasi(3, 4)
console.log(tambah)
console.log(bagi)


// destructuring function argument
const mhs1 = {
	nama : 'Rezal',
	umur : 19,
	email : 'rezalnurs@gmail.com',
	nilai: {
		tugas: 80,
		uts : 85,
		uas: 75
	}
}

// jika menggunakan function declaration
// function cetakmhs( nama, umur){
// 	return `halo nama saya ${nama}, dan saya umur ${umur} tahun.`
// }
// console.log(cetakmhs(mhs1.nama, mhs1.umur))

// jika menggunakan Destructuring
function cetakmhs({nama, umur, nilai:{tugas, uts, uas}}){ // dipecah dengan menggunakan kurung kurawal
	return `halo nama saya ${nama}, dan saya umur ${umur} tahun yagess, dan nilai uas saya ${uas}`
}
console.log(cetakmhs(mhs1))
