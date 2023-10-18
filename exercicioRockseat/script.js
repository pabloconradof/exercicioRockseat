/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")

n1 = Number(n1) 
n2 = Number(n2)

let sum = n1 + n2
let sub = n1 - n2
let div = n1 / n2
let multi = n1 * n2
let restDivisao = n1 % n2

alert("A soma dos dois  números é: " + sum)
alert("A subtraçõo dos dois números é: " + sub)
alert("A divisão dos dois números é: " + div)
alert("A multiplicação dos dois números é: " + multi)
alert("O resto da divisão dos dois números é: " + restDivisao)

const parOuImpar = sum % 2 === 0 ? 'par.' : 'ímpar.';
alert("O número é: " + parOuImpar)

const saoIguaisOuDiferentes = n1 === n2 ? 'iguais.' : 'diferentes.';
alert("Os números são: " + saoIguaisOuDiferentes + ".")