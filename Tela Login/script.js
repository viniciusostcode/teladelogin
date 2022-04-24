function CampoNulo() {
    
    if(document.getElementById("nome").value == ""){
        window.alert('Por favor digite seu login!');
    } else{ 
        if(document.getElementById("senha").value == ""){
            window.alert('Por favor digite sua senha!');
        } else{ 
            window.alert('Login Aceito!');
        }
        
    }
    
}