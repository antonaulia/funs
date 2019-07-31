function jumlahalpha(st){
    alfabet=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
    str=st.split(``)
    var hasil=0
    for(i=0;i<st.length;i++){
        if(str[i]==alfabet[i]){
            hasil+=(i+1)
        }
    }
    return hasil
}

function jumlahalphagenap(st){
    alfabet=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
    str=st.split(``)
    var hasil=0
    for(i=0;i<st.length;i++){
        if(str[i]==alfabet[i]&&i%2==0){
            hasil+=(i+1)
        }
    }
    return hasil
}

function jumlahalphastringindganjil(st){
    alfabet=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
    str=st.split(``)
    var hasil=0
    for(i=1;i<=st.length;i++){
        if(i%2!=0){
            hasil+=alfabet.indexOf(str[i-1])+1
        }
    }
    return hasil
}

console.log(jumlahalpha('abc'))
console.log(jumlahalphagenap('abcccb'))
console.log(jumlahalphastringindganjil('aabfc'))