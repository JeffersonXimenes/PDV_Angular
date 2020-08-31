  // FUNÇÃO HORA
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('hora').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
  }

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// FUNÇÃO PARA RETORNAR DATA
function startData() {
    var today = new Date();
    var day = today.getDate();
    var mes = [" Janeiro ", " Fevereiro ", " Março ", " Abril ", " Maio ", " Junho ", " Julho ", " Agosto ", " Setembro ", " Outubro ", " Novembro ", " Dezembro "][today.getMonth()];
    // var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro".getDate](today.getMonth()+1).toString().padStart(2, '0');
    document.getElementById('data').innerHTML =
    day + " de" + mes;
}
