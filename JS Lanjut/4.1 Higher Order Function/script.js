// Higher Order Function?
// =eloquentjavascript.net= "function yang beroperasi pada function yang lain. baik digunakan dalam argument, maupun sebagai return value"

// =sitepoint.com= "javascript memperlakukan function sebagai object."

// firs class function (inti dari java script)

function kerjakanTugas(matakuliah, selesai){
// function kerjakanTugas == disebut dengan Higher order function
// selesai == disebut dengan Callback
// function yang disimpan sebagai argumen disebut callback sedangkan function yang memiliki callback sebagai argument nya  itu kita sebut sebagai Higher Order Function 
	console.log(`mulai mengerjakan tugas ${matakuliah}...`)
	selesai()
}

function selesai(){
	alert('selesai mengerjakan tugas')
}

kerjakanTugas('ipa', selesai)


// cotoh:
for( let i = 1; i <= 10; i++){
	console.log(i) 
}// maka tampil i sebanyak 10x

// jika ingin merubah i menjjadi 100x maka akan merepotkan
// solusi
// ||
// \/

function repeatLog(n){
	for( let i = 1; i <= n; i++){
		console.log(i)
	}
}

repeatLog(1000)





// =========================================== //
function Confirmasi(){
	const ya = confirm('yakin ingin menghapus');
	ya == true
	if(ya) {
		console.log('yaa yakin')
	}else{
		console.log('tidak dihapus')
	}

}

Confirmasi()




