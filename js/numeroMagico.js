function numAleat() {
    document.getElementById('valor_oprt').innerHTML=3;
    
    return Math.round(Math.random() * 100); // se indica un valor aleatorio entre 1 a 100
}



function controlValor(numctrl, resultado) {


    if (numctrl == resultado) {
        return true
    }

    return false


}



function inicioJuego(resultado) {
let band=0;
let num = document.getElementById('num').value;
let oport= document.getElementById('valor_oprt').innerHTML;
console.log(oport);


    if(controlValor(num, resultado)){

        
        document.getElementById('valor_oprt').innerHTML=3;
        document.getElementById('resultado').style.display='flex !important';
        
        document.getElementById("num").disabled = true;
        document.getElementById("adivinar").disabled = true;
        document.getElementById('valor_oprt').innerHTML='ADIVINASTE!!';

    } else{
       
       alert('No adivinas')
        document.getElementById('valor_oprt').innerHTML=  document.getElementById('valor_oprt').innerHTML-1;
        oport= document.getElementById('valor_oprt').innerHTML;

        console.log(oport);    
        if(oport==0){

            document.getElementById("num").disabled = true;
            document.getElementById("adivinar").disabled = true;

            return document.getElementById('valor_oprt').innerHTML="PERDISTE"
            
        }
    }

}




let resultado = numAleat();
let oport=3;
console.log(resultado); // se muestra el valor aleator


//let valor = document.getElementById('num').value;


// function get_num(){

//     let valor = document.getElementById('num').value;
//     return valor;
// }
//  let numero= get_num();
//  inicioJuego(numero, i, resultado);
 





