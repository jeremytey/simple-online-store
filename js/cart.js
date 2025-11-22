// cart.js — (Render and manage shopping cart)
import { getCartItems, removeFromCart } from './state.js';

export function openCartModal() {
    const cartModal = document.querySelector('#cartView');
    cartModal.classList.remove('hidden');
    renderCartList();
}

export function renderCartList() {
    const cartContainer = document.querySelector('#cartContainer')
    const cartItems = getCartItems(); 
    cartContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <button class="btnRemove">Remove</button>
        </div>
    `).join('');
    attachCartEvents();
}

// Attach event listeners to cart items for removal and checkout
function attachCartEvents() {
    const cartContainer = document.querySelector('#cartContainer');

    cartContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('btnRemove')) {
            const item = event.target.closest('.cart-item');
            const productId = item.getAttribute('data-id');
            removeFromCart(productId);
            renderCartList();
        }
    });

    const checkoutBtn = document.querySelector('#btnPlaceOrder');
    checkoutBtn.addEventListener('click', () => {
        alert('Checkout functionality not implemented yet.');
    });
}