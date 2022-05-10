function Validar(){
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    let Confirmsenha = document.getElementById('Confirmsenha'); 

    if(nome.value.length == "" || nome.value.length <= 10){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#00000052',
            color: 'white',
            font: 'Smooch Sans',
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: 'Hm... algo deu errado, por favor preencha o campo nome ou tente digitar um nome válido.'
          }); 
        } else {
        if(email.value.length == "" || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#00000052',
                color: 'white',
                font: 'Smooch Sans',
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Hm... algo deu errado, por favor preencha o campo email ou tente digitar um email válido.'
              }); 
    } else {
        if(senha.value.length == "" || senha.value.length <= 10 ){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#00000052',
                color: 'white',
                font: 'Smooch Sans',
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Hm... algo deu errado, por favor preencha o campo senha ou tente digitar uma senha com pelo menos 11 caracteres.'
              }); 
    } else {
        if(Confirmsenha.value.length == "" || Confirmsenha.value !== senha.value ){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#00000052',
                color: 'white',
                font: 'Smooch Sans',
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Hm... algo deu errado, as senhas não conferem.'
              }); 
   } else {
    setTimeout(function() {
        // Do something after 5 seconds
        location.reload();//reload page
  }, 1000)
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Seu cadastro foi concluído com sucesso.',
    showConfirmButton: false,
    timer: 1500,
    background: '#00000052',
    color: 'white',
  
  })
        
    }
} 
}
}
}

