// var mobil={
//     warna:'merah',
//     tipe:'tipe',
//     plat:'B 1234 CDE',
//     Interior : {
//         wangi:'lavender',
//         jok:'kulit'
//     }
// }

//latihan soal

// var diriku = {
//     namaful: function(){
//         return this.nama.depan+' '+this.nama.belakang
//     }
//     ,nama: {
//         depan: 'Anton',
//         belakang: 'Aulia'
//     },
//     pekerjaan: 'trader',
//     hobby: 'makan'
// }

// console.log('namaku adalah ' + diriku.nama.depan + ' ' + diriku.nama.belakang)
// console.log('aku adalah seorang ' + diriku.pekerjaan)
// console.log('aku senang ' + diriku.hobby)
// console.log('nama ku adalah '+diriku.namaful())

// class human{
//     constructor(a,b,c){
//         this.nama=a,
//         this.pekerjaan=b,
//         this.hobby=c
//     }
// }

// var orang= new human('bill gates','pedagang','jadi kaya')

// console.log(typeof orang)

var pos=0
var neg=0

function sumFn(x){
    for(i=0;i<x.length;i++){
        if (x[i]>=0){
            pos+=x[i]
        }else if (x[i]<0){
            neg+=x[i]
        }else{
            console.log('error')
            return
        }
    }
    return hasil=[pos,neg]
}

console.log(sumFn([1,4,-3,-4]))