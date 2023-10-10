import { loadCountries } from './api.js';

export function initializeCountryDropdown() {
    const select = document.getElementById('country');
    loadCountries()
        .then(countries => {
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                select.appendChild(option);
            });
        })
        .catch(error => {
            // Handle the error gracefully by informing the user
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Failed to load countries';
            select.appendChild(option);
            select.disabled = true;  // Disabling the dropdown since the countries couldn't be loaded
        });
}