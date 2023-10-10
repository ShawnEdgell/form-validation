export async function loadCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) { // If HTTP-status is 200-299
            throw new Error('Failed to fetch country list. HTTP Status: ' + response.status);
        }
        const data = await response.json();
        return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } catch (error) {
        console.error("There was an issue fetching the country list:", error);
        throw error;  // Propagate the error so you can handle it elsewhere if needed
    }
}
