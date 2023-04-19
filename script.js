console.log('Hello!');

const form = document.querySelector('form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  const name = nameInput.value;
  const email = emailInput.value;

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

function isValidName(name) {
  const nameRegex = /^[a-zA-Z ]+$/; // Solo letras y espacios de la A a la Z (mayúsculas y minúsculas)
  return nameRegex.test(name);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
  return emailRegex.test(email);
}

const botonEstilo2 = document.getElementById('estilo2');

botonEstilo2.addEventListener('click', () => {
  document.querySelector('link[href="styles.css"]').href = 'styles2.css';
});
