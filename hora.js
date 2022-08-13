function calcularValorHora() {

  const diasTrabalhados = document.querySelector ("#dias").value;
  const salarioTotal = document.querySelector('#salarioTotal').value; 
  const valorHora = (salarioTotal / diasTrabalhados / 8)
  const salarioHora = document.querySelector('#valorHora')
  salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
}