// membuat Object
// 1. Object Literal

var mhs1 = {

	nama : "Rezal Nur",
	npm : "210403010037",
	gmail : 'rezalnurs@gmail.com',
	jurusan : 'Teknik Informatika',
}

var mhs2 = {

	nama : "Syaiudin Nur",
	npm : "210403010037",
	gmail : 'nursyaifudin@gmail.com',
	jurusan : 'Teknik Informatika',
}



// 2. function Declaration
function buatObjectMahasiswa(nama, nrp,email,jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;

	return mhs;
}

var mhs3 = buatObjectMahasiswa('Rezal','0987654','email','Teknik Informatika')
var mhs4 = buatObjectMahasiswa('Rezal','0987654','email','Teknik Informatika')



// 3. Constructor
// hampir sama dengan function declaration

function Mahasiswa(nama, nrp, email, jurusan){
	// var this = {} (anggap saja sudah dibikinkan declaration this, yang tidak perlu kita tulis)

	this.nama =nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;

	// return this (tidak perlu ditulis)
}
//  dan cara mengisi value wajib menggunakan new, jika tidak menggunakan new maka akan dianggap mengisi seperti halnya function declaration yang memerlukan declarasi dan return
var mhs5 = new Mahasiswa('Rezal','0987654','email','Teknik Mesin');
