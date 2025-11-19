//products.js — (Render product list and details)

function renderList():
    get products from state
    generate product cards HTML
    update viewRoot using dom.update()

function renderDetails(id):
    get product by id
    generate product details HTML
    update viewRoot

function attachProductCardEvents():
    on click of product card -> router.showProductDetails()

