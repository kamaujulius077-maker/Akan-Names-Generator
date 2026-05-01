
function generateAkanName() {
    const dateValue = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const resultElement = document.getElementById("result");

    if (!dateValue) {
        resultElement.innerText = "Please enter a valid date.";
        return;
    }

const birthDate = new Date(dateValue); // getDay() returns 0 (Sunday) through 6 (Saturday)
const dayIndex = birthDate.getDay();

const names = { male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const akanName = names[gender][dayIndex];
const dayName = days[dayIndex];

resultElement.innerText = `You were born on a <strong>${dayName}</strong>.<br> Your Akan name is <strong>${akanName}</strong>.`;
}