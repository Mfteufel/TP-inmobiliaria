$(document).ready(function() {  //Garantiza que el código jQuery dentro de ella no se ejecute hasta que la página esté completamente cargada
    $('.property-content img').hover(       //Llama a al div de .property-content img para aplicar el hover
        function() {
        $(this).css({
            'transform': 'scale(1.2)', //La imagen para aplicar una transformación de un zoom del 120%
            'transition': 'transform 0.5s ease'
            });
        },
        function() {
        $(this).css('transform', 'scale(1)');   //Restaura la imagen a su tamaño original 
        }
    );
});

