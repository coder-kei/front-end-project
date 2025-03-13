// Simulación de carrito de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para guardar el carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = cart.map(item => `
        <li>
            ${item}
            <button onclick="removeFromCart('${item}')">Eliminar</button>
        </li>
    `).join('');
    cartCount.textContent = cart.length;
}

// Función para eliminar un producto del carrito
function removeFromCart(product) {
    cart = cart.filter(item => item !== product);
    saveCart();
    updateCartDisplay();
}

// Función para vaciar el carrito
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    saveCart();
    updateCartDisplay();
    alert('Carrito vaciado.');
});

// Añadir productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.card').querySelector('.card-title').textContent;
        cart.push(product);
        saveCart();
        updateCartDisplay();
        alert(`¡${product} añadido al carrito!`);
    });
});

// Mostrar/ocultar el carrito
document.getElementById('cart-toggle').addEventListener('click', () => {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartToggle = document.getElementById('cart-toggle');
    if (!cartToggle.contains(event.target) && !cartDropdown.contains(event.target)) {
        cartDropdown.style.display = 'none';
    }
});

// Cargar el carrito al iniciar la página
updateCartDisplay();

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    this.reset();
});

// Desplazamiento suave para los enlaces de la barra de navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});