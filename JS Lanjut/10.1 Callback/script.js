/* callback
"Function yang dikirimkan sebagai parameter pada function yang lain"

"Function yang dieksekusi setelah fungsi lain selesai dijalankan"

*/

// contoh Synchronous Callback 
// Synchronous Callback jarang digunakan, dan yang akan sering digunakan adalah Asynchronous Callback
function halo(nama){
    alert(`halo ${nama}`)
}

function tampilkanPesan(callback){
    const nama = prompt('Masukkan Nama : ')
    callback(nama)
}

tampilkanPesan(halo)
