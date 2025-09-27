document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('contactForm');

    // Mapeia todos os campos do formulário pelo ID
    const campos = {
        usuario: document.getElementById('usuario'),
        nome: document.getElementById('nome'),
        senha: document.getElementById('senha'),
        renda: document.getElementById('renda'),
        email: document.getElementById('email'),
    };

    // Mapeia os elementos de feedback de erro.
    // Garanta que você tenha esses elementos no seu HTML, como <div id="erro_usuario"></div>
    const feedbacks = {
        usuario: document.getElementById('erro_usuario'),
        nome: document.getElementById('erro_nome'),
        senha: document.getElementById('erro_senha'),
        renda: document.getElementById('erro_renda'),
        email: document.getElementById('erro_email'),
    };

    // Adiciona o ouvinte de evento para o envio do formulário
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        let ehValido = true;

        // Limpa todos os erros no início para evitar mensagens antigas
        for (const key in campos) {
            const campo = campos[key];
            const feedback = feedbacks[key];

            campo.classList.remove('is-invalid', 'is-valid');
            if (feedback) {
                feedback.textContent = '';
            }
        }

        // --- Lógica de Validação ---

        // Validação de campos obrigatórios
        for (const key in campos) {
            const campo = campos[key];
            if (campo.value.trim() === '') {
                campo.classList.add('is-invalid');
                if (feedbacks[key]) {
                    feedbacks[key].textContent = 'Este campo é obrigatório.';
                }
                ehValido = false;
            }
        }

        // Validação do Email
        if (campos.email.value.trim() !== '' && (!campos.email.value.includes('@') || !campos.email.value.includes('.'))) {
            campos.email.classList.add('is-invalid');
            if (feedbacks.email) {
                feedbacks.email.textContent = 'Por favor, insira um email válido.';
            }
            ehValido = false;
        }

        // Validação da Senha
        const senhaValue = campos.senha.value;
        const senhaRegexMaiuscula = /[A-Z]/;
        const senhaRegexNumero = /[0-9]/;

        if (senhaValue.length > 0) {
            if (senhaValue.length < 8) {
                campos.senha.classList.add('is-invalid');
                if (feedbacks.senha) {
                    feedbacks.senha.textContent = 'A senha deve ter no mínimo 8 caracteres.';
                }
                ehValido = false;
            } else if (!senhaRegexMaiuscula.test(senhaValue)) {
                campos.senha.classList.add('is-invalid');
                if (feedbacks.senha) {
                    feedbacks.senha.textContent = 'A senha deve conter pelo menos uma letra maiúscula.';
                }
                ehValido = false;
            } else if (!senhaRegexNumero.test(senhaValue)) {
                campos.senha.classList.add('is-invalid');
                if (feedbacks.senha) {
                    feedbacks.senha.textContent = 'A senha deve conter pelo menos um número.';
                }
                ehValido = false;
            }
        }

        // Validação do Usuário
        const usuarioValue = campos.usuario.value;
        const usuarioRegexMaiuscula = /[A-Z]/;
        const usuarioRegexNumero = /[0-9]/;
        
        if (usuarioValue.length > 0) {
            if (usuarioValue.length < 8) {
                campos.usuario.classList.add('is-invalid');
                if (feedbacks.usuario) {
                    feedbacks.usuario.textContent = 'Nome de usuário deve ter no mínimo 8 caracteres.';
                }
                ehValido = false;
            } else if (!usuarioRegexMaiuscula.test(usuarioValue)) {
                campos.usuario.classList.add('is-invalid');
                if (feedbacks.usuario) {
                    feedbacks.usuario.textContent = 'Nome de usuário deve conter pelo menos uma letra maiúscula.';
                }
                ehValido = false;
            } else if (!usuarioRegexNumero.test(usuarioValue)) {
                campos.usuario.classList.add('is-invalid');
                if (feedbacks.usuario) {
                    feedbacks.usuario.textContent = 'Nome de usuário deve conter pelo menos um número.';
                }
                ehValido = false;
            }
        }
        
        if (ehValido) {
          
           console.log('Formulário validado com sucesso. Redirecionando...');
            formulario.reset();
            window.location.href = ""; // Coloque o caminho da página home aqui
        } else {
    
           console.log('Existem erros no formulário. Por favor, preencha todos os campos corretamente.');
        }
    });
});