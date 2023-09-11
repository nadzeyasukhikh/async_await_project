let currentUserId = 1;
const maxUserId = 10;


const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const userWebsite = document.querySelector('.user-website');
const prevUser = document.querySelector('#prev-user');
const nextUser = document.querySelector('#next-user');

async function loadUserData(num = 0) {
    currentUserId += num;

    if (currentUserId < 1) currentUserId = 1; 
    if (currentUserId > maxUserId) currentUserId = maxUserId;

    const url = `https://jsonplaceholder.typicode.com/users/${currentUserId}`;

    try {
        const response = await fetch(url);        
        const data = await response.json();

        
        userName.textContent = `Name:${data.name}`;
        userEmail.textContent = `Email:${data.email}`;
        userWebsite.textContent = `Website:${data.website}`;
        prevUser.disabled = (currentUserId === 1);
        nextUser.disabled = (currentUserId === maxUserId);
    } catch (e) {
        console.log("Error:", e);
    }
}

nextUser.addEventListener('click', () => loadUserData(1));

prevUser.addEventListener('click', () => loadUserData(-1));

loadUserData();


const nameInput = document.querySelector('.user-name-input');
const emailInput = document.querySelector('.user-email-input');
const websiteInput = document.querySelector('.user-website-input');
const editIcon = document.querySelectorAll('.edit-icon')
editIcon.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const field = e.currentTarget.dataset.field;
        
       
toggleEditMode(field);
    });
});

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

