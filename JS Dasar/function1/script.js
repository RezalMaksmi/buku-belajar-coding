// var a = parseInt(prompt('input sisi1'))
// var b = parseInt(prompt('input sisi2'))

// alert(volumekubus(a,b))
// alert(volumekubus(9,3))



// function volumekubus(sisi1, sisi2) {
// 	let volumeA = (sisi1 * sisi1 * sisi1) 
// 	let volumeB = (sisi2 * sisi2 * sisi2)
// 	let rumus = volumeA + volumeB

// 	return rumus
// }



// =========================================================
// refactory sederhana

var a = parseInt(prompt('input sisi1'))
var b = parseInt(prompt('input sisi2'))

alert(volumekubus(a,b))

function volumekubus(sisi1, sisi2) {

	return sisi1 * sisi1 * sisi1 + sisi2 * sisi2 * sisi2
}