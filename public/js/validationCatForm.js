function validateForm() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const errorName = document.getElementById('errorName');
    const errorAge = document.getElementById('errorAge');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, ageInput], [errorName, errorAge], errorsSummary);

    let valid = true;

    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }


    if (!checkRequired(ageInput.value)) {
        valid = false;
        ageInput.classList.add("error-input");
        errorAge.innerText = "Pole jest wymagane";
    } else if (!checkNumber(ageInput.value)) {
        valid = false;
        ageInput.classList.add("error-input");
        errorAge.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(ageInput.value, 0, 50)) {
        valid = false;
        ageInput.classList.add("error-input");
        errorAge.innerText = "Pole powinno być liczbą w zakresie od 0 do 50";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}