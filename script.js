/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

function isNumber(grade){
    let test
    grade = Number(grade)
    test = isNaN(grade)
    while(test === true){
        grade = prompt("Número invalido, escreva um número valido")
        grade = Number(grade)
        test = isNaN(grade)    
    }
    return grade
}

function isPair(num){
    let test = num % 2
    if(test == 0){
        return true
    }
    else{
        return false
    }
}

function isSame(n1, n2){
    if(n1 === n2){
        return true
    }
    else{
        return flase
    }
}

let n1 = isNumber(prompt("Digite o primeiro número"))
let n2 = isNumber(prompt("Digite o segundo número"))

let plus = n1 + n2
let minus = n1 - n2
let multiply = n1 * n2
let divide = n1 / n2
let rest = n1 % n2 

alert("A soma é: " + plus + ".")
alert("A subtração é: " + minus + ".")
alert("A multiplicação é: " + multiply + ".")
alert("A divisão é: " + divide + ".")
alert("O resto é: " + rest + ".")

if(isPair(plus) === true){
    alert("A soma é par.")
}
else{
    alert("A soma é impar.")
}

if(isSame(n1, n2) === true){
    alert("Os números são iguais.")
}
else{
    alert("Os números são diferentes.")
}

