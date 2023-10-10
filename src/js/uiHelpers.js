export function displayError(element, message) {
    const errorSpan = element.nextElementSibling;
    element.classList.add('invalid');
    errorSpan.textContent = message;
    errorSpan.style.display = 'inline';
}

export function hideError(element) {
    const errorSpan = element.nextElementSibling;
    element.classList.remove('invalid');
    errorSpan.style.display = 'none';
}
