// Template Literal / Template String
// Template Literal adalah string yang memungkinkan adanya expression didalamnya.

// String Literal 
// contoh
let nama = 'Rezal'
let nama = "Nur"
let nama = `Syaifudin` // `back tick` = Template Literal
// Template Literal
// -> menggunakan `` back tick
// -> multi-line String
// -> Embedded Exspression
// ->  HTML Fragments
// -> Expression Interpolation
// -> Tagged Template

// contoh yang bisa dilakukan Template Literal
`String Text`

`String Text baris 1
String Text baris 2  
String Text baris 3` // -> multi-line string = bisa meng enter tanpa menggunakan sintax atau \n

`String Text ${exspression} string text` // embedded exspression

tag `String Text ${exspression} string text` // tagged template

// Multi-line String (HTML Fragment)
// contoh
const mhs = {
	nama : 'Rezal Nur Syaifudin',
	umur : 19,
	NPM : '210762828288',
	email : 'rezalnurs@gmail.com'
}

let el = 
`<div class:"mhs">
	<h2>Nama : ${mhs.nama}</h2>
	<span class="nrp">NPM : ${mhs.NPM}</span>
</div>`

console.log(el)

// Embedded Expression
const nama = 'Rezal Nur Syaifudin'
let umur = 19
console.log(`halo, Nama saya ${nama}, saya umur ${umur} tahun`)


// Expression Interpolation
let a = 10
let b = 20
console.log(`jika a = 10 dan b = 20, hasilnya ${a + b}, dan bukan ${2 * a + b}`) 
// didalam dolar kurungk-urawal = sudah bisa melakukan interpolation exspression nya / penjumlahan

// contoh
const x = 11
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`)
// (apakah x sisabagi 2 samadengan 0) jika iya maka 'genap' jika tidak maka 'ganjil'





// cara men setting html jalan di javascript