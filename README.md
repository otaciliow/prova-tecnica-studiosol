Prova Técnica Front End - Autor: Otacilio Lima

## Documentação da lógica do programa, presente no arquivo 'index.js':

- No momento em que a página é carregada, a função "getNumber()" faz uma requisição através do método fetch() na URL apresentada
  na descrição da prova, converte o callback da promise para o formato .JSON e avalia se este callback possui uma determinada propriedade
  (.value). Se sim, o valor dessa propriedade é armazenado em um input "fantasma" para que seu valor seja mantido e possa ser
  usado em outros momentos da aplicação. Se não, são exibidos: o código do erro em formato LED em outra seção da página, um callback com
  o texto "ERRO", o botão para jogar uma nova partida, e os campos de inserção de dados e o botão de enviar são desativados. Dessa forma,
  o único jeito de fazer uma nova tentativa é clicando no botão de "nova partida".

- Após o jogador digitar no campo de input o número que ele acredita ter sido sorteado pela função "getNumber()" e clicar no botão de
  enviar, é chamada a função "compareNumbers()", que armazena o valor aleatório e o valor digitado pelo jogador em variáveis, para logo
  depois executar duas estruturas condicionais:

  . A primeira verifica a quantidade de casas decimais que o número digitado pelo jogador possui, e a partir disso executa a função correspondente
  que exibe as respectivas casas decimais em formato LED na tela.

  . A segunda compara os valores dos números citados anteriormente, para verificar qual será o callback exibido. Se o número do jogador
  for menor que o número aleatório, é exibido um texto com o callback "é menor". Se for maior, acontece a mesma coisa mas com o texto "é maior".
  Se o valor for correspondente, é executada a função "handleMatchedNumbers()", que exibe o callback com texto "Você acertou!!!!!", muda
  a cor dos displays de LED para verde, exibe o botão de "nova partida" e desativa o input o botão de enviar para precenir que o jogador
  façã uma nova tentativa.

- Para fazer com que o display de LED tenha o formato correspondente ao número correto da sua casa decimal, a função "setDisplayedNumbers()"
  divide o valor de cada casa decimal e os transforma em um array, e baseado no tamanho desse array (length), executa uma determinada função
  entre três opções (um switch case faz essa verificação):

      . Se o resultado for 1, significa que o número possui apenas a casa decimal primária (menor que 10), e executa uma função "setPrimaryDisplayedNumber()" que verifica
      qual é esse número a partir de um switch case, definindo as cores das bordas de cada box do LED (superior e inferior) para formar o
      desenho daquele número, com as cores corretas (mais escuro para aceso, e cinza para apagado).

      . Se o resultado for 2, significa que o número possui duas casas decimais (entre 10 e 99), e executa a mesma função citada acima, além
      de outra função "setTenDisplayedNumber()" específica para a casa das dezenas.

      . Se o resultado for 3, significa que o número possui três casas decimais (maior que 99), e executa as mesmas funções citadas acima, além
      de outra função "setHundredDisplayedNumber()" específica para a casa das centenas.
