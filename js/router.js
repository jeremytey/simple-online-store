// router.js — (SPA View switching) Single Pape Application
import * as products from './products.js';
import { openCartModal } from './cart.js';  

    function hideAll() {
        const views = document.querySelectorAll('.view');
        views.forEach(view => view.classList.add('hidden'));
    }

    export function showProductsView() {
    navigate("products");
    }

    export function showProductDetails(id) {
    navigate("details", { id });
    }


 export function navigate(viewName, data) {
    hideAll();
        if (viewName === "landing") {
        document.querySelector('#landingView').classList.remove('hidden');
    } else if (viewName === "products") {
        document.querySelector('#productsView').classList.remove('hidden');
        products.renderList();
    } else if (viewName === "details") {
        document.querySelector('#detailsView').classList.remove('hidden');
        products.renderDetails(data.id);
    } else if (viewName === "cart") {
       document.querySelector('#cartView').classList.remove('hidden');
         openCartModal();
    }
    }
