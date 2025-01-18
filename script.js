function calcularMedia() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const media = (num1 + num2 + num3) / 3;
    document.getElementById('resultadoMedia').textContent = 'A média é: ' + media.toFixed(2);
}

function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let resultado = '';
    if (idade < 18) {
        resultado = 'Você é menor de idade.';
    } else {
        resultado = 'Você é maior de idade.';
    }
    document.getElementById('resultadoIdade').textContent = resultado;
}

function definirMes() {
    const mes = parseInt(document.getElementById('mes').value);
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let resultado = '';
    if (mes >= 1 && mes <= 12) {
        resultado = 'O mês é: ' + meses[mes - 1];
    } else {
        resultado = 'Número inválido. Por favor, informe um número de 1 a 12.';
    }
    document.getElementById('resultadoMes').textContent = resultado;
}