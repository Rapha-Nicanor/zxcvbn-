// Get the button and message element
const floatingBtn = document.getElementById('floating-btn');
const message = document.getElementById('message');
// Array of messages
const messages = [
    "José Rizal had impeccable handwriting, described as elegant and virtually without erasures.",
    "Rizal had a beloved pet dog named Usman, which he often mentioned in his letters.",
    "Rizal was an avid reader with an extensive library, showing a deep appreciation for books.",
    "Rizal enjoyed outdoor activities like mountain climbing, swimming, and horseback riding.",
    "Rizal was musically inclined, playing instruments like the flute, guitar, and piano.",
    "Jose Rizal was proficient in over 20 languages, including Spanish, French, German, English, Latin, Greek, Arabic, Malay, and Chinese",
    "Rizal was not only fluent in various languages but also excelled in different fields. He was not only a writer but also a physician, ophthalmologist, sculptor, painter, educator, and revolutionary",
    "Rizal's image on our peso, imparts a resounding call not only to remember, but to emulate his brand of heroism. "
];

// Function to hide the message
function hideMessage() {
    message.style.display = 'none';
}

// Function to create and append exit button
function appendExitButton() {
    // Create an exit button
    const exitButton = document.createElement('button');
    exitButton.textContent = 'X';
    exitButton.classList.add('exit-btn');

    // Append exit button to message box
    message.appendChild(exitButton);

    // Event listener for exit button
    exitButton.addEventListener('click', () => {
        hideMessage();
    });
}

// Add event listener to the button
floatingBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    message.textContent = randomMessage;
    message.style.display = 'block'; // Show the message

    appendExitButton();

    setTimeout(hideMessage, 5000);
});
