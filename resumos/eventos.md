## O que são eventos?

- São ações condicionadas após alguma resposta feita pelo o user.
- clicks, apertar tecla, movimento do mouse.
- podemos construir uma lógica para essas ações do user.
- por meio de handles.

### Criando um evento
- Devemos atrelar um evento a um elemento, por exemplo um botão.
- depois inserir um listener e o tipo de evento como argumento.
- aí o elemento responderá por esse evento.
```javascript
let btn = document.querySelector("btn");
btn.addEventListener("click",function(){
    console.log("clicou");
})
```
### Removendo eventos

- da mesma forma que podemos adicionar elementos, podemos removê-los quando necessário.
- para isso usamos iu removeEventListener onde passamos o evento e a função que o evento está escutando.
```javascript
let btn = document.querySelector("btn");
btn.addEventListener("click",function msg(){
    console.log("clicou");
})

setTimeout(function(){
    btn.removeEventListener("click", msg )
}3000) //removendo evento 3 segundos depois.

```
### Propagação

- Quando não definimos umelemento muito bem (seletor brando) ou um elemento que está dentro de outro elemento também tem um evento.
- pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos a duplicação.
- por isso temos um método que para essa propagação resolve esse problema. o <strong>stopPropagation</strong>.

### Ações default
- Muitos elementos/teclas já tem ações definidas, como o link que nos redireciona pra outra página;
- Podemos para este evento default criar uma lógica diferente para o elemento em questão;

```javascript
let a = document.querySelector("a);
a.addEventListener("click", function(e){
    e.preventDefault();
    console.log("clicou, mas não mudou de página");// você mudou um comportamento pre-definido do elemento.
})
```
### Eventos de tecla (key event)

-Sempre que uma tecla é pressionada, são gerados dois eventos:
keyup e keydown;
- podemos realizar ações nestes eventos também;
- keyup é quando soltamos a tecla;
-keydown é quando apertamos;
```javascript
    window.addEventListener("keydown",function(e){
        if(e.key =="v"){
            console.log("tecla v apertada")
        }
    })
```

### Eventos com mouse 
- No mouse também temos evventos como mousedown e mouseup semelhantes ao das teclas.
- dblclick para ativar dois cliques.

### movimento do mouse
- podemos ativar eventos com a movimentação do mouse também;
- o nome dele é mousemove;
- através desse evento podemos detectar a posição do ponteiro mouse na tela.

```javascript
window.addEventlistener("mousemove", function(e){
    console.log(e.x);
});
```
### Eventos page load
- Evento que acontece ao carregar a página
- Evento que acontece quanto tentam fechar a página.

```javascript
    window.addEventListener("load", function(){
        alert("Assine nossos termos");
    });
    window.addEventListener("load", function(){
        event.returnValue = null;
    })
```
### debounce - dar um tempo para que o evento seja chamado novamente.

-
