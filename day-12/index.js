// function fibo(l){
//     base=[0,1]
//     if (l>2){
//         for(i=2;i<l;i++){
//             base.push(base[i-2]+base[(i-1)])
//         }
//         return console.log(base)
//     }else if(l==2){
//         return console.log(base)
//     }else {
//         return console.log('error ! ')
//     }
// }

// fibo(10)

const Palindrome = (kata) => {
    const karakter =
        kata.toLowerCase().replace(/[^a-z]/g, '').split('');
    if (karakter.join('') === karakter.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
const hasil = Palindrome("apaan");
console.log(hasil);