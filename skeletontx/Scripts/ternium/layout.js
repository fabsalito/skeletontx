$(document).ready(function () {
    //Muestra o no el encabezado
    $(document).on("click", ".contenedorFiltroColapsable", function () {
        $(this).parent().children('.contenidoFiltros').slideToggle();
    });
});