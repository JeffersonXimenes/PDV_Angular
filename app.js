validarCpf = () => {
    let cpf = document.getElementById("inputCpf");
    let valido = document.getElementById("alertCpfValido");
    let invalido = document.getElementById("alertCpfInvalido");

    if (cpf.value.length != 11) {
        invalido.style.display = "block";
        valido.style.display = "none";
    } else {
        invalido.style.display = "none";
        valido.style.display = "block";
    }
}

calcularTroco = () => {
    let total = document.getElementById("total").value;
    let recebido = document.getElementById("recebido").value;

    if (total > recebido) {
        document.getElementById("insuficiente").style.display = "block";
    } else {
        document.getElementById("troco").value = recebido - total;
        document.getElementById("insuficiente").style.display = "none";
    }
}

function validaNumero (num) {
    var permitidos = /[^0-9]/;
    permitidos.lastIndex = 0;
    var campo = num;
    if (permitidos.test(campo.value)) {
        alert("Digite apenas números!")  
        campo.value = "";
    }
}

function validaNumeroCPF (num) {
    var permitidos = /[^0-9.-]/;
    permitidos.lastIndex = 0;
    var campo = num;
    if (permitidos.test(campo.value)) {
        alert("Digite apenas números!")  
        campo.value = "";
    }
}

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
// FINAL FUNÇÃO 

var pagamentos = document.getElementById("pagamento");
var proxima = document.getElementById("confirmaCompra");



proxima.onclick = function () {
    var pagtoSelec;
    pagtoSelec = pagamentos.options[pagamentos.selectedIndex].value;
    
    if(pagtoSelec == "deb"){
        $('#modalDebito').modal('show');
    }
    if(pagtoSelec == "cred"){
        $('#modalCredito').modal('show');
    }
    if(pagtoSelec == "din"){
        $('#modalDinheiro').modal('show');
    }
    if(pagtoSelec == "mesc"){
        $('#modalDuasFormas').modal('show');
    }
};
 

 