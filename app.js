/*
  06
  - Já implementamos os métodos some, map e filter, do zero;
  - Neste exercício, seu desafio será criar, do zero, o método forEach;
  - Implemente uma função "forEach" que possui a mesma funcionalidade do método 
    forEach original;
  - Você não poderá utilizar o método forEach original, embutido na linguagem;
  - A invocação da função "forEach" deve receber um array como 1º argumento e a 
    declaração de uma função como 2º argumento;
  - Faça os testes usando a let e const abaixo;
    - Após a execução do forEach, accumulator deve armazenar 236;
    - A cada execução do forEach, a mensagem '"X" é o Xº item do array 
      [XX, XX, XX, XX]' deve ser exibida no console. Os "X" são placeholders 
      que devem ser preenchidos com as informações corretas.
  
  Dica 1: o método forEach é usado para executar efeitos colaterais;
  Dica 2: o método forEach nunca retorna um valor.
*/

let accumulator = 0
const oddNumbers = [51, 97, 65, 23]

const forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i])
        console.log(`"${arr[i]}" é o ${i + 1}º item do array [${arr}]`)
    }
    return accumulator
}

console.log(forEach(oddNumbers, number=> accumulator += number))


/*
  07
  - Implemente um carousel. O desafio é que o resultado final seja este: 
    https://youtu.be/ydn_bSwvlPU
  - As imagens, marcação HTML e estilos CSS estão feitos. Aqui no app.js você 
    fará os passos abaixo;
  - Quando o botão de "próximo slide" for clicado:
    1 Remova, de todos os slides, as classes que os deixam visíveis;
    2 Adicione, em todos os slides, as classes que os deixam invisíveis;
    3 Adicione, apenas no slide que deve ser exibido, a classe que deixa um 
      slide visível;
      3.1 Para saber qual slide deve ficar visível, quando o arquivo .js for 
        carregado, inicialize uma variável com 0. Ela representa o index do 
        slide exibido atualmente;
      3.2 Antes de adicionar e remover as classes dos slides, verifique o index 
        do slide exibido atualmente;
          3.3 Se ele corresponder ao index do último slide (3º), o 1º slide deve 
            ser exibido;
          3.4 Se ele não corresponder ao index do último slide, o próximo slide 
            deve ser exibido.
  - Quando o botão de "slide anterior" for clicado:
    1 Execute os passos 1, 2 e 3 acima;
    2 No passo 3.3, se o slide exibido atualmente corresponder ao index do 1º 
      slide, o último slide (3º) deve ser exibido;
    3 No passo 3.4, se o slide exibido atualmente não corresponder ao index do 
      1º slide, o slide anterior deve ser exibido.
*/