document.addEventListener('DOMContentLoaded', function() {
    console.log("Bright Mind website loaded.");

    // Mood tracking functionality
    const moodSlider = document.getElementById('mood-slider');
    const moodValueDisplay = document.getElementById('mood-value');
    const moodSubmitButton = document.getElementById('mood-submit');

    // Display the current mood value based on slider
    moodSlider.addEventListener('input', function() {
        moodValueDisplay.textContent = `Mood: ${moodSlider.value}`;
    });

    // Handle mood submission
    moodSubmitButton.addEventListener('click', function() {
        const currentMood = moodSlider.value;
        alert(`Mood logged: ${currentMood}`);
        // Here you can send the mood to a backend or store it locally
    });

    // Chat functionality
    const chatInput = document.getElementById('chat-input');
    const chatSendButton = document.getElementById('chat-send');
    const chatBox = document.querySelector('.chat-box');

    // Handle chat submission
    chatSendButton.addEventListener('click', function() {
        const message = chatInput.value;
        if (message.trim() !== "") {
            const newMessage = document.createElement('p');
            newMessage.textContent = message;
            chatBox.appendChild(newMessage);
            chatInput.value = ''; // Clear input after sending
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
        } else {
            alert('Please enter a message!');
        }
    });

    // Optional: Allow pressing 'Enter' to send messages
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            chatSendButton.click();
        }
    });
});
