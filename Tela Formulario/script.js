function CampoVazio (){
    if(document.getElementById("nome").value == ""){
    alert('Por favor, preencha o campo nome');
    document.getElementById("nome").focus();
    return false
    }
    if(document.getElementById("email").value == ""){
        alert('Por favor, preencha o campo Email');
        document.getElementById("email").focus();
        return false
        }
        if(document.getElementById("senha").value == ""){
            alert('Por favor, preencha o campo senha');
            document.getElementById("senha").focus();
            return false
            }
            if(document.getElementById("Confirmsenha").value == ""){
                alert('Por favor, confirme sua senha');
                document.getElementById("Confirmsenha").focus();
                return false
                }
    }
function Nomeinvalido(){
    if(document.getElementById("nome").value == "/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi"){
        alert('Por favor, Digite um nome válido');
        document.getElementById("nome").focus();
        return false
        }
}