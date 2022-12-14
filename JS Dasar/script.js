var noAngkot=1
var angkotBeroperasi=6
var jmlAngkot=10

while(noAngkot <= angkotBeroperasi){
	console.log('Angkot no. '+noAngkot+' beroperasi dengan baik.')
	noAngkot++

}
for (var noAngkot = angkotBeroperasi+1; noAngkot <= jmlAngkot; noAngkot++) {
	console.log('Angkot no. '+noAngkot+' sedang tidak beroperasi.')
}
