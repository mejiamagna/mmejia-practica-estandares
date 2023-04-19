console.log('Hello!');

const botonEstilo2 = document.getElementById('estilo2');

botonEstilo2.addEventListener('click', () => {
  document.querySelector('link[href="styles.css"]').href = 'styles2.css';
});
