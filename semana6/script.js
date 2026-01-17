const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    if (nombre.value.length >= 3) {
        setValido(nombre, "errorNombre", "");
        return true;
    } else {
        setInvalido(nombre, "errorNombre", "Mínimo 3 caracteres");
        return false;
    }
}

function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email.value)) {
        setValido(email, "errorEmail", "");
        return true;
    } else {
        setInvalido(email, "errorEmail", "Correo inválido");
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (regex.test(password.value)) {
        setValido(password, "errorPassword", "");
        return true;
    } else {
        setInvalido(password, "errorPassword", "Mín. 8 caracteres, número y símbolo");
        return false;
    }
}

function validarConfirmPassword() {
    if (password.value === confirmPassword.value && confirmPassword.value !== "") {
        setValido(confirmPassword, "errorConfirm", "");
        return true;
    } else {
        setInvalido(confirmPassword, "errorConfirm", "Las contraseñas no coinciden");
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        setValido(edad, "errorEdad", "");
        return true;
    } else {
        setInvalido(edad, "errorEdad", "Debe ser mayor de 18 años");
        return false;
    }
}

function setValido(input, errorId, mensaje) {
    input.classList.add("valido");
    input.classList.remove("invalido");
    document.getElementById(errorId).textContent = mensaje;
}

function setInvalido(input, errorId, mensaje) {
    input.classList.add("invalido");
    input.classList.remove("valido");
    document.getElementById(errorId).textContent = mensaje;
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarEmail() &&
        validarPassword() &&
        validarConfirmPassword() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente ✔️");
});
