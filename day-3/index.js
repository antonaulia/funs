// for(i=1;i<=5;i++){
//     for (j=1;j<=5;j++){
//         console.log('*')
//     }
//     console.log('\n)

// var kata = 'abcde'
// var arr = ['andi','setto',5,false]

// console.log(arr[0])
// console.log(arr.length)
// console.log(kata.length)

// var x=[]
// for(i=0;i<13;i+=3){
//     x.push(i)
// }
// console.log(x)

// var hasil = ''
// for (i=0;i<5;i++){
//     hasil += '* '
//     for(j=0;j<i;j++){
//         hasil +='* '
//     }
//     hasil +='\n'
// }
// console.log(hasil)

// var hasil = ''
// for (i=5;i>0;i--){
//     hasil += 'A '
//     for(j=0;j<i;j++){
//         hasil +='C '
//     }
    
//     hasil +='\n'
// }
// console.log(hasil)
r=5

var hasil = ''
for (i=0;i<r;i++){
    hasil+='  '
    for(j=r-1;j>i;j--){
        hasil+='  '
    }
    for(k=0;k<j+1;k++){
        hasil+='* '
    }
    for(l=0;l<k-1;l++){
        hasil+='* '
    }
    for(m=r;m>k-1;m--){
        hasil+='  '
    }
    hasil+='\n'
}
console.log(hasil)