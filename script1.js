
function calcular() {
    let dataInicio = new Date(document.getElementById("dateInicial").value);

    let dataFim = new Date(document.getElementById("dateFinal").value);

    let diff = dataFim - dataInicio;

    let diffHoras = diff / 1000 / 60 / 60;

    return document.getElementById("result1").innerHTML = diffHoras.toFixed(2);
}

function reload() {
    document.location.reload(true)
}