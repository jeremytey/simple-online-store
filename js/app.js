//app.js — (Main entry point)
import { fetchProducts } from './api.js';
import * as router from './router.js';
import { openCartModal } from './cart.js';
import  { setProducts } from './products.js';

function setupGlobalEvents() {
    const btnViewProducts = document.querySelector('#btnViewProducts');
    const btnCart = document.querySelector('#btnCart');
    const btnBackToProducts = document.querySelector('#btnBackToProducts');
    const btnCartSeeProducts = document.querySelector('#btnCartSeeProducts');

    btnViewProducts.addEventListener('click', () => router.navigate("products"));
    btnCart.addEventListener('click', () => router.navigate("cart"));
    btnBackToProducts.addEventListener('click', () => router.navigate("products"));
    btnCartSeeProducts.addEventListener('click', () => router.navigate("products"));
}


function initializeApp(){
    fetchProducts().then(list => {
        setProducts(list);
        router.navigate("landing");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupGlobalEvents();
});