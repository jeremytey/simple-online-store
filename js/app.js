//app.js — (Main entry point)
import { fetchProducts } from './api.js';
import * as router from './router.js';


on DOM loaded:
	initializeApp()
    setupGlobalEvenets()



function setupGlobalEvents():
//attach button listener to all buttons
    # Landing page → products
    btnViewProducts.onclick = () => router.navigate("products")

    # Header cart button
    btnCart.onclick = openCartModal

    # Product details back button
    btnBackToProducts.onclick = () => router.navigate("products")

    # Cart page "See more products"
    btnCartSeeProducts.onclick = () => router.navigate("products")


function initializeApp()
	fetchProducts()
	setProducts(list)
    router.navigate("landing")

