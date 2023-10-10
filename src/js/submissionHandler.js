export function displaySuccessfulSubmission(form) {
    // Assuming you have a reference to the form container
    const formContainer = document.querySelector('.form-container');

    // Create a flex container div
    const flexContainer = document.createElement('div');
    flexContainer.className = 'flex-container'; // Add the CSS class to the div

    // Create the success message
    const formSuccess = document.createElement('div');
    formSuccess.textContent = "Form successfully submitted! 🎉";
    formSuccess.style.color = 'green';
    formSuccess.style.fontSize = '1.5em';
    formSuccess.style.marginTop = '20px';

    // Create a button for the user to return to the form
    const backButton = document.createElement('button');
    backButton.textContent = "Return to Form";
    backButton.style.marginTop = '10px';
    backButton.addEventListener('click', () => {
        flexContainer.style.display = 'none'; // Hide the flex container
        form.style.display = 'block'; // Display the form
    });

    // Append the success message and button to the flex container
    flexContainer.appendChild(formSuccess);
    flexContainer.appendChild(backButton);

    // Append the flex container to the form container
    formContainer.appendChild(flexContainer);

    form.reset(); // Reset the form
    form.style.display = 'none'; // Hide the form
}
