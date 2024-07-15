let empates = 0;

function mostrarNombre(){
    let nombre = document.querySelector('#nombreUsuario').value;
    document.querySelector('#jugador1Nombre').textContent=nombre;
}

function JugadorUsuario(jugada){
    if (jugada == 1){
        document.querySelector('#Jusuario').src ='img/piedra.png';
    }
    if (jugada == 2){
        document.querySelector('#Jusuario').src ='img/papel.png';
    }
    if (jugada == 3){
        document.querySelector('#Jusuario').src ='img/tijera.png';
    }

   let bot = jugadabot()
   Puntaje(jugada,bot);
}

function Jugadabot(){
    let azar = Math.floor(Math.random()*3)+1
    //let bot = document.getElementById('#Jbot');
    if(azar == 1){
        document.querySelector('#Jbot').src = 'img/piedra.png'
    }
    if (azar == 2){
        document.querySelector('#Jbot').src = 'img/papel.png'
    }
    if (azar == 3){
        document.querySelector('#Jbot').src = 'img/tijera.png'
    }
    return azar;

}

function Puntaje(u,b){
    if((u==1 && b==1)||(u==2 && b==2)||(u==3 && b==3)){
        empates++;
        document.querySelector('#ptsEmpates').textContent= empates;
    }
}

