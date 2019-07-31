// function plusminus(x) {
//     var hasil=0
//     for (i = 0; i < x.length; i++) {
//         if (i % 2 == 0) {
//             hasil += x[i]
//         } else {
//             hasil -= x[i]
//         }
//     }
//     return hasil
// }

// console.log(plusminus([1, 2, 3, 4]))

// var a={
//     warna:'hitam',
//     size:'l',
//     harga:12000,
//     ongkir:20000
// }

// var b={
//     warna:'putih',
//     size:'m',
//     harga:15000,
//     ongkir:32000
// }

// var c={
//     warna:'abuabu',
//     size:'s',
//     harga:13000,
//     ongkir:17000
// }

// var arr=[a,b,c]

// console.log(arr[3].harga)

// class mobil{
//     constructor(warna,tipe,merek,tahun){
//         this.color=warna,
//         this.type=tipe,
//         this.brand=merek,
//         this.year=tahun
//     }
// }

// var data=[
//     new mobil('hitam','sedan','bmw','2003'),
//     new mobil('merah','SUV','yamaha','1920'),
//     new mobil('putih','city','polygon','2019')
// ]

// function displaydata(data){
//     disdata=''
//     for (i=0;i<data.length;i++){
//         //disdata+=i+1+'. warna :'+data[i].color+', tipe : '+data[i].type+', Brand : '+data[i].brand+', tahun : '+data[i].year+'\n'
//         disdata+=`${i+1}. warna : ${data[i].color}, tipe : ${data[i].type}, Brand: ${data[i].brand}, tahun : ${data[i].year}\n`
//     }
//     return disdata
// }

// console.log(displaydata(data))

// var a={
//     warna:'hitam',
//     size:'l',
//     harga:12000,
//     ongkir:20000
// }

function median(x){
    x.sort(function(a, b){return a - b})
    console.log(x)
    if(x.length%2==0&&x.length>=3){
        return median = (x[x.length/2]+x[(x.length/2)-1])*0.5
    }else if(x.length%2!=0){
        return median=x[(x.length/2)-0.5]
    }else if(x.length==1){
        return median=x[1]
    }
}

console.log(median([1,2,5,4,8,7,9,6,10,15,14,13,12,11,3,16]))