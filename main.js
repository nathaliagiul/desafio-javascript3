let option;
let result;

option =  Number(prompt(`

    Fala Dev! 

    Digite o número da opção desejada:

    1. Olá, mundo!
    2. Soma
    3. É número?
    4. É string?
    5. É booleano?
    6. Subtração
    7. Multiplicação
    8. Divisão
    9. É par?
    10. É ímpar?

`));

switch(option){
    case 1:
        result = 'Hello Word!';
        break;
    case 2:
        const sumOne = 1;
        const sumTwo = 2;
        result = `Soma: ${sumOne} + ${sumTwo} = ${sumOne+sumTwo}`;
        break;
    case 3:
        let isNumber = '10a';
        result = isNaN(isNumber) ? `${isNumber} não é um número` : `${isNumber} é um número`;
        break;
    case 4:
        let x = 10;
        result = typeof x == 'string' ? `${x} é uma string` : `${x} não é uma string`;
        break;
    case 5:
        let y = false;
        result = typeof y == 'boolean' ? `${y} é booleano` : `${y} não é booleano`;
        break;
    case 6:
        const subOne = 4;
        const subTwo = 1;
        result = `Subtração: ${subOne} - ${subTwo} = ${subOne+subTwo}`;
        break;
    case 7:
        const multOne = 4;
        const multTwo = 1;
        result = `Multiplicação: ${multOne} * ${multTwo} = ${multOne*multTwo}`;
        break;
    case 8:
        const divOne = 4;
        const divTwo = 2;
        result = `Divisão: ${divOne} / ${divTwo} = ${divOne/divTwo}`;
        break;
    case 9:
        const isEven = 4;
        result =  isEven % 2 == 0 ? `${isEven} é um número par` : `${isEven} não é um número par`;
        break;
    case 10:
        const isOdd = 7;
        result = isOdd % 2 == 0 ? `${isOdd} não é um número ímpar` : `${isOdd} é um número ímpar`;
        break;
}

alert(result);
