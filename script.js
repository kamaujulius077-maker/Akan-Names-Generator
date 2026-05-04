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
    const DD = date.getDate();
    let MM = date.getMonth() + 1;
    let YYYY = date.getFullYear();
    if (MM < 3) {MM += 12; YYYY -= 1; }
    const CC = YYYY % 100;
    const YY = YYYY / 100;
   
    const d = Math.floor(((CC / 4) - 2 * CC -1) + (5 * YY /4) + (26 * (MM + 1) / 10) + DD) % 7;
    
     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[d];
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