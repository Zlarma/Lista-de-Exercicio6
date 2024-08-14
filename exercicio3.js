let res = document.getElementById('res')

function resove(){
    
    let resul = []
    let vetor1 = [ 1, 2, 3, 4, 5 ]
    for (i=0;i<5;i++){
        resul[i] = vetor1[i] + 7 
    }
    console.table(resul)
    res.innerHTML = "<br>" +"EL RESULTADO  é de " + "[" + resul+"]"
}
fc()

