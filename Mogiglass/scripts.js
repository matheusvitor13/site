document.addEventListener('DOMContentLoaded', function() {
    const abas = document.querySelectorAll('.aba-link');
    const conteudos = document.querySelectorAll('.aba-conteudo');

    abas.forEach(aba => {
        aba.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove a classe 'active' de todas as abas e conteúdos
            abas.forEach(link => link.classList.remove('active'));
            conteudos.forEach(conteudo => conteudo.classList.remove('active'));

            // Adiciona a classe 'active' na aba e no conteúdo clicados
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});