function numAleat() {
    return Math.round(Math.random() * 100); // se indica un valor aleatorio entre 1 a 100
}



function controlValor(numctrl, resultado) {


    if (numctrl == resultado) {
        return true
    }

    return false


}



function inicioJuego(num, i, resultado) {



    if (i > 1) {

        if (controlValor(num, resultado)) {
           return alert(`Adivinaste`);
            
        }

        else {
            
            i--;
            alert(`No adivinaste, te quedan ${i}oportunidades`);
            
            let valor = prompt('adivine el numero de 1 a 100:');
            inicioJuego(valor, i,resultado);

        }
    } else {
        alert(`PERDISTE`);
    }

}

let i = 3;
let resultado = numAleat();
console.log(resultado); // se muestra el valor aleatorio

let valor = document.getElementById('num').value;


//inicioJuego(valor, i, resultado) 





