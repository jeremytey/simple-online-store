// dom.js — (DOM helpers + partial updates)
function qs(selector):
    return document.querySelector(selector)

function update(element, htmlString):
    element.innerHTML = htmlString

function createEl(type, className):
    return document.createElement(type)

    export function qs(selector) {
    return document.querySelector(selector);
}

    export function update(element, htmlString) {
    element.innerHTML = htmlString;
}
    export function createEl(type, className) {
    const el = document.createElement(type);
    if (className) el.className = className;
    return el;
}