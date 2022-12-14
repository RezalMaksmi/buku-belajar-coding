var tanya = true
while(tanya){

		// menangkap pilihan player
	var p = prompt('Pilih : gajah, semut, orang')

	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();

	if( comp < 0.34 ){
		comp = 'gajah'
	}else if( comp >= 0.34 && comp < 0.67 ){
		comp = 'orang'
	}else {
		comp = 'semut'
	}

	var hasil=''
	// menentukan rules
	if( p== comp ){
		hasil = 'seri'
	}else if(p== 'gajah'){
		if(comp == 'orang'){
			hasil ='menang'
		} else {
			hasil ='kalah'
		}
	// contoh menggunakan ternary
	// hasil = (comp == 'orang') ? 'menang' : 'Kalah';

	}else if(p== 'orang'){
		if(comp == 'gajah'){
			hasil ='kalah'
		} else {
			hasil ='menang'
		}
	}else if( p == 'semut'){
		hasil = (comp == 'orang') ? 'Kalah' : 'menang';
	}else{
		hasil = 'memasukkan pilihan yang salah'
	}

	// tampilkan hasilnya
	alert('kamu memilih : '+ p +' dan komputer memilih : '+comp+'\n Maka hasilnya kamu : '+hasil)

	tanya = confirm('Lagi?')
}
