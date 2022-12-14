	const tbl = document.getElementById('tombol');
	// const body = document.querySelector('body');  atau bisa menggunakan document.body


	tbl.addEventListener('click',function(){
		// document.body.style.backgroundColor = 'black'
		// document.body.style.color = 'white'

		// document.body.setAttribute('class', 'black')
		// css termasuk atribut

		document.body.classList.toggle('black')
		// toggle adalah = kalau ada class nya hilangkan sebaliknya kalau tidak ada classnya maka tambahkan class
	
	})




const button = document.createElement('button')
const txtbutton = document.createTextNode('Tombol Warna')
const kotak = document.querySelector('.kotak')

button.appendChild(txtbutton)
button.setAttribute('type','button')
button.setAttribute('id','tblRandom')

tbl.after(button)

button.addEventListener('click',function(){
	const r = Math.round(Math.random() * 255 + 1)
	const g = Math.round(Math.random() * 255 + 1)
	const b = Math.round(Math.random() * 255 + 1)


	kotak.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})


const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('change', function(){
	// console.log(sMerah.value)
	const r = sMerah.value
	const g = sHijau.value
	const b = sHijau.value

	kotak.style.backgroundColor = 'rgb('+r+','+g+','+b+')'

})

sHijau.addEventListener('change', function(){
	// console.log(sMerah.value)
	const r = sMerah.value
	const g = sHijau.value
	const b = sHijau.value

	kotak.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

sBiru.addEventListener('change', function(){
	// console.log(sMerah.value)
	const r = sMerah.value
	const g = sHijau.value
	const b = sHijau.value

	kotak.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

