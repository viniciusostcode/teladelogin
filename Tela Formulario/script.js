function Validar (){
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    let Confirmsenha = document.getElementById('Confirmsenha');
    let regexemail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if(nome.value.length == "" || nome.value.length <= 10){
    alert('Hm... algo deu errado, por favor preencha o campo nome ou tente digitar um nome válido.');
    } else {
        if(email.value.length == "" || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
    alert('Hm... algo deu errado, por favor preencha o campo email ou tente digitar um email válido.');
    } else {
        if(senha.value.length == ""){
    alert('Por favor, digite sua senha!');
    } else {
        if(Confirmsenha.value.length == "" ){
    alert('Por favor, confirme sua senha!');
   } else {
        alert('Cadastrado com sucesso!');
        location.reload();
    }
} 
}
}
}


