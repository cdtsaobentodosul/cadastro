document.getElementById("cadForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("loading").classList.remove("hidden");

    const form = new FormData(this);

    fetch("URL_DO_SEU_SCRIPT_AQUI", {
        method: "POST",
        body: form
    })
    .then(res => {
        document.getElementById("loading").classList.add("hidden");

        if (res.ok) {
            document.getElementById("sucesso").classList.remove("hidden");
            document.getElementById("erro").classList.add("hidden");
            this.reset();
        } else {
            throw new Error();
        }
    })
    .catch(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("erro").classList.remove("hidden");
        document.getElementById("sucesso").classList.add("hidden");
    });
});
