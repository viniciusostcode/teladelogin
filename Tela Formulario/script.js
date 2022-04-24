function CampoVazio (){
    if(document.getElementById("nome").value == ""){
    alert('Por favor, digite seu nome!');
    } else {
        if(document.getElementById("email").value == ""){
    alert('Por favor, digite seu email!');
    } else {
        if(document.getElementById("senha").value == ""){
    alert('Por favor, digite sua senha!');
    } else {
        if(document.getElementById("Confirmsenha").value == "" ){
    alert('Por favor, confirme sua senha!');
   } else {
        alert('Cadastrado com sucesso!');
        location.reload();
    }
} 
}
}
}


