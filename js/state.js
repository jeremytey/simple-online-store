// state.js — (Application state: cart + products)

let products = []
let cart = []

function setProducts(list):
    products = list

function getProducts():
    return products

function addToCart(productId):
    push productId to cart

function removeFromCart(productId):
    remove first match

function getCartCount():
    return cart.length