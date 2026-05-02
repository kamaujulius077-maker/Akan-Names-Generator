document.addEventListener('DOMContentLoaded', () => {
    console.log('script.js loaded');
});

function checkAndGenerate() {
    const date = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (date && gender) {
        generateAkanName();
    }
}
function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 3) {month += 12; year -= 1; }
    const k = year % 100;
    const j = Math.floor(year / 100);
    const h = (day + Math.floor(13 * (month + 1) / 5) + Math. floor(k / 4) + Math.floor(j / 4) - 2* j) % 7;
    return (h + 6) % 7; // 0=Sunday, 1=Monday... 6=Saturday
}
function generateAkanName() {
    // 1. Get values from HTML
    const dateInput = document.getElementById('birthday').value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // 2. Validate
    if (!dateInput) {
        alert('Please enter your birthday.');
        return;
    }

    if (!genderInput) {
        alert('Please select your gender.');
        return;
    }

    // 3. Calculate day of week - 0-Sunday, 1-Monday, ..., 6-Saturday
    const dayIndex = getDayOfWeek(dateInput);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[dayIndex];

    // 4. Akan names database - matches day day order
    const akanNames = {
        Sunday: { male: 'Kwasi', female: 'Akosua' },
        Monday: { male: 'Kwadwo', female: 'Adwoa' },
        Tuesday: { male: 'Kwabena', female: 'Abena' },
        Wednesday: { male: 'Kwaku', female: 'Akua' },
        Thursday: { male: 'Yaw', female: 'Yaa' },
        Friday: { male: 'Kofi', female: 'Afua' },
        Saturday: { male: 'Kwame', female: 'Ama' }
    };

    // 5. Get Akan name
    const akanName = akanNames[gender][dayName];

    // 6. Display result
    document.getElementById('nameOutput').textContent = akanName[gender][dayName];
    document.getElementById('resultDescription').textContent = `You were born on ${dayName}.`;

    //7. Show the result div - remove hidden class
    document.getElementById('result').classList.remove('hidden');
}