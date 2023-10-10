import '../css/style.css';
import {
    validateEmail,
    validatePassword,
    validateCountry,
    validateZip,
    validatePasswordConfirmation,
} from './validators.js';
import { displayError, hideError } from './uiHelpers.js';
import { initializeCountryDropdown } from './dropdown.js';
import { displaySuccessfulSubmission } from './submissionHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize country dropdown
    initializeCountryDropdown();

    // Form Elements
    const form = document.getElementById('myForm');
    const emailInput = document.getElementById('email');
    const countryInput = document.getElementById('country');
    const zipInput = document.getElementById('zip');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const formError = document.getElementById('formError');

    const validateAll = () => {
        let isValid = true;

        // Email validation
        if (!validateEmail(emailInput.value)) {
            displayError(emailInput, "Invalid email address.");
            isValid = false;
        } else {
            hideError(emailInput);
        }

        // Country validation
        if (!validateCountry(countryInput.value)) {
            displayError(countryInput, "Please select a country.");
            isValid = false;
        } else {
            hideError(countryInput);
        }

        // Zip validation
        if (!validateZip(zipInput.value)) {
            displayError(zipInput, "Invalid zip code.");
            isValid = false;
        } else {
            hideError(zipInput);
        }

        // Password validation
        if (!validatePassword(passwordInput.value)) {
            displayError(passwordInput, "Password must be at least 8 characters.");
            isValid = false;
        } else {
            hideError(passwordInput);
        }

        // Confirm password validation
        if (!validatePasswordConfirmation(passwordInput.value, confirmPasswordInput.value)) {
            displayError(confirmPasswordInput, "Passwords do not match.");
            isValid = false;
        } else {
            hideError(confirmPasswordInput);
        }

        return isValid;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateAll()) {
            displaySuccessfulSubmission(form);
        } else {
            formError.textContent = "Please fill out all fields correctly.";
            formError.style.display = 'block';
        }
    });
});
