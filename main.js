function tocaSom(idElementoAudio){
  document.querySelector(idElementoAudio).play()
}

const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.lenght; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio ='#som_${instrumento}';
