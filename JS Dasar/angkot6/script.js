
 var penumpang =['Rezal',undefined,'nur'];
// var penumpang =[]

var tambahPenumpang = function(namaPenumpang, penumpang){

	if (penumpang.length == 0) {
		// tambah penumpang
		penumpang.push(namaPenumpang)
		// kembalikan nilainya
		return console.log(penumpang)

	}else{
		for( var i=0; i < penumpang.length; i++){

			if (penumpang[i] == undefined) {

				penumpang[i] = namaPenumpang;

				return penumpang;
			
			}else if(penumpang[i] == namaPenumpang){
				console.log(namaPenumpang+' sudah berada di angkot ini')
				return penumpang;
			}

			else if( i == penumpang.length -1){
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang){
	if (penumpang.length === 0) {
		console.log('Angkot masih kosong')
		return penumpang;
	}
	else{

		for (var i = 0; i < penumpang.length; i++) {
		
			if( penumpang[i] === namaPenumpang ){
					penumpang[i] = undefined
			}
			else if( i == penumpang.length - 1) {
				console.log(namaPenumpang+' belum masuk angkot')
			}
			
		}
	}
	return penumpang;
}



// var penumpang =['Rezal',undefined,'nur'];

// var tambahPenumpang = function(namaPenumpang,penumpang){
// 	if (penumpang.length == 0) {
// 		penumpang.push(namaPenumpang);
// 		return penumpang;
// 	}else{

// 		for (var i = 0; i < penumpang.length; i++) {
// 			penumpang[i]
// 			if (penumpang[i] == undefined) {
// 				penumpang[i] = namaPenumpang;
// 				return penumpang;

// 			}else if( penumpang[i] == namaPenumpang){
// 				console.log(namaPenumpang+' Telah masuk angkot')
// 				return penumpang;

// 			}else if( i == penumpang.length - 1 && penumpang[i] != namaPenumpang){
// 				penumpang.push(namaPenumpang);
// 				return penumpang

// 			}
// 		}
		
// 	}
// }