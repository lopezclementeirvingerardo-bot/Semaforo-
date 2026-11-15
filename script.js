// Elementos
const luzRoja = document.getElementById('luzRoja');
const luzVerde = document.getElementById('luzVerde');
const btnAccionar = document.getElementById('btnAccionar');
const btnReset = document.getElementById('btnReset');

función establecerEstado(color){
  // Apagar
  luzRoja.classList.remove('activa');
  luzVerde.classList.remove('activa');
  // Encender seleccionado
  si(color === 'rojo'){
    luzRoja.classList.add('activa');
  }demás{
    luzVerde.classList.add('activa');
  }
}

función accionar(){
  const r = Math.random();
  color constante = r < 0,6? 'rojo' : 'verde'; // Rojo 60% | verdes 40%
  establecerEstado(color);
}

función reset(){
  luzRoja.classList.remove('activa');
  luzVerde.classList.remove('activa');
}

btnAccionar.addEventListener('click', accionar);
btnReset.addEventListener('click', reset);
