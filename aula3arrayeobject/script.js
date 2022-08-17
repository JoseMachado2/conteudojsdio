// o que sao vetores ou arrays

/* // como declarar um array
let array = ['string', 1, true,];
console.log(array);  */

// pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]]
/* console.log (array) */

// forEach (Imprime o array junto com o índice)
/* array.forEach (function(item, index){console.log(item, index)}); */

// coloca um novo item no final do array
/* array.push ('novo item');
console.log(array) */

// remove um item no final do array
/* array.pop();
console.log (array); */

// remove um item no inicio do array
/* array.shift();
console.log (array); */

// coloca um novo item no inicio do array
/* array.unshift('novo item');
console.log (array); */

// retorna o index do array escolhido
/* console.log(array.indexOf('string')) */

// vai remover os arrays seleciondos pelos indices (inicio, fim)
/* array.splice(0, 3);
console.log (array); */

// retorna a parte do array com os arrays selecionados pelos indices (inicio, fim)
/* let novoArray = array.slice (0, 3);
console.log (novoArray); */

let object = {string : 'string', number : 1, boolean: true, array: ["array"], objectInterno:{objejectInterno: 'objeto interno'}};

/* console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array
console.log(arrayInterno); */

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);