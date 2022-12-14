 /* const box = document.querySelector('.box')
 box.addEventListener('click',function(){ // ini tidak bisa menggunakan arrow function!!
 	// karena arrow function tidak memiliki konsep this
 	this.classList.toggle('size');
 	// toggle artinya akan menambahkan kelas baru jika belum ada !! atau !! dia akan menghilangkan class jika ada 
 	
 	setTimeout( () => { // fungsi setTimeout ini menunggu berapa detik kemudian jalankan sebuah function
		this.classList.toggle('caption')
	}, 600)// o.6 detik
 }) */

 // hasil diatas sudah berjalan, tetapi lebih sempurna kode berikut ini
 const box = document.querySelector('.box')
 box.addEventListener('click',function(){

 	let satu = 'size'
 	let dua = 'caption' 

 	if (this.classList.contains(satu)) {
 		[satu, dua] = [dua, satu] // menukar jika satu maka jadi dua, begitu sebaliknya
 	}

 	this.classList.toggle(satu);

 	setTimeout( () => { 
		this.classList.toggle(dua)
	}, 600)// o.6 detik
 })