document.addEventListener('DOMContentLoaded', function() {
    const ButtonConfirm = document.getElementById("confirm"); 
    if (ButtonConfirm) {
        ButtonConfirm.addEventListener('click', function() {
            alert("O código foi enviado no E-mail ou nome de usuário preenchido!");
        });
    }
});

