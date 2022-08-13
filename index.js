const horasDia = 8

  function calculaSalario(){
    let dias = document.getElementById("dias").value;
    let salarioHora = document.getElementById("salarioHora").value;
    let salarioFinal = (dias*horasDia) * salarioHora;
    console.log(salarioFinal);
    document.getElementById("resposta").innerHTML = salarioFinal;
}

function calcularValorHora() {

  const diasTrabalhados = document.querySelector ("#dias").value;
  const salarioTotal = document.querySelector('#salarioTotal').value; 
  const valorHora = (salarioTotal / diasTrabalhados / 8)
  const salarioHora = document.querySelector('#valorHora')
  salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
}