// function stringada(str) {
//     kata = str.split(' ')
//     katadicari=kata
//     kata.map((val1,idx1) => {
//         // console.log(val1)
//         // console.log(katadicari)
//         kata.map((val2,idx2) => {
//             if(idx1!=idx2){
//                 if (val2.includes(val1)) {
//                     console.log(val2+' '+val1)
//                 hasil=`kata ${val1} ada di dalam kata ${val2}`
//                 return hasil
//                 }
//             }
//         })
//     })
// }

function stringada(str) {
    kata = str.split(' ')
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < kata.length; j++) {
            if (i != j) {
                if (kata[j].includes(kata[i])) {
                    hasil = `kata ${kata[i]} ada di dalam kata ${kata[j]}`
                    return hasil
                }
            }
        }
    }
}

    console.log(stringada('there is an island'))