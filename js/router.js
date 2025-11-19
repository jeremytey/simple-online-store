// router.js — (SPA View switching) Single Pape Application

function showProductsView():
    call products.renderList()

function showProductDetails(id):
    call products.renderDetails(id)

function navigate(viewName, data):
    decide which view to load based on arguments