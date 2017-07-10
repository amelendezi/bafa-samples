import { secretButton, secretParagraph } from './dom-loader.js'

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the secret';
    } else {
        secretButton.textContent = 'Show the secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}