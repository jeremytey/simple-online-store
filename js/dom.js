// dom.js — (DOM helpers + partial updates)
 
    export function update(element, htmlString) {
    element.innerHTML = htmlString;
}
    export function createElement(type, className) {
    const el = document.createElement(type);
    if (className) el.className = className;
    return el;
}