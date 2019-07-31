// persegipanjang=(p,l)=>{                     //ini syntax buat fungsi yang kepake 
//     return p*l
// }



var arritem = ['jeruk', 'apel', 'leci']
var arrharga = [3000, 7000, 10000]
var menu = ''

function tambahitem(item, harga) {
    arritem.push(item)
    arrharga.push(harga)
    for (i = 0; i < arritem.length; i++) {
        menu += i + 1 + '. ' + arritem[i] + ' Rp.' + arrharga[i] + '\n'
    }
    return menu
}

console.log(tambahitem('mangga',12000))

var kota = ['medan', 'bandung', 'jakarta', 'palembang', 'manado', 'tangerang']
var kodepos = [11, 12, 13, 14, 15, 16]

function hapuskotakode(x) {
    kodepos.splice(kota.indexOf(x), 1)
    kota.splice(kota.indexOf(x), 1)
    console.log(kota)
    console.log(kodepos)
    return
}

// hapuskotakode('palembang'

function tampilitem(x){
    console.log(kota[kota.indexOf(x)]+' '+kodepos[kota.indexOf(x)])
}

tampilitem('jakarta')