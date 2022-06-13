# Tipos de dados e operadores lógicos
## O que é um tipo de dado?
-  A classificação/categoria de um dado.
### Number
- Trata de números.


------------


> verificando tipo do dado com console.log

```javascript
console.log(typeof 13)
```
## Operações aritméticas com Numbers

- soma (+)
- subtração(-)
- DIvisão (/)
- Multipicação (*)
- Resto(%)

> Operações aritméticas com Numbers

```javascript
console.log(2+2)
console.log(4-3)
console.log(15*2)
console.log(400/4)
console.log(20%2)
```
------------
## Especial Numbers
- Infinity
- -Infinity
- NaN (Not a Number)
------------
## Strings
- String = texto
```javascript
console.log("hello world")
console.log('hello world')
console.log(`hello world`)
```
#### Strings e detalhes técnicos
- \n pula uma linha.
```javascript
//para colocar aspas num texto/string é preciso colocar ele dentro de aspas inversas
console.log("'oi'")
//aparece 'oi'
console.log('"cama"')
//aparece "cama"
```
- Template literals serve para computar valores também:
```javascript
console.log(`a soma de 2+2 é ${2+2}`);
```
## Booleans
Serve para guardar um valor para comparação.
- true
- false
### Booleans: Comparações
- Maior que <
- Menor que >
- Maior ou igual <=
- menor igual >=
- igual ==
- diferente !=
- idêntico ===
```javascript
console.log(5==4);
console.log("Matheus" != "Matheus");
console.log("3" === 3);
console.log(4 === 4)
```
 