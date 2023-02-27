// Botones de Apertura
document.getElementById("masinfo").addEventListener("click", function () {
    document.getElementById("extrainfo").style.display = "block";
});

document
    .getElementById("mashabilidades")
    .addEventListener("click", function () {
        document.getElementById("extrahabilidades").style.display = "block";
    });

// Botones de cierre
document.getElementById("cerrarinfo").addEventListener("click", function () {
    document.getElementById("extrainfo").style.display = "none";
});

document
    .getElementById("cerrarhabilidades")
    .addEventListener("click", function () {
        document.getElementById("extrahabilidades").style.display = "none";
    });
