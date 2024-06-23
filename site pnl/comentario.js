//efeitos é oq acontece e aplicacao como é aplicado.
function validarFormulario() {
    var nome = document.forms["form1"]["nome"].value;
    var email = document.forms["form1"]["email"].value;

    if (nome === "") {
        alert("Preencha o campo Nome.");
        document.forms["form1"]["nome"].focus();
        return false;
    }

    if (email === "") {
        alert("Preencha o campo Email.");
        document.forms["form1"]["email"].focus();
        return false;
    }

    return true; // Permite o envio do formulário se todos os campos estiverem preenchidos
}
