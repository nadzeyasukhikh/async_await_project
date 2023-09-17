
 const maxUserId = 10;

 let currentUserId = parseInt(localStorage.getItem('currentUserId'), 10) || 1;

 export function setCurrentUserId(newId) {
    currentUserId = newId;
}

export function getCurrentUserId() {
    return currentUserId;
}

 const userName = document.querySelector('.user-name');
 const userEmail = document.querySelector('.user-email');
 const userWebsite = document.querySelector('.user-website');
 const prevUser = document.querySelector('#prev-user');
 const nextUser = document.querySelector('#next-user');
 const nameInput = document.querySelector('.user-name-input');
 const emailInput = document.querySelector('.user-email-input');
 const websiteInput = document.querySelector('.user-website-input');
 const editIcon = document.querySelectorAll('.edit-icon');


export { maxUserId, currentUserId, userName, userEmail, userWebsite, prevUser, nextUser,
nameInput, emailInput, websiteInput, editIcon }
