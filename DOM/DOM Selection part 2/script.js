// DOM Selection

// querySelector()  --> menghasilkan sebuah element
// penggunaan sama seperti selector CSS (mencari p yang ada di dalam id #B)
const p4 = document.querySelector('#b p');
p4.style.color ='green'
p4.style.fontSize = '40px'
// querySelectorAll()  --> menghasilkan nodeList


const li = document.querySelector('#b ul li:nth-child(2)');
li.style.backgroundColor = 'yellow'

// const p = document.querySelector('p');
// p.innerHTML = 'Ini dirubah dengan JavaScript';
// Hasilnya tidak bisa merubah semua element p tetapi hanya merubah element pertama p

// solusinya dengan menggunakan querySelectorAll()  ==> akan memilih semua element yang ada di halaman 
const p = document.querySelectorAll('p');
// hasilnya = NodeList(4) [p.p1, p.p2, p.p3, p]
p[2].innerHTML = 'P dirubah dengan JavaScript';
// jika ingin mengubah semua element p maka dengan menggunakan perulangan for




