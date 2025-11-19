//products.js — (Render product list and details)

function renderList() {
    const products = getProducts();
    const productsContainer = document.querySelector('#productsContainer');
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        </div>
    `).join('');
}   

function renderDetails(id) {
    const product = getProductById(id);
    const productDetailsContainer = document.querySelector('#detailsContainer');
    productDetailsContainer.innerHTML = `
        <div class="product-details">
            <h2>${product.id}</h2>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        </div>
    `;
}

function attachProductCardEvents() {
    const productCards = document.querySelector('#productsContainer');

    productCards.addEventListener('click', (event) => {
        const card = event.target.closest('.product-card');
        if (card) {
            const productId = card.getAttribute('data-id');
            router.showProductDetails(productId);
        }
    });
}