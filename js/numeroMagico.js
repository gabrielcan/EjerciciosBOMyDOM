function numAleat() {
    document.getElementById('lab_valor_oprt').innerHTML = 3;

    return Math.round(Math.random() * 10); // se indica un valor aleatorio entre 1 a 100
}



function controlValor(numctrl, resultado) {

    if (numctrl == resultado) {
        return true
    }
    return false

}

function espera() {
    setTimeout(function () {
        window.location = "numeroMagico.html"
    }, 5000);

}



function inicioJuego(resultado) {
    
    let num = document.getElementById('num').value;
    let oport = document.getElementById('lab_valor_oprt').innerHTML;
    //   console.log(oport);

    //console.log(ctrl_input(num));

    if (ctrl_input(num) != false) {

        document.getElementById("txt_result").style.display = 'none';

        if (controlValor(num, resultado)) {


            document.getElementById('valor_oprt').style.display = 'none';
            document.getElementById('resultado').style.display = 'flex !important';
            document.getElementById('cont_form_adivinar').style.display = 'none';

            document.getElementById("num").disabled = true;
            document.getElementById("adivinar").disabled = true;
            document.getElementById('emoticon2').style.display = 'flex';
            document.getElementById('resultado').style.width = '66%';
            document.getElementById("txt_result").style.display = 'flex';
            document.getElementById("txt_result").style.color = 'black';
            document.getElementById('txt_result').style.backgroundColor = 'green'
            document.getElementById('txt_result').innerHTML = 'ADIVINASTE!!';

            espera();

        } else {
            document.getElementById('num').focus();
            limpiar()
            document.getElementById("valor_oprt").style.display = 'flex';
            document.getElementById("txt_result").style.display = 'flex';
            document.getElementById('txt_result').innerHTML = "No adivinaste, intentalo de nuevo"
            document.getElementById('lab_valor_oprt').innerHTML = document.getElementById('lab_valor_oprt').innerHTML - 1;
            oport = document.getElementById('lab_valor_oprt').innerHTML;

            switch (parseInt(oport)) {
                case 1:
                    document.getElementById("txt_result").style.width = '100%';
                    document.getElementById("txt_result").style.color = 'black';
                    document.getElementById('txt_result').style.backgroundColor = '#546e7a'

                    break;
                case 2:
                    document.getElementById("txt_result").style.width = '90%';
                    document.getElementById("txt_result").style.color = '#ffeb3bdb';
                    document.getElementById("txt_result").style.backgroundColor = 'black';
                    break;

                default:

                    break;
            }

            //  console.log(oport);

            if (oport == 0) {
                document.getElementById('cont_form_adivinar').style.display = 'none';
                document.getElementById('valor_oprt').style.display = 'none';
                document.getElementById("num").disabled = true;
                document.getElementById("adivinar").disabled = true;
                document.getElementById('emoticon').style.display = 'flex';
                document.getElementById("txt_result").style.display = 'flex';
                document.getElementById('txt_result').style.backgroundColor = 'Red'
                document.getElementById('resultado').style.width = '66%';
                document.getElementById('txt_result').innerHTML = "PERDISTE"
                espera();

            }
        }

    } else {

        limpiar()

    }

}

function ctrl_input(valor) {
  
    try {

        if (valor=="") throw console.log('estoy en null'), document.getElementById("txt_result").style.display = 'flex',document.getElementById('txt_result').style.backgroundColor = 'Orange',document.getElementById('txt_result').style.color= 'black', document.getElementById('txt_result').innerHTML = 'No puedes enviar valores vacios';
        valor = Number(valor);
        if (valor > 10) throw document.getElementById("txt_result").style.display = 'flex',document.getElementById('txt_result').style.backgroundColor = 'Orange',document.getElementById('txt_result').style.color= 'black', document.getElementById('txt_result').innerHTML = 'Ingresa valores menores o iguales a 10';

    } catch (err) {

        return false;
    }


}

function limpiar() {
    document.getElementById('num').value = '';
}

function entrar(){

    document.getElementById("cont_input").style.display = 'flex';
    document.getElementById("cont_button_inicio").style.display = 'none';

}

let resultado = numAleat();
let oport = 3;
console.log(resultado); // se muestra el valor aleator


//let valor = document.getElementById('num').value;


// function get_num(){

//     let valor = document.getElementById('num').value;
//     return valor;
// }
//  let numero= get_num();
//  inicioJuego(numero, i, resultado);






