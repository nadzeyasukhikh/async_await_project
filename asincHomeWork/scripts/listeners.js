
import { prevUser, nextUser, editIcon } from './variables.js';
import { loadUserData } from './fetchFunction.js';

export function initializeListeners() {
    nextUser.addEventListener('click', () => loadUserData(1));
    prevUser.addEventListener('click', () => loadUserData(-1));

    editIcon.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const field = e.currentTarget.dataset.field;
            toggleEditMode(field);
        });
    });
}

function toggleEditMode(field) {
    const label = document.querySelector(`.user-${field}`);
    const input = document.querySelector(`.user-${field}-input`);

    if (input.style.display === 'none') {
        input.value = label.textContent.replace(`${capitalize(field)}:`, '').trim();
        label.style.display = 'none';
        input.style.display = 'block';
    } else {
        label.textContent = `${capitalize(field)}:${input.value}`;
        label.style.display = 'block';
        input.style.display = 'none';
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
