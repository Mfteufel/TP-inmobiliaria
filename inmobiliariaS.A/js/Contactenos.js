function validacion(event) {
    var nombre = document.forms["Formulario"]["Nombre"].value;
    var apellido = document.forms["Formulario"]["Apellido"].value;
    var dni = document.forms["Formulario"]["DNI"].value;
    var genero = document.forms["Formulario"]["Genero"].value;
    var fechaNacimiento = document.forms["Formulario"]["Fecha_nacimiento"].value;
    var telefono = document.forms["Formulario"]["Telefono"].value;
    var email = document.forms["Formulario"]["Correo"].value;

    //Valida que todos los campos esten completos
    if (nombre === "" || apellido === "" || dni === "" || genero === "" || fechaNacimiento === "" || telefono === "" || email === "") {
        alert("Todos los campos tienen que estar completos.");
        event.preventDefault();
        return;
    }

    //Valida que la persona tenga más de 18 años
    var hoy = new Date();
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    var mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

    //Si el mes actual es anterior al mes de nacimiento, o si es el mismo mes pero el día actual es anterior al día de nacimiento, se resta un año de la edad
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    if (edad < 18) {
        alert("Debe tener al menos 18 años para enviar este formulario.");
        event.preventDefault();
        return;
    }

    //Valida formato de Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;``  
    /*
    * ^       : Indica el inicio de la cadena.
    * [^\s@]+ : Uno o más caracteres que no sean espacios en blanco ni @
    * @       : El símbolo de arroba, obligatorio en todas las direcciones de correo electrónico
    * [^\s@]+ : Uno o más caracteres que no sean espacios en blanco ni @ después del @
    * \.      : Un punto literal (.) escapado.
    * [^\s@]+ : Uno o más caracteres que no sean espacios en blanco ni @ después del punto
    * $       : Indica el final de la cadena
    */
    if (!emailRegex.test(email)) {
        alert("El formato del email es incorrecto.");
        event.preventDefault();
        return;
    }

    //Validar formato del telefono
    var telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El formato del teléfono es incorrecto.");
        event.preventDefault();
        return;
    }

    //Validar el formato del DNI
    var dniRegex = /^[0-9]{7,8}$/;
    if (!dniRegex.test(dni)) {
        alert("El formato del DNI es incorrecto.");
        event.preventDefault();
        return;
    }

    //Guardar datos en localStorage
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("genero", genero);

}
