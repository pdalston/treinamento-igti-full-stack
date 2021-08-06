'use strict'; // O javascript acusa mais erros

console.log('Hello Mundo');

function withVar() {
    for (var i = 0; i < 20; i++) {
        console.log('var' + i);
    }
    
    i = 20;
    console.log(i);
}

withVar();

function withVarLet() {
    for (let i = 0; i < 20; i++) {
        console.log('let' + i);
    }
    
    i = 20;
    console.log(i);
}

//withVarLet();

const a = 50;
//a = 60;
console.log(a);

//const com vetor - posso inserir valores dentro do array

const vetor = [];
vetor.push(1);
console.log(vetor);


//Arrow functions

// função normal
function somar(a,b) {
    return a + b;
}

// função anônima
const somarA = function(a,b) {
    return a+b;
}

// Arrow function
const somarArrow = (a,b) => {
    return a+b;
}

// Arrow function reduzida
const somaArrowRedu = (a,b) => a+b;


console.log('Soma normal é: ' + somar(2,7));
console.log('Soma anônima é: ' + somarA(2,7));
console.log('Arrow Function é: ' + somarArrow(2,7));
console.log('Arrow Function Reduzida é: ' + somaArrowRedu(2,7));


// Template Literals

const PriNome = 'Pedro';
const LastNome = 'Dalston';
const texto = 'Meu nome é ';

console.log(texto + ' ' + PriNome + ' ' + LastNome);

console.log(`${texto} ${PriNome} ${LastNome}`);


// Default Parameters
// Eu posso definir apenas os últimos parametros da função mas não posso definir o primeiro sem
// definir os últimos. Se colocar no primeiro preciso definir todos
// O atributo na chamada da função tem prioridade sobre o valor padrão

const sum5 = (a, b) => a + b;

//Passando somente um parâmetro ele retorn NAN, not a number
console.log(sum5(2));

//Agora definindo um valor padrão
const sum6 = (a, b = 5) => a + b;

console.log(sum6(2));






