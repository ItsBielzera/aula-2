var texto = prompt("Digite um texto:");
var numero = parseFloat(prompt("Digite um número:"));

if (!isNaN(numero)) {
  alert("Número + 10 = " + (numero + 10) + "\nNúmero * 5 = " + (numero * 5));
} else {
  alert("A entrada numérica não é um número válido.");
}

if (texto.trim() !== "") {
  alert("Você digitou: " + texto);
} else {
  alert("A entrada de texto está vazia.");
}