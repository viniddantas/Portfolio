const camposDoFormulario = document.querySelectorAll("[required]")
const formulario = document.querySelector("[data-formulario]")
const botaoEnviar = document.querySelector("[data-botao-enviar]")

botaoEnviar.classList.add('formulario__botao-desabilitado')

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

function verificaCampo(campo){
    const campoDeErro = campo.parentNode.querySelector(".formulario__erro")
    campoDeErro.textContent = ''
    let mensagem = ""
    let formularioValido = true

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]){
            mensagem = mensagens[campo.name][erro]
            campoDeErro.textContent = mensagem
        }
    })
    
    camposDoFormulario.forEach(campo =>{
        if (campo.value.trim() === '' || campo.validity.typeMismatch == true) {
            formularioValido = false;
        }
    })

    if (formularioValido == true) {
        botaoEnviar.classList.remove('formulario__botao-desabilitado')
        botaoEnviar.classList.add('formulario__botao-ativo')
        botaoEnviar.disabled = false
    } else {
        botaoEnviar.classList.remove('formulario__botao-ativo')
        botaoEnviar.classList.add('formulario__botao-desabilitado')
        botaoEnviar.disabled = true
    }
}

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooLong: "O nome é muito grande.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido. Exemplo: user@mail.com",
        tooShort: "Por favor, preencha um e-mail válido.",
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        tooLong: "O campo assunto está muito grande"
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de mensagem não tem caractéres suficientes.",
        tooLong: "O campo de mensagem deve conter no máximo 300 caracteres"
    },
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooLong',
    'tooShort',
    'customError',
    'patternMismatch'
]

