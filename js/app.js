//app.js — (Main entry point)
import { fetchProducts } from './api.js';
import * as router from './router.js';
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


async function initializeApp(){
    const productsData = await fetchProducts();
    setProducts(productsData);
        router.navigate("landing");
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupGlobalEvents();
});