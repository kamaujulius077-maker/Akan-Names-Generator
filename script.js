document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('akanForm');

    form.addEventListener('submit', event => {
        event.preventDefault();
        generateAkanName();
    });

    document.getElementById('birthday').addEventListener('change', checkAndGenerate);
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener('change', checkAndGenerate);
    });
});

function checkAndGenerate() {
    const birthday = document.getElementById('birthday').value;
    const genderChecked = document.querySelector('input[name="gender"]:checked');

    if (birthday && genderChecked) {
        generateAkanName();
    }
}

function getDayNameFromDate(dateString) {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
        return null;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function generateAkanName() {
    const birthday = document.getElementById('birthday').value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const resultContainer = document.getElementById('result');
    const nameOutput = document.getElementById('nameOutput');
    const descriptionOutput = document.getElementById('resultDescription');

    if (!birthday) {
        alert('Please enter your birthday.');
        return;
    }

    if (!genderInput) {
        alert('Please select your gender.');
        return;
    }

    const dayName = getDayNameFromDate(birthday);
    if (!dayName) {
        alert('Please enter a valid date.');
        return;
    }

    const akanNames = {
        Sunday: { male: 'Kwasi', female: 'Akosua' },
        Monday: { male: 'Kwadwo', female: 'Adwoa' },
        Tuesday: { male: 'Kwabena', female: 'Abena' },
        Wednesday: { male: 'Kwaku', female: 'Akua' },
        Thursday: { male: 'Yaw', female: 'Yaa' },
        Friday: { male: 'Kofi', female: 'Afua' },
        Saturday: { male: 'Kwame', female: 'Ama' }
    };

    const gender = genderInput.value;
    const akanName = akanNames[dayName][gender];

    nameOutput.textContent = akanName;
    descriptionOutput.textContent = `You were born on ${dayName}. Your Akan name is ${akanName}.`;
    resultContainer.classList.remove('hidden');
}