# O que são expressões regulares?
- uma forma de encontrar padrões em uma string
- Por exemplo: validar se só tem números
- EM vez de criarmos funções complexas, podemos encontrar dados em textos por meio das expressões regulares também chamadas de regex.
#### Às expressões regulares do diesel são um tipo de objeto e podemos instancia-lo de duas formas:

```javascript
let regex1 = new RegExp("test");
let reg2 = /test/;
```
### Verificando padrões com regex
- Depois da definição do patrão por meio da regex utilizamos o método teste para verificar se o padrão é retornado
- Com isso você sabe que a resposta será true or false
```javascript
let reg1 = new RegExp("wine");
let name = "wine";
let verdade = reg1.test(name); //verificando a string da variável name
console.log(verdade); //true
```
### Caracteres especiais
\d - qualquer dígito de caractere.
\w - Um caractere alfanumerico.
\s - qualquer caractere de espaço em branco.
\D - qualquer caractere que não dígito.
\W - qualquer caractere não-alfanumerico.
\S - qualquer caractere que não seja um espaço em branco.
. - qualquer caractere, não uma linha.
