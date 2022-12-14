const kotak = document.getElementById('kotak')
const ul = document.getElementsByTagName('ul')[0]

kotak.addEventListener('click', function(){
	ul.classList.toggle('active')
})