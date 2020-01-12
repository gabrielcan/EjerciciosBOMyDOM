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

function espera(){
    setTimeout(function () {
         window.location = "numeroMagico.html" 
     }, 5000);

 }  



function inicioJuego(resultado) {
    let band = 0;
    let num = document.getElementById('num').value;
    let oport = document.getElementById('lab_valor_oprt').innerHTML;
 //   console.log(oport);

if(controlValor(num)){
    if (controlValor(num, resultado)) {


        document.getElementById('valor_oprt').style.display = 'none';
        document.getElementById('resultado').style.display = 'flex !important';
        document.getElementById('cont_form_adivinar').style.display = 'none';

        document.getElementById("num").disabled = true;
        document.getElementById("adivinar").disabled = true;
        document.getElementById('emoticon2').style.display = 'flex';
        document.getElementById("txt_result").style.display = 'flex';
        document.getElementById("txt_result").style.color='black';
        document.getElementById('txt_result').style.backgroundColor='green'
        document.getElementById('txt_result').innerHTML = 'ADIVINASTE!!';

  espera();

    } else {
        document.getElementById('num').focus();
        document.getElementById('num').value='';
        document.getElementById("txt_result").style.display = 'flex';
        document.getElementById('txt_result').innerHTML = "No adivinaste, intentalo de nuevo"
        document.getElementById('lab_valor_oprt').innerHTML = document.getElementById('lab_valor_oprt').innerHTML - 1;
        oport = document.getElementById('lab_valor_oprt').innerHTML;
        
        switch (parseInt(oport)) {
            case 1:
                document.getElementById("txt_result").style.width='100%';
                document.getElementById("txt_result").style.color='black';
                document.getElementById('txt_result').style.backgroundColor='#ffc107b0'

                break;
            case 2:
                document.getElementById("txt_result").style.width='90%';
                document.getElementById("txt_result").style.color='#ffeb3bdb';
                document.getElementById("txt_result").style.backgroundColor='black';
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
            document.getElementById('txt_result').style.backgroundColor='Red'
           
            document.getElementById('txt_result').innerHTML = "PERDISTE"
            espera();

        }
    }

} else{
    alert('error datos input')
}

}

function ctrl_input(valor){

try{

if(valor=="") throw "empty";
if(isNaN(valor)) throw "No es un número";
valor=Number(valor);
if(valor<=10) throw "tiene que ser un valor menor o igual a 10";

} catch(err){
    document.getElementById('txt_result').innerHTML = "valor no valido,ingresa otro"
    console.log(err);
}    

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






