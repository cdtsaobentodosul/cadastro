document.getElementById("cadForm").addEventListener("submit", function(e){
    e.preventDefault();

    const form = new FormData(this);

    fetch("URL_DO_SEU_SCRIPT_AQUI", {
        method: "POST",
        body: form
    })
    .then(res => {
        if (res.ok) {
            document.getElementById("sucesso").style.display = "block";
            document.getElementById("erro").style.display = "none";
            this.reset();
        } else {
            throw new Error();
        }
    })
    .catch(() => {
        document.getElementById("erro").style.display = "block";
        document.getElementById("sucesso").style.display = "none";
    });
});
