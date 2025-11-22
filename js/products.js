//products.js — (Render product list and details)
import { getProducts, getProductById, addToCart, getCartCount } from './state.js';
import * as router from './router.js';

export function renderList() {
    const products = getProducts();
    const productsContainer = document.querySelector('#productsContainer');
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        </div>
    `).join('');
    attachProductCardEvents();
}   

export function renderDetails(id) {
    const product = getProductById(id);
    const productDetailsContainer = document.querySelector('#detailsContainer');
    productDetailsContainer.innerHTML = `
        <div class="product-details">
            <h2>${product.id}</h2>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button id="btnAddToCart" class="primary-btn" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
    attachAddToCartEvent();
}

function attachAddToCartEvent() {
    const btnAddToCart = document.querySelector('#btnAddToCart');
    if (btnAddToCart) {
        btnAddToCart.addEventListener('click', () => {
            const productId = btnAddToCart.getAttribute('data-product-id');
            addToCart(productId);
            updateCartCount();
        });
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('#cartCount');
    if (cartCount) {
        cartCount.textContent = getCartCount();
    }
}
// Attach event listeners to product cards for navigation to details
export function attachProductCardEvents() {
    const productCards = document.querySelector('#productsContainer');

    productCards.addEventListener('click', (event) => {
        const card = event.target.closest('.product-card');
        if (card) {
            const productId = card.getAttribute('data-id');
            router.showProductDetails(productId);
        }
    });
}