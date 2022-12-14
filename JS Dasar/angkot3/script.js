var noAngkot=1
var angkotBeroperasi=6
var jmlAngkot=10

for (var noAngkot; noAngkot <= jmlAngkot ; noAngkot++) {
	if (noAngkot <= angkotBeroperasi) {
		console.log('Angkot no. '+noAngkot+' beroperasi dengan baik.')
	}else{
		console.log('Angkot no. '+noAngkot+' tidak beroperasi dengan baik.')
	}
}