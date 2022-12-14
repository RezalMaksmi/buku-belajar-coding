// Destructuring Assignment
/*

adalah expressionpada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variabel yang terpisah.

*/

/* contoh sederhana ingin menampilkan kde dibawah
const a = 'satu'
const b = 'dua'
const c = 'tiga'
*/

// dengan menggunakan destructuring assignment lebih sederhana seperti contoh dibwah ini :
const coba = ['satu','dua','tiga']

const [a,b,c] = coba
// dengan menggunakan destructuring assignment kita cukup menuliskan dengan kurung siku dan diikuti dengan nama" variabel yang ingin kita gunakan = kemudian kita assign dengan nama array == 'coba'

console.log(a) // satu
console.log(b) // dua
console.log(c) // tiga


// contoh jika kasus dengan Object caranya sama
// jika bentuknya object maka menggunakan kurung kurawal {  }
const mhs = {
	nama : 'Rezal Nur S',
	umur : 19,
	email : 'rezalnursyaifudincc@gmail.com'
}

const {nama, umur, email} = mhs // dan didalam kurung kurawal nama harus sama dengan properti didalam mhs/object nya
console.log(nama) // Rezal Nur S
console.log(umur) // 19
console.log(email) // rezalnurscc@gmail.com




// Destructuring Variabel / Assignment


// Destructuring Array

const perkenalan = ['Halo','nama','saya','Rezal']

// contoh dengan cara biasa
// const salam = perkenalan[0]
// const sapa = perkenalan[1]
// console.log(salam)


// contoh menggunakan estructuring Array
// const [sal,  nam, say, re] = perkenalan
console.log(sal)
console.log(re)

// skipping items
// ||
// \/
const [sal, , , re] = perkenalan
console.log(sal)
console.log(re)



// atau kita bisa melakukan swap items == menukar isi dari array
// swap items 
// contoh
var first = 1
var seccond = 2

// console.log(first,seccond) == 1, 2

[first , seccond] = [seccond , first];

console.log(first, seccond) // 2, 1


// return value pada function 
function coba(){
	return [1, 2]
}

const [satu, dua] = coba()
console.log(satu,dua)



// rest parameter
const [a, b, ...values] = [1, 2, 3, 4, 5, 6]
console.log( a )
console.log(values)

// destructuring object
const mhs ={
	nama : 'Rezal Nur Syaifudin',
	umur : 19,
	gmail : 
}

const {nama, umur} = mhs
console.log(nama, umur)

// nama didalam kurung kurawal harus sama untuk pemanggilan
// atau bisa di devinisikan dulu, seperti dibawah ini 

const {nama: n, umur: u} = mhs
console.log(n,u)


// atau bisa memberikan nilai default 
const {nama: n, umur: u, gmail: g = 'devault@gmail.com'} = mhs
console.log(n,u)


// atau bisa juga menggunakan rest parameter
const mhs ={
	nama : 'Rezal Nur Syaifudin',
	umur : 19,
	gmail : 'Rezal@gmail.com'
}
const {nama, ...values} = mhs
console.log(nama, values)



// Assignment tanpa declarasi object
({nama, umur } = {
	nama : 'Rezal',
	umur : 12
})
console.log(nama,umur)
// bisa menggunakan assignment seperti ini bila yan dibutuhkan simpel/ sedikit, jika banyak gunakan yang memakai declarasi object == const mhs = { nama: '', umur: , dll}




// mengambil field pada object, setelah dikirm sebagai parameter untuk function
const mhs ={
	nama : 'Rezal Nur Syaifudin',
	id : 19,
	gmail : 'Rezal@gmail.com'
}
/*cara biasa
function getmhs(mhs){
	return mhs.id
}
*/
// cara destructuring Assignment
function getmhs({id}){
	return id
}

console.log(getmhs(mhs))