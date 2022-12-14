
// function Mahasiswa(nama,energy){

// 	this.nama = nama; // membuat properti mahasiswa.nama diisikan dengan (nama)
// 	this.energy = energy; // membuat properti mahasiswa.energy diisikan dengan (energy)
// }

// Mahasiswa.prototype.makan = function(porsi){
// 	this.energy += porsi
// 	return `halo ${this.nama}, selamat makan`
// }

// Mahasiswa.prototype.jalan = function(jam){
// 	this.energy -= jam
// 	return `halo ${this.nama}, kamu olahraga ${jam} jam`
// }

// Mahasiswa.prototype.tidur = function(jam){
// 	this.energy *= jam
// 	return `halo ${this.nama}, kamu tidur ${jam} jam`
// }

// let rezal = new Mahasiswa('Rezal', 10)

// cara pembuatan dengan class

class Mahasiswa{
	constructor(nama, energy){
		this.nama = nama
		this.energy = energy
	}

	makan(porsi){
		this.energy = this.energy + porsi;
		return `halo ${this.nama}, selamat makan!`
	}
	main(jam){
		this.energy = this.energy - jam
		return `anda bermain ${jam} jam`
	}
}

let rezal = new Mahasiswa('Rezal', 10)
let andi = new Mahasiswa('Andi', 29)
