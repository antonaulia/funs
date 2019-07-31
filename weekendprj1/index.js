function hapusvocal(s) {
    var ilangvocal = ''
    ilangvocal = s.replace(/[aiueo]/g, '')
    return ilangvocal
}

function parkir(jam) {
    var harga
    if (jam <= 2) {
        harga = 2000 * jam
    } else if (jam > 2) {
        harga = 4000 + 500 * (jam - 2)
    }
    return harga
}

function ganjilgenap(x) {
    if (x % 2 == 0) {
        hasil = 'angka anda genap'
    } else {
        hasil = 'angka anda ganjil'
    }
    return hasil
}

function maxnum(x1, x2, x3) {
    if (x1 > x2 && x1 > x3) {                   //math.max
        besar = x1
    } else if (x2 > x1 && x2 > x3) {
        besar = x2
    } else if (x3 > x1 && x3 > x2) {
        besar = x3
    }
    return besar
}

function filterstring(x){
    z = x.filter(Number)
    return z
}

function removechar(x){
    char=x.slice(1,x.length-1)
    return char
}

console.log(hapusvocal('antonius ferianto aulia'))
console.log(parkir(2))
console.log(ganjilgenap(6))
console.log(maxnum(9, 7, 3))
console.log(filterstring([1,2,3,4,5,'nan']))
console.log(removechar('abcdefghijklmnopqrt'))