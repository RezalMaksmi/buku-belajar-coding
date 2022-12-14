// DOM Selection
// document.getElementById()  --> dan mengembalikan element

const judul = document.getElementById('judul')
judul.style.color ='blue';


// document.getElementsByTagName()  --> dan mengembalikan HTMLCollection
const p = document.getElementsByTagName('p')
// hasil => HTMLCollection [p.p1, p.p2, p.p3, p]

// p.style.backgroundColor = 'blue';
// kode di atas error dikarenakan yang dapat di berikan style adalah berupa element 
// sedangkan kode diatas adalah seperti array yang menampung beberapa element p

// p[2].style.backgroundColor = 'green';
// p[2].style.color = 'white';
// solusinya dengan memanggil salah satu element html dengan menggunakan index ke berapa

// contoh jika ingin menampilkan semua tapi dengan menggunakan perulangan
for (var i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'red';
}


// document.getElementsByClassName() --> dan mengembaikan HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
// contoh mengubah text pada element menggunakan ClassName
// tetap menggunakan index[] karena getElementsByClassName mengembaikan HTMLCollection
p1.innerHTML = 'Ini perubahan dengan JS';
p1.style.color = 'white';

