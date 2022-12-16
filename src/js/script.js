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
    const input = document.getElementsByName('input');
    const erro = document.getElementsByName('erro');

    input.forEach(function(input, i) {
        if(input.value == "") {
            input.classList.remove('verde');
            input.classList.add('vermelho');
            erro[i].classList.add('ativa');

        } else {
            input.classList.add('verde');
            erro[i].classList.remove('ativa');
        }
    });
};