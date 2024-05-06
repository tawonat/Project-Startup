// Função para marcar um assento como ocupado
function marcarAssento(assento) {
    assento.classList.add("ocupado");
}

// Adicionar evento de clique aos assentos
const assentos = document.querySelectorAll(".assento");
assentos.forEach(assento => {
    assento.addEventListener("click", () => {
        marcarAssento(assento);
    });
});
