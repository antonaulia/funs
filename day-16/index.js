// function sortdup(arr,b){
//     var temp
//     var sort=true
//     while(sort){
//     sort=false
//     for (i=0;i<=arr.length;i++){
//         if (arr[i]>arr[i+1]){
//             temp = arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             sort=true
//         }
//     }}
//     return arr
// }

// a=[0,8,9,4,2,7,5,1,3,10,6]
// console.log(a.sort())
// console.log(sortdup(a))

// arr=[3,7,10,6,4]

// function maxsecond(arr){
//     arsort = arr.sort(function(a, b){return a - b})
//     return arsort[arr.length-1]-arsort[arr.length-2]
// }

// console.log(maxsecond(arr))

// function mumble(str) {
//     var hasil = []
//     var strhasil = ''
//     for (i = 0; i < str.length; i++) {
//         hasil[i] = str.slice(i, i + 1)
//     }
//     for (j = 0; j < str.length; j++) {
//         strhasil += hasil[j].toUpperCase()
//         for (k = 0; k <j; k++) {
//             strhasil += hasil[j]
//         }
//         strhasil+='-'
//     }
//     console.log(strhasil.slice(0,-1))
// }
// mumble('fgji')

var num = 7615
var nummax =[]
var nummin=[]
var i=0
function kaperkars(n) {
    do {
        nummin = parseInt(n.toString().split('').sort().join(''))
        nummax = parseInt(n.toString().split('').sort().reverse().join(''))
        console.log(i+1+'. '+nummax+' - '+nummin+' = '+ (nummax-nummin))
        n=nummax-nummin
        i++
    } while (n!=6174)
    return console.log(i+'|||  '+n)
}
kaperkars(9451)