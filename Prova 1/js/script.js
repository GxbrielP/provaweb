function assignValues(){
    localStorage.setItem("nome", document.getElementById('nome').value);
    localStorage.setItem("sobrenome", document.getElementById('sobrenome').value);
    localStorage.setItem("grau", document.getElementById('grau').value);
    localStorage.setItem("data", document.getElementById('data').value);

    let sexo = document.getElementsByName('sexo');
    let sexoValue;
    for (let i=0; i<sexo.length; i++){
        if (sexo[i].checked){
            sexoValue = sexo[i].value;
        }
    }
    console.log(sexoValue)
    localStorage.setItem("sexo", sexoValue);


    let estado = document.getElementsByName('estado');
    let estadoValue;
    for (let i=0; i<estado.length; i++){
        if (estado[i].checked){
            estadoValue = estado[i].value;
        }
    }
    console.log(estadoValue)
    localStorage.setItem("estado", estadoValue);

}

function onLoad() {
    const username = document.getElementById('username')
    let usuario = localStorage.getItem('usuario');
    if(usuario){
        username.innerText = usuario;
    }
    
    if (localStorage.getItem('colorDiv')){
        loadCustom();
        document.getElementById('pgcustom').checked = true;
    }
}

function loadCustom(){
    divs = document.getElementsByTagName('div');
    ps = document.getElementsByTagName('p');

    for (i = 0; i < divs.length; i++) {
        divs[i].style = 'background-color: ' + localStorage.getItem('colorDiv');
    }

    for (i = 0; i < ps.length; i++) {
        ps[i].style = 'background-color: ' + localStorage.getItem('colorDiv');
    }
    document.body.style = 'background-color: ' + localStorage.getItem('colorBody') + '; font-family: ' + localStorage.getItem('font');

}

document.addEventListener("DOMContentLoaded", function() {
    onLoad();
});

function register(){
    usuario = document.getElementById('usuario').value;
    senha = document.getElementById('senha').value;
    if (usuario === '' || senha === ''){
        alert("Informe os dados de autenticação");
    }
    else{
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);
        window.location.href = "index.html";
    }
}



function deleteCustom(){
    localStorage.removeItem('colorDiv');
    localStorage.removeItem('font');
    localStorage.removeItem('colorBody');
    location.reload();
}

function createCustom(){
    localStorage.setItem("colorDiv", "white");
    localStorage.setItem("font", "Helvetica");
    localStorage.setItem("colorBody", 'white');
    loadCustom();
}
