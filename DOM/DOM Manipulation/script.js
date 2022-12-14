// DOM Manipulation

// =======================================================
// .createElement (membuat element baru seperti <div>, <p>, <h1>, dll)
// .createTextNode (menyimpan texs baru didalam variabel)
// .appendChild (menyimpan teks kedalam element)

// Buat element baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('ini paragraf baru');

// // simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

// // simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// ======================== .insertBefore ==========================

const liBaru = document.createElement('li');
const teksli = document.createTextNode('ini li baru')

liBaru.appendChild(teksli);
// <li> masukkan teks baru (teksli)

const sectionB = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)')

sectionB.insertBefore(liBaru, li2 )
// insertBefore = simpan element baru sebelum elemen apa
// artinya di section#b (sectionB) dan masukkan element li baru(liBaru) kedalam li2


// ========================= .removeChild ===========================

const sectionAremove = document.querySelector('section#a');
const removeLink = document.getElementsByTagName('a')[0];

sectionAremove.removeChild(removeLink);


// ========================= .replaceChild ===========================

const sectionBreplace = document.querySelector('section#b');
const p4 = sectionBreplace.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2 = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksh2);

sectionBreplace.replaceChild(h2Baru, p4)

pBaru.style.backgroundColor = 'red'
pBaru.style.color = 'white'

h2Baru.style.backgroundColor = 'blue'
h2Baru.style.color = 'white'

li2.style.backgroundColor = 'blue'
li2.style.color = 'white'

