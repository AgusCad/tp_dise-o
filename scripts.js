function mostrarAnalisisSentimientos() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("analisisSentimientos").style.display = "block";
}

function mostrarCuestionario() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("cuestionario").style.display = "block";
}

function mostrarWearables() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("wearables").style.display = "block";
}

function mostrarRecomendaciones(metodo) {
    let recomendaciones = "";

    switch (metodo) {
        case "sentimientos":
            recomendaciones = "<p>🎶 Canción basada en tus sentimientos 1</p><p>🎶 Canción basada en tus sentimientos 2</p>";
            break;
        case "cuestionario":
            const estadoAnimo = document.getElementById("estadoAnimo").value;
            recomendaciones = generarRecomendacionesPorEstado(estadoAnimo);
            break;
        case "wearables":
            recomendaciones = "<p>🎶 Canción según tu frecuencia cardíaca 1</p><p>🎶 Canción según tu frecuencia cardíaca 2</p>";
            break;
        default:
            recomendaciones = "<p>No se encontraron recomendaciones.</p>";
    }

    document.getElementById("recomendaciones").innerHTML = recomendaciones;
    ocultarSecciones();
    document.getElementById("resultados").style.display = "block";
}

function generarRecomendacionesPorEstado(estadoAnimo) {
    switch (estadoAnimo) {
        case "feliz":
            return "<p>🎶 Canción Alegre 1</p><p>🎶 Canción Alegre 2</p>";
        case "triste":
            return "<p>🎶 Canción Reflexiva 1</p><p>🎶 Canción Reflexiva 2</p>";
        case "motivado":
            return "<p>🎶 Canción Energizante 1</p><p>🎶 Canción Energizante 2</p>";
        case "relajado":
            return "<p>🎶 Canción Relajante 1</p><p>🎶 Canción Relajante 2</p>";
        default:
            return "<p>No se encontraron recomendaciones.</p>";
    }
}

function ocultarSecciones() {
    document.getElementById("analisisSentimientos").style.display = "none";
    document.getElementById("cuestionario").style.display = "none";
    document.getElementById("wearables").style.display = "none";
}

function volverInicio() {
    ocultarSecciones();
    document.getElementById("inicio").style.display = "block";
}

function reiniciar() {
    document.getElementById("resultados").style.display = "none";
    volverInicio();
}
