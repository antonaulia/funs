function odd(x){
    var isi=1
    var temparr=[]
    var arr = []
    for (i=0;i<x;i++){
        for(j=0;j<=i;j++){
            temparr[j]=isi
            isi+=2
        }
        arr[i]=temparr
        temparr=[]
    }
    return arr
}

console.log(odd(5))