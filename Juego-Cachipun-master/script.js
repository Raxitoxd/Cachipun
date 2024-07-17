let empates = 0;
let ptsBot =0;
let ptsUsuario =0;  


function mostrarNombre(){
    let nombre = document.querySelector('#nombreUsuario').value;
    document.querySelector('#jugador1Nombre').textContent=nombre;
}

function JugadaUsuario(jugada){
    if (jugada == 1){
        document.querySelector('#Jusuario').src ='img/piedra.png';
    }
    if (jugada == 2){
        document.querySelector('#Jusuario').src ='img/papel.png';
    }
    if (jugada == 3){
        document.querySelector('#Jusuario').src ='img/tijera.png';
    }

   let bot = Jugadabot();
   PuntajeJuego(jugada,bot);
}

function Jugadabot(){
    let azar = Math.floor(Math.random()*3)+1
    if(azar == 1){
        document.querySelector('#Jbot').src = 'img/piedra.png';
    }
    if (azar == 2){
        document.querySelector('#Jbot').src = 'img/papel.png';
    }
    if (azar == 3){
        document.querySelector('#Jbot').src = 'img/tijera.png';
    }
    return azar

}

function PuntajeJuego(u,b){
    if((u==1 && b==1)||(u==2 && b==2)||(u==3 && b==3)){
        empates++;
        document.querySelector('#ptsEmpates').textContent= empates;
    }
    if((u==2 && b==1)||(u==1 && b==3)||(u==3 && b==2)){
        ptsUsuario++;
        document.querySelector('#ptsJugador1').textContent= ptsUsuario;
    }
    if((u==1 && b==2)||(u==2 && b==3)||(u==3 && b==1)){
        ptsBot++;
        document.querySelector('#ptsJugador2').textContent= ptsBot;
    }
    
}

function Reiniciar(){
    empates = 0;
    ptsUsuario = 0;
    ptsBot = 0;
    document.querySelector('#ptsEmpates').textContent= empates;
    document.querySelector('#ptsJugador1').textContent= ptsUsuario;
    document.querySelector('#ptsJugador2').textContent= ptsBot;
}

