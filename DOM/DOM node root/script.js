// mengubah node root

// misal kita ingin mengubah paragraf 4 
// kita bisa menggunakan 
// getElementsByTagName('p')
// querySelectorAll('p')

// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor ='lightblue';

// kita bisa mengubah node root dengan mempersempit penelusuran dengan pembungkus yang membungkus semua element yang ingin ditargetkan

const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';