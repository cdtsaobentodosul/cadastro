const cep = document.getElementById("cep");
const cpf = document.getElementById("cpf");
const celular = document.getElementById("celular");
const ultimos4 = document.getElementById("ultimos4");

// CPF
cpf.addEventListener("input", () => {
    cpf.value = cpf.value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .substring(0, 14);
});

// CEP
cep.addEventListener("input", () => {
    cep.value = cep.value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 9);
});

// CELULAR
celular.addEventListener("input", () => {
    celular.value = celular.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 15);
});

// Últimos 4 dígitos do cartão
ultimos4.addEventListener("input", () => {
    ultimos4.value = ultimos4.value.replace(/\D/g, "").substring(0, 4);
});
