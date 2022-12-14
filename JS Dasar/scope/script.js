
// global scope / window scope
// var a = 1;

// function tes() {
// 	// name conflict

// 	// membuat variabel lokal didalam function 
// 	var a = 2
// 	console.log(window.a)
// 	// tampil 1
// 	// karena window.a adalah program untuk memanggil variabel/nilai yang diluar function (global scope)
// }

// tes()

function faktorial(n){
	if (n === 0) return 1
		return n * faktorial(n-1)

	// console.log(faktorial(n));

}

console.log(faktorial(5))


