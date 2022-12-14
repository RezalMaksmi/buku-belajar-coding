// Tagged Tamplate

/*
Bentuk yang lebih kompleks dari template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function

*/

const nama = 'Rezal Nur Syaifudin';
const umur = 19

//function coba(namaParam, nama, umur){ 
// tag template bisa menerima parameter, disini menggunakan contoh namaParam, dan nama untuk menerima expression ${nama}, dan parameter umur untuk menerima expression ${umur}

// dengan penulisan function dan parameter diatas akan banyak menerima isi parameter dan kita tidak tau berapa banyak sehingga java script yang baru mempunyai sebuah argument yang namanya rest parameter (...namavariabel) contoh penulisan dengan titik 3 kali dan nama variabel bebas

function coba(namaParam, ...values){ // dengan menggunakan rest parameter tidak perlu menulis parameter 1/1

	// return values
/*
	let result = ''
	namaParam.forEach((str, i) => { // nama param dan i sebagai index looping
		result = result + `${str} ${values[i] || ''}`

		// ${values[i] || ''} == artinya jika values ada isinya maka tampilkan || jika tidak maka kosongkan ''
	})
	return result
*/

	// cantoh menggunakan reduce
	return namaParam.reduce((result, str, i) => 
		`${result}${str}${values[i] || ''}`, '')
}


const str = coba `hai nama saya ${nama}, saya umur ${umur} tahun`

console.log(str);


/*cara merubah menggunakan tagged template

const str = `hai nama saya ${nama}, saya umur ${umur} tahun`

menulis nama functionya di depan str nya
||
const str = coba `hai nama saya ${nama}, saya umur ${umur} tahun`

*/