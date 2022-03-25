const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn(){
    if(! brockerLamp()){
        lamp.src = './imagens/ligar.jpg'//metodo que liga a lampada quando clicado no ())
    }
}

function lampOff() {
    if(! brockerLamp()){
    lamp.src = './imagens/desligar.jpg'//metodo que desliga o botão
    }
}
function lampBroker(){
    lamp.src = './imagens/quebrada.jpg'
}
function brockerLamp(){ //funcão qe verifica se alampada esta quebrada
    return lamp.src.indexOf('quebrada') > -1 // verificação que 

}

turnOn.addEventListener('click', lampOn)//eventos que são utilizados para funcoes 
turnOff.addEventListener('click',lampOff)
lamp.addEventListener('mouseover',lampOn)//metodo que ao passar o mouse em cima da lampada ela acende 
lamp.addEventListener('mouseleave',lampOff)
lamp.addEventListener('dblclick',lampBroker)