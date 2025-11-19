// state.js — (Application state: cart + products)
let products = []
let cart = []

    export function setProducts(list) {
    products = list;
}

    export function getProductById(id){
    return products.find(p => p.id === id)
    };
   
    export function getProducts() {
    return products;
}

    export function addToCart(productId) {
    cart.push(productId);
    // push other details too
}

    export function removeFromCart(productId) {
    const index = cart.indexOf(productId);
    if (index > -1) {
        cart.splice(index, 1);
    }
}
    export function getCartCount() {
    return cart.length;
}
    export function getCartItems() {
    return cart.map(id => getProductById(id));
}
