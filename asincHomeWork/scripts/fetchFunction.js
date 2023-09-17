
import { setCurrentUserId, getCurrentUserId, maxUserId, userName, userEmail, userWebsite, prevUser, nextUser } from './variables.js';

export async function loadUserData(num = 0) {
    let newUserId = getCurrentUserId() + num;

    if (newUserId < 1) newUserId = 1; 
    if (newUserId > maxUserId) newUserId = maxUserId;

    const url = `https://jsonplaceholder.typicode.com/users/${newUserId}`;

    try {
        const response = await fetch(url);        
        const data = await response.json();

        userName.textContent = `Name:${data.name}`;
        userEmail.textContent = `Email:${data.email}`;
        userWebsite.textContent = `Website:${data.website}`;
        prevUser.disabled = (newUserId === 1);
        nextUser.disabled = (newUserId === maxUserId);
    } catch (e) {
        console.log("Error:", e);
    }
    
    setCurrentUserId(newUserId);
    localStorage.setItem('currentUserId', newUserId.toString());
}
