// api.js — (API calls and data fetching)

    export async function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Fidget Spinner", description: "Description of Product A", price: 29.99 },
                { id: 2, name: "SECKSLOL", description: "Description of Product B", price: 49.99 },
                { id: 3, name: "Product C", description: "Description of Product C", price: 19.99 }
            ]); 
        }, 500); 
    });
}
