const p3 = document.querySelector('.p3');

function ubahWarna3() {
	p3.style.backgroundColor = 'blue';
	p3.style.color = 'white';

}

function ubahWarna2() {
	p2.style.backgroundColor = 'blue';
	p2.style.color = 'white';

}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna2;





const p4 = document.querySelector('section#b p');
// js carikan element p4 kemudian ketika ada event 'klik' lakukan sesuatu
p4.addEventListener('click', function(){

	const liBaru = document.createElement('li');
	const teksli = document.createTextNode('ini teks baru')

	liBaru.appendChild(teksli);

	const ul = document.querySelector('section#b ul');
	ul.appendChild(liBaru)
})


// perbedaanya
// Event Handler (inline html attribute, element method)  = merupakan cara lama
// walaupun apa yang dilakukan event handler bisa juga dilakukan oleh addEventListener()

// perbedaanya ketika kita memberikan lebih dari satu perubahan pada sebuah event
// jika kita menggunakan event Handler = maka perubahan yang terakhir akan menimpa perubahan sebelumnya
// contoh :
	const p3 = document.querySelector('.p3');
	p3.onclick = function(){
		p3.style.backgroundColor = 'blue'
	}
// maka fungsi yang terakhir yang dikerjakan
	const p3 = document.querySelector('.p3');
	p3.onclick = function(){
		p3.style.color = 'white'
	}

// sedangkan menggunkan addEventListener() = akan menambah perubahanya (dari perubahan yang sebelumnya)
// contoh :
	const p3 = document.querySelector('.p3');
	p3.addEventListener('click',function(){
		p3.style.backgroundColor = 'red'
	})
// fungsi akan bertambah sesuai yang ditambahkan
	const p3 = document.querySelector('.p3');
	p3.addEventListener('click',function(){
		p3.style.color = 'red'
	})
