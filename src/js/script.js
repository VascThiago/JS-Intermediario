//Máscara para o telefone
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

// Validação dos campos
function validar() {    
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');
    const erro = document.getElementsByName('erro');

    console.log(erro);

    if(nome.value == "") {
        nome.classList.remove('verde');
        nome.classList.add('vermelho');
        erro[0].classList.add('erro');
        erro[0].innerHTML = "campo obrigatório";
    } else {
        nome.classList.add('verde');
        erro[0].classList.remove('erro');
        erro[0].innerHTML = "";
    }
    
    if(email.value == "") {
        email.classList.remove('verde');
        email.classList.add('vermelho');
        erro[1].classList.add('erro');
        erro[1].innerHTML = "campo obrigatório";
    } else {
        email.classList.add('verde');
        erro[1].classList.remove('erro');
        erro[1].innerHTML = "";
    }

    if(telefone.value == "") {
        telefone.classList.remove('verde');
        telefone.classList.add('vermelho');
        erro[2].classList.add('erro');
        erro[2].innerHTML = "campo obrigatório";
    } else {
        telefone.classList.add('verde');
        erro[2].classList.remove('erro');
        erro[2].innerHTML = "";
    }

    if(mensagem.value == "") {
        mensagem.classList.remove('verde');
        mensagem.classList.add('vermelho');
        erro[3].classList.add('errotextarea');
        erro[3].innerHTML = "campo obrigatório";
    } else {
        mensagem.classList.add('verde');
        erro[3].classList.remove('erro');
        erro[3].innerHTML = "";
    }
}
