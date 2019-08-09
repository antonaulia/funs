function bulan(n,p,d,t){
    var jumbebekinit=n
    var persenlahir=p
    var tambah=d
    var target=t
    var hasil=``
    totalbebek= jumbebekinit
    var i=0
    do{
        totalbebek+=(persenlahir/100)*totalbebek
        totalbebek+=tambah
        i++
    }while(totalbebek<target)
    return hasil =`Bebek akan mencapai ${target} dalam ${i} bulan`
}

    console.log(bulan(1500000,2.5,10000,2000000))
    console.log(bulan(1000,5,50,1200))


