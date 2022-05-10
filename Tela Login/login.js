function CampoNulo() {
    let nome = document.getElementById('nome');
    let senha = document.getElementById('senha');
    
    if(nome.value.length == ""){
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
            title: 'Hm... algo deu errado, por favor preencha o campo login com seu nome.'
          }); 
    } else{ 
        if(senha.value.length == ""){
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
                title: 'Hm... algo deu errado, por favor preencha o senha.'
              }); 
        } else{ 
            setTimeout(function() {
                // Do something after 5 seconds
                location.reload();//reload page
          }, 1000)
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Logado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
            background: '#00000052',
            color: 'white',
          
          })
        }
        
    }
    
}