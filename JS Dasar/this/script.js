// this adalah sebuah keywoard special yang secara otomatis itu di definisikan pada setiap function
// atau setiap kita membuat function/object menggunakan cara apapun itu otomatis ada keywoard this yang didefinisikan

// console.log(this);
// sama seperti dibawah ini
// console.log(window === this); hasilnya = true

// akan muncul object window / Global
// contoh :
var a = 10;
console.log(this.a);
console.log(window.a);
// contoh di atas sama, artinya adalah this dengan window sama




// ============================================================================
// membuat Object

// cara 1 ( function Declaration)
// function halo(){
// 	console.log('haloo dunia')
// }
// this.halo();
// this mengembalikan object Global




// cara 2 (object literal)
// var obj = {a : 10, nama : 'Rezal Nur syaifudin'};
// obj.halo = function(){
// 	console.log(this);
// 	console.log('Hallo');
// }
// obj.halo();




// cara 3 (constructor)
// function Halo(){
// 	console.log(this);
// 	console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat