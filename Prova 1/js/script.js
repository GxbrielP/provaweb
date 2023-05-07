function assignValues(){
    sessionStorage.setItem("usuario", document.getElementById('usuario').value);
    sessionStorage.setItem("senha", document.getElementById('senha').value);
    sessionStorage.setItem("grau", document.getElementById('grau').value);
    sessionStorage.setItem("data", document.getElementById('data').value);

    let sexo = document.getElementsByName('sexo');
    let sexoValue;
    for (let i=0; i<sexo.length;){
        if (sexo[i].checked){
            sexoValue = sexo[i].innerHTML;
        }
    }
    console.log(sexoValue)
    sessionStorage.setItem("sexo", sexoValue);


    let estado = document.getElementsByName('estado');
    let estadoValue;
    for (let i=0; i<estado.length;){
        if (estado[i].checked){
            estadoValue = estado[i].innerHTML;
        }
    }
    console.log(estadoValue)
    sessionStorage.setItem("estado", estadoValue);

}