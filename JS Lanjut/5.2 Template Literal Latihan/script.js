// Tamplate Literal
// -> menggunakan `` back tick
// -> Multi-line String / space
// -> Embeded Expression
// => HTML Fragments
// -> Expression Interpolation
// -> Tagged Template


// => HTML Fragments

// const mhs = {
// 	nama : 'Rezal Nur Syaifudin',
// 	umur : 19,
// 	nrp : '210762828288',
// 	email : 'rezalnurs@gmail.com'
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`

// console.log(el)

// jika ingin menampilkan di body \/
// document.body.innerHTML = el

// jika data yang ditampilkan lebihdari satu
// ||
// \/

// 2. Looping

// const mhs = [
// 	{
// 		nama: 'Rezal Nur Syaifudin',
// 		email: 'rezal@gmail.com'
// 	},
// 	{
// 		nama: 'Niko Santoso',
// 		email: 'NikoS@gmail.com'
// 	},
// 	{
// 		nama: 'Basori Anjay Mabar',
// 		email: 'basorianjaym@gmail.com'
// 	}
// ]

// const el = `<div class="mhs">
//   ${mhs.map(m => `<ul>
// 		<li>${m.nama}</li>
// 	   	<li>${m.email}</li>
// 	</ul>`).join('')} 
// </div>`

// langkah membuat perulangan untuk menampilkan data
/*
1. membuat ekspression panggil array mhs
2. dan di looping menggunakan map
	${mhs.map(m => `<ul>
		<li>${mhs.nama}</li>
	   	<li>${mhs.email}</li>
	</ul>`).join('')} 
3. .join dengan isi string kosong akan menghilangkan , koma



*/




// 3. Conditionals / if else
// ternary

// const lagu = {
// 	judul: 'maulana',
// 	penyanyi : 'Rezal',
// 	feat : ''
// }

// const el = `<div>
// 	<ul>
// 		<li>${lagu.penyanyi}</li>
// 	   	<li>${lagu.judul} ${ lagu.feat ? `(feat. ${lagu.feat})` : '' }</li> 
// 	</ul>
// </div>`

// document.body.innerHTML = el 

// cara pengkondisian
// ||
// \/
/*

	<li>${lagu.judul} ${lagu.feat ? '(feat. $lagu.feat)' : '' }</li>
	cetak li dengan judul kemudian jika ada feat maka tampilkan feat jika tidak maka kosongkan


*/


// 4. Nested
// HTML bersarang
const mhs = {
	nama : 'Rezal Nur Syaifudin',
	semester : 3,
	mataKuliah : [
	'mtk',
	'ipa',
	'fisika',
	'bahasa jawa'
	]
}

function cetakMatakuliah(mataKuliah) {
	return `
	<ol>
		${mataKuliah.map (mk => `<li>${mk}</li>`).join('')}
	</ol>
	`
}

const el = `<div>
	<h2>${mhs.nama}</h2>
	<span>Semester : ${mhs.semester}</span>
	<h4> Mata Kuliah : </h4>
	<ul>
		 ${cetakMatakuliah(mhs.mataKuliah)}
	</ul>
</div>`

/*
membuat function didalam ul 
*/

document.body.innerHTML = el 