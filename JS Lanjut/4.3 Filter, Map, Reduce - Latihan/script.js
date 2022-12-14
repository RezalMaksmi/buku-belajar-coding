// ambil semua element vidio
const vidios = Array.from(document.querySelectorAll('[data-duration]'));
// Array.from artinya rubah data node list menjadi array


// pilih hanya yang js lanjutan
// const jsLanjut = vidios.filter(function(vidio){ // a merepresentasi dari tiap" element didalam angka 
// 	return vidio.textContent.includes('JAVASCRIPT LANJUTAN');
// 	// mengambil data dengan text/nama judul menggunakan = textContent.includes('')
// })
// console.log(jsLanjut)

let jsLanjut = vidios.filter(vidio =>  
	vidio.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil duration masing" vidio

.map(item =>
	item.dataset.duration)

// ubah durasi menjadi integer kemudian ubah menit menjadi detik

.map(waktu => {
	// 10:30 -> [10, 30] =split
	const parts = waktu.split(':').map(part => parseFloat(part))//tiap" element dijadikan float / bilangan angka
	return (parts[0] * 60) + parts[1]})


// jumlahkan semua detiknya

.reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik

const jam = Math.floor(jsLanjut/3600);
jsLanjut = jsLanjut - jam * 3600
const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60
// console.log(jam)
// console.log(menit)
// console.log(detik)


//  simpan di DOM

const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} jam,${menit} menit,${detik} detik` // menampilkan

const jumlahVidios = vidios.filter(vidio => vidio.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pVidio = document.querySelector('.jumlah-vidio')
pVidio.textContent = `${jumlahVidios} Vidio.`