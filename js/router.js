// router.js — (SPA View switching) Single Pape Application

function showProductsView():
    navigate("products")

function showProductDetails(id):
    navigate("details", { id })

function navigate(viewName, data):
    hide all views

    if viewName == "landing":
        show landingView

    if viewName == "products":
        show productsView
        products.renderList()

    if viewName == "details":
        show detailsView
        products.renderDetails(data.id)

    if viewName == "cart":
        show cartView
        cart.openCartModal()
