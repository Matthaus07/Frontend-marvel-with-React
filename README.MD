## Etapas para rodar o projeto

Você pode está instalando suas dependências através do comando :

### `npm install`


E para rodar no modo desenvolvedor:
### `npm run dev`

Você pode visualizar o projeto em seu navegador através do link: [http://localhost:3000](http://localhost:3000).

### Projeto: Listagem de personagens da Marvel

O projeto consiste em um desafio para testar as habilidades com Javascript -React/ HTML e CSS.

Foram utilizados também algumas métodologias para design de software como o **clean Architeture**, encapsulando toda a regra de negócio 
da interface do usuário ou de qualquer outra camada. Além de conter também a implementação de alguns **patterns** como Adapter e Factory.

Assim criada todas as duas partes do teste como a **Listagem** e também os **Detalhes** do personagem.

Obedecendo todos os critérios como: 
 - [X] tentar evitar o uso de bibliotecas de terceiro(Salvo a excessão do uso de uma lib para paginação).
 - [X] Máximo de comandos para executar o sistema (npm install e npm run dev).
 - [X] Uso do Webpack para minificar e buildar arquivos tanto estáticos quanto não.
 
 
 O react foi totalmente configurado via webpack, não sendo utilizado o CRA(Create React App), pois a intenção é realmente não depender de outras bibliotecas em que o 
 CRA baixa por trás. Então resolvi configura-lo totalmente via webpack. A outra vantagem nisso é que tenho o total controle do que estou baixando e também de customiza-lo.
 
 O projeto utiliza das seguintes tecnologias:
 
 . SASS - Foi utilizado sem uso de Styled-components, somente o scss.
 . Typescript - para tipagem estática e criação de interfaces para a regra de negócio.
 . react-pagination-js - Para criar um componente de paginação.
 . MD5 - para a criptografia, necessária para gerar o hash na api da Marvel.
 . MD5 - para a criptografia, necessária para gerar o hash na api da Marvel.
 . As demais bibliotecas contidas, são dependências do react(Como o router-dom) e da webpack(Para configurar imagens, minificar arquivos e etc).
 



