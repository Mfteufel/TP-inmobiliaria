$(document).ready(function() {
    $('nav ul li a').hover(
    function() {
    $(this).css('color', '#ffc107'); // Cambia el color al pasar el mouse sobre el enlace
    },
    function() {
        $(this).css('color', '#fff'); // Restaura el color original al salir del hover
    }
    );
});
