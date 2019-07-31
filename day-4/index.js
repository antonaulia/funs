// function segitiga(x) {
//     hasil = ''
//     for (i = 0; i < x; i++) {
//         hasil += '* '
//         for (j = 0; j < i; j++) {
//             hasil += '* '
//         }
//         hasil += '\n'
//     }
//     return hasil
// }

// console.log(segitiga(5))
// console.log(hasil)


// function total(x, y) {
//     z = x + y
//     return z
// }
// console.log(total(4, 5))
// console.log(z)

// d= new Date()
// a= d.getDate()
// b= d.getMonth()+1
// c= d.getFullYear()
// console.log(a+'-'+b+'-'+c)

// var buah = ['Jeruk','Nanas','Apel'];
// console.log(buah)
// buah.pop();
// console.log(buah)
// buah.push('Kiwi');
// console.log(buah)

// var buah = ['Jeruk','Nanas','Apel'];
// console.log(buah)
// buah.shift();
// console.log(buah)
// buah.unshift('Lemon');
// console.log(buah)

// var arr=[]

// for(i=0;i<=8;i++){
//     arr[i]=(i+1)*3
// }


// function tampil(x){
//     for(i=0;i<x.length-1;i++){
//         console.log(x[i])
//     }
// }

// tampil(arr)

// hari=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
// x= new Date()
// h=x.getDay()
// tgl=x.getDate()
// bln=x.getMonth()+1
// thn=x.getFullYear()
// console.log(x)
// console.log('Hari ini adalah hari '+hari[h]+' tanggal '+tgl+' bulan '+bln+' tahun '+thn)

function multiple(x, y) {
    a = []
    for (i = 0; i < x; i++) {
        a.push(i + 1)
        console.log(a[i] * y)
    }
}

multiple(15, 0)