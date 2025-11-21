//app.js — (Main entry point)
import { fetchProducts } from './api.js';
import * as state from './state.js';
import * as router from './router.js';
import * as cart from './cart.js';

on DOMContentLoaded:
    load products from API
    initialize router
    attach cart button listener
    render the initial view (products grid)


document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    const cartBtn = document.querySelector('#btnCart');
    cartBtn.addEventListener('click', () => {
        cart.openCartModal();
    });

});
