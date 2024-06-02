document.addEventListener("DOMContentLoaded", function() {
    // Obtener el apellido y género desde localStorage
    var apellido = localStorage.getItem("apellido");
    var genero = localStorage.getItem("genero");
    var tratamiento;

    // Determinar el tratamiento según el género
    if (genero === "Masculino") {
        tratamiento = "Sr.";
    } else if (genero === "Femenino") {
        tratamiento = "Sra.";
    } else {
        tratamiento = "";
    }

    // Construir el mensaje de agradecimiento
    var mensaje = `¡Gracias ${tratamiento} ${apellido}, por confiar en nosotros!`;
    if (tratamiento === "") {
        mensaje = `¡Gracias, ${apellido}, por confiar en nosotros!`;
    }

    // Mostrar el mensaje de agradecimiento
    document.getElementById("agradecimiento").innerText = mensaje;
});
