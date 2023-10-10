export function validateEmail(email) {
    const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    return regex.test(email);
}

export function validatePassword(password) {
    return password.length >= 8;
}

export function validateCountry(country) {
    return country !== "";
}

export function validateZip(zip) {
    // Assuming zip codes are 5-6 digits, you might want to adjust this
    return /^\d{5,6}$/.test(zip);
}

export function validatePasswordConfirmation(password, confirmPassword) {
    return password === confirmPassword;
}
