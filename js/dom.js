// dom.js — (DOM helpers + partial updates)
function qs(selector):
    return document.querySelector(selector)

function update(element, htmlString):
    element.innerHTML = htmlString

function createEl(type, className):
    return document.createElement(type)
