//  Faça um algoritmo que faça a o produto por 3 de todos os elementos do vetor
// empregando a lógica do laço “for”, dado o vetor1 = [ 1, 2, 3, 4, 5 ] e apresente na tela 
// para o usuário. Os dados serão inseridos diretamente no código pelo programador, ou seja, não
// haverá entrada de dados por parte do usuário.
// Observação: vetor1 * 3
let res = document.getElementById('res')

function resove(){
    
    let resul = []
    let vetor1 = [ 1, 2, 3, 4, 5 ]
    for (i=0;i<5;i++){
        resul[i] = vetor1[i] * 3
    }
    console.table(resul)
    res.innerHTML = "<br>" +"EL RESULTADO  é de " + "[" + resul+"]"
}
fc()

