console.log('Hello!');

const fnd = document.getElementById('fondo');
fnd.addEventListener('click', () => {
  document.querySelector('link[href="styles.css"]').href = 'styles2.css';
})

const fnt = document.getElementById('fuente');
fnt.addEventListener('click', () => {
  document.querySelector('link[href="styles.css"]').href = 'styles3.css';
})

const nevada = document.getElementById('animacion');
nevada.addEventListener('click', () => {
  document.querySelector('link[href="styles.css"]').href = 'estiloNevando.css';
})

//Validación de los campos ingresados
const form = document.querySelector('form');
const submitBtn = document.getElementById('enviar');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');

  const name = nameInput.value;
  const email = emailInput.value;
  const mensaje = mensajeInput.value;

  if (!isValidName(name)) {
    alert('Ingresa un nombre válido');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Ingresa un correo electrónico válido');
    return;
  }

  // Si llegamos hasta aquí, los datos son válidos
  // Puedes enviar el formulario o hacer cualquier otra acción
  form.submit(); // Envía el formulario
});

console.log(`Nombre: ${name}`);
console.log(`Correo electrónico: ${email}`);
console.log(`Mensaje: ${mensaje}`);

function isValidName(name) {
  const nameRegex = /^[a-zA-Z ]+$/; // Solo letras y espacios de la A a la Z (mayúsculas y minúsculas)
  return nameRegex.test(name);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
  return emailRegex.test(email);
}
