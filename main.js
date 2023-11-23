function tocaSom(idElementoAudio){
const elemento= document.querySelector(SeletorAudio);
 if(elemento && elemento.localName==='audio'){
   elemento.play();
 }
   else{
  alert('Elemento não encontrado ou seletor inválido');
}

const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.lenght; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio ='#som_${instrumento}';//template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

   tecla.onkeydown = function (evento) {
        
        if (evento.code=== ‘Enter’ ||evento.code==='space') {
        tecla.classList.add(‘ativa’);
        }
        }
    
    tecla.onkeyup = function () {
        tecla.classList.remove(‘ativa’);
        }    

}
