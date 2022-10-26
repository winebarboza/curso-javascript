## A web: Protocolos

- O protocolo é uma forma de comunciação entrw computadores.
- o HTTP serve para solicitarmos arquivos, imagens e etc.
- entramos em sites graças ao HTTP.
- SMTP = protocollos para enviar e-mails.
- TCP = protocolo de transferência.

### O que é uma URL?

- Cada arquivo que carrega no navegador é nomeado por uma url.

### Entendendo o HTML

- HTML é uma linguagem de marcação.
- Responsável pelos textos e imagens que vemos na tela ao acessar um site.
- os elementos são definidos por tags, exemplo:< p>texto aqui</ p> defini um parágrafo.
- algumas tags não possuem fechamento.

### HTML e o Javascript

- podemos codar js na própria página HTML.
- a prática mais recomendada é chamar um arquivo js externo por meio da tag script.
- recomendável inserir essa tag no fim do body.

### HTML e a estrutura DOM

- Quando uma página Web é requisitada, ela recebe um texto que é transformado em uma estrutura HTML.
- as tags vão se aninhando umas às outras, formando uma estrutura em que elementos ficam dentro de outros.
- essa estrutura se chama DOM (object model) e podemos ter acesso a cada elemento da DOM via Javascript.

### Entrando elementos DOM

- podemos encontrar elementos de uma maneira mais fácil que percorrer cada nó da árvore dom.
- Como no HTML nós temos tags, classes e ids, o Javascript possibilita usarmos esses identificadores para encontrarmos o elemendo desejado.
- Há alguns métodos para isso: <strong>getELementByTagName()</strong>, <strong>getElementsById</strong>, <strong>getElementByClassName(),</strong> e também o <strong>QuerySelector</strong>

### Inserindo elemento na DOM

- Você vai precisar do elemento pai
- Vai precisar do elemento filho
- e utilizar o insertBefore

elementoPai.insertBefore(elementoCriado, elementoFilho);

```javascript
let criandoElemento = document.createElement("p");
let elementoPai = document.querySelector("#informacoes");
let elementoFilho = document.querySelector("#informações h1");

elementoPai.insertBefore(criandoElemento, elementoFilho);

```
### AppendChild - inserindo um elemento em um elemento pai

```javascript
let paragrafo = createElement("p"); //criando elemento
paragrafo.innerHTML = "inserindo texto ao parágrafo criado";
document.getElementById("elemento-pai").appendChild(paragrafo); 
// ========== agora, o elemento criado é filho do elemento que a gente pegou.=========
```
Extra: removendo o elemento filho:

- Nós acabamos de criar e adicionar esse parágrafo ao elemento pai, mas também conseguimos removê-lo com removeChild:

```javascript
document.getElementById("elemento-pai").removeChild(paragrafo); 
//o parágrafo foi removido...
```