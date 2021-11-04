console.log('Olá!!')
console.log('Bem vindo ao meu primeiro site')
console.log('Eu sou o Tel Nereu ')
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// DECLARAÇÃO DE VARIÁVEIS LET
//let nome = 'Tel';
//let sobrenome = undefined;
//let idade = 44;
//let cor = true;
//let altura = '172,5';

//OBJETOS
//let pessoa ={
 //   nome: 'Tel',
  //  sobrenome: 'Nereu',
  //  idade: 44,
  //  cor: true,
  //  altura: '172,5'
//};
//console.log(pessoa);

//ARRAYS
//let familia = [45,45,23,22,20,18];
  //  console.log(familia.length);
    //console.log(familia[4]);

   // let colega = ['Felisbino', 41, 'New Horland']
      //  console.log(colega[0]);
      //  console.log(colega[1]);
      //  console.log(colega[2]);

      //FUNCTIONS
    //  let corSite = "Azul";
    //  console.log(corSite);
 //function resetaCor(cor, tonalidade){
    // corSite = cor + ' '+ tonalidade;
 //};
    
  //  resetaCor('vermelho', 'escuro');
  //  console.log(corSite);

// FUNÇÃO QUE NÃO RETORNA NADA
//function meuNome(){
   // console.log('Tel');
//}
//meuNome();

//FUNÇÃO COM RETORNO DE VALOR
//function multiplicarPorDois(valor){
//    return valor*3;
//}
//let resultado = multiplicarPorDois(5);
//console.log(resultado);
//console.log(resultado + 5);

//OPERADORES
//OPERADORES ARITIMETICOS (MATEMATICOS)
//OPERADORES ATRIBUIÇÃO
//OPERADORES COMPARAÇÃO
//OPERADORES LÓGICOS
//OPERADORES BITWISE

//OPERADORES ARITIMETICOS (MATEMATICOS)
let salario = 100;
console.log(salario);
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

//OPERADORES INCREMENTO, DECREMENTO
let idade = 44
console.log(idade++);
console.log(idade);
console.log(--idade);

//OPERADORES DE ATRIBUIÇÃO
let valorKiloMel = 50;
console.log(valorKiloMel);

//OPERADORES DE IGUALDADE
console.log('//Igualdade estrita')
console.log(1 === 1);
console.log('1' === 1);
console.log('//Igualdade solta')
console.log(1 == 1);
console.log('1' == 1);

//OPERADORES TERNARIOS
console.log('//OPERADORES TERNARIOS');
// um cliente com mais de 100 pontos é tipopremium, senão comum.
let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//OPERADORES LOGICOS
console.log('//OPERADOR LOGICO E (&& - retorna true se os dois operando forem true');
//console.log( true && true);
//let maiorDeIdade = false;
//let habilitação = true;
//let podeAplicar = maiorDeIdade && habilitação;
//console.log(podeAplicar);

console.log('//OPERADOR LOGICO OU (||)( retorna true se apenas um operando forem true');
let maiorDeIdade = true;
let habilitação = false;
let podeAplicar = maiorDeIdade || habilitação;
console.log(podeAplicar);

console.log('//OPERADOR NOT (!)');
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado);

//IF ... ELSE

let hora = 18;
if(hora > 6 && hora < 12){
console.log("Bom diaaaa!!!!");
}
else if(hora > 12 && hora < 18){
console.log("Boaaa Tardeee!!!");
}
else{
console.log("Boa Noiteee!!!");
}

// SWITCH / CASE
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
let permissao; // Comum, Gerente, Diretor
permissao = 'Diretor';
switch(permissao){
   case 'Comum':
      console.log('Usuário Comum');
   break;

   case 'Gerente':
      console.log('Usuário Gerente');
   break;

   case 'Diretor':
      console.log('Usuário Diretor');
   break;

   default:
      console.log('Usuário Não Reconhecido!');
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
// LOOP
//1 FOR
for(let i = 0;i < 6; i++){
   if(i % 2 !== 0){
      console.log('Estou Aprendendo!!!', i);
   }
   
}

//2 WHILE
//3 DO.. WHILE
//4 FOR..IN
// FOR.. OF