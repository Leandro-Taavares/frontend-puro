document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".informações-carro-2");
    const setaMobile = document.querySelector(".seta-mobile");

    function abrirModal() {
        modal.style.display = "block";
        modal.style.right = "0"
    }

    function fecharModal() {
        modal.style.display = "none";
    }

    setaMobile.addEventListener("click", function() {
        if (modal.style.display === "block") {
            fecharModal();
        } else {
            abrirModal();
        }
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
});