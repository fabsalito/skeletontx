$(document).ready(function () {
    // redefine el tamaño del contenido
    $('.content-main').css('height', $(window).height() - $('.content-header').height() - $('.content-footer').height() - 50); // el 50 es el padding-top del body; usar media queries

    // define acciones para la animación de la toolbar
    $(document).on("click", ".contenedorFiltroColapsable", function () {
        // despliega-colapsa toolbar
        $(this).parent().children('.contenidoFiltros').slideToggle("slow", function() {
            // redefine el tamaño del contenido
            $('.content-main').css('height', $(window).height() - $('.content-header').height() - $('.content-footer').height() - 50); // el 50 es el padding-top del body; usar media queries
        });
    });

    // define acciones para el windows resize
    window.onresize = function() {
        $('.content-main').css('height', $(window).height() - $('.content-header').height() - $('.content-footer').height() - 50); // el 50 es el padding-top del body; usar media queries
    };
});