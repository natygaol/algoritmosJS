let numeroAleatorio = 0;

function generaNumeroAleatorio( event ){
    event.preventDefault();
    numeroAleatorio = Math.floor( Math.random() * 101 );
    let resultado = document.querySelector( '.resultado' );
    resultado.innerHTML = "";
    console.log( numeroAleatorio );
}

function comparaNumero( event ){
    event.preventDefault();
    let numeroActual = Number( document.querySelector( '#adivinaNumero' ).value );
    let resultado = document.querySelector( '.resultado' );

    if( numeroActual < numeroAleatorio ){
        resultado.innerHTML += `<p> ${numeroActual} - Intenta con un número más grande! </p>`;
    }

    if( numeroActual > numeroAleatorio ){
        resultado.innerHTML += `<p> ${numeroActual} - Intenta con un número más pequeño! </p>`;
    }

    if( numeroActual === numeroAleatorio ){
        resultado.innerHTML += `<p> Has adivinado el número </p>`;
    }
}

let formularioAdivina = document.querySelector( '.formularioAdivina' );
formularioAdivina.addEventListener( 'submit', comparaNumero );