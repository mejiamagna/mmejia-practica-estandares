console.log('Hello!');

//Funcion para modo telefono o tableta
(function () {
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener('click', () => {
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle('menu__item--active');

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;
      });
    });
  };

  const deleteStyleHeight = () => {
    listElements.forEach((element) => {
      if (element.children[1].getAttribute('style')) {
        element.children[1].removeAttribute('style');
        element.classList.remove('menu__item--active');
      }
    });
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight();
      if (list.classList.contains('menu__links--show'))
        list.classList.remove('menu__links--show');
    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 800) {
    addClick();
  }

  menu.addEventListener('click', () =>
    list.classList.toggle('menu__links--show')
  );
})();

//Validación de los campos ingresados
const form = document.querySelector('form');
const submitBtn = document.getElementById('submit-btn');

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
console.log('Mensaje: ${mensaje}');

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
