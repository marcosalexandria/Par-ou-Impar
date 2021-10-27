function verificar(){
    let valor = Number(document.getElementById("valor").value)
    let res = document.getElementById("res")
    
    if(valor == "" || valor == isNaN(valor)){
        alert("Preencha o campo corretamente.")
    } else if(valor % 2 == 0){
        res.innerHTML = `Resposta: <strong>${valor} é Par.`
    } else{
        res.innerHTML = `Resposta: <strong>${valor} é Impar.`
    }

}
document.getElementById("verificar").addEventListener('click', verificar)