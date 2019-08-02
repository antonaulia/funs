// var bebek = 1000

// function nbulan(n) {
//     for (i = 0; i < n; i++) {
//         bebek = bebek * 0.8
//         bebek = bebek * 2
//     }
//     return bebek
// }

// console.log(nbulan(3))

// function babyshark() {
//     var du = 'doo '
//     var bbshk = ''
//     for (i = 0; i < 6; i++) {
//         arrayshark = ['baby shark ', 'mommy shark ', 'daddy shark ', 'grandma shark ', 'grandpa shark ', `let's go hunt `]
//         for (j = 0; j < 4; j++) {
//             bbshk += arrayshark[i]
//             for (k = 0; k < 6 && j < 3; k++) {
//                 bbshk += du
//             }
//             bbshk += '\n'
//         }
//     }
//     return bbshk
// }

// console.log(babyshark())


function dnaswap(str){
    str.toLowerCase()
    arr=str.split('')
    for(i=0;i<arr.length;i++){
        if (arr[i]=='t'){
            arr[i]='a'
        }else if (arr[i]=='a'){
            arr[i]='t'
        }else if (arr[i]=='g'){
            arr[i]='c'
        }else if (arr[i]=='c'){
            arr[i]='g'
        }
    }
return arr.join('')
}
console.log(dnaswap('tatatatagcgcgcgcgcg'))