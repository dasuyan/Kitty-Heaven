function validateForm() {
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    const primaryRoleInput = document.getElementById('primaryRole');

    const errorName = document.getElementById('errorName');
    const errorSurname = document.getElementById('errorSurname');
    const errorEmail = document.getElementById('errorEmail');
    const errorPrimaryRole = document.getElementById('errorPrimaryRole');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, surnameInput, emailInput, primaryRoleInput],
                [errorName, errorSurname, errorEmail, errorPrimaryRole],
                errorsSummary);

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

    if (!checkRequired(surnameInput.value)) {
        valid = false;
        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(surnameInput.value, 2, 60)) {
        valid = false;
        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }

    if (!checkRequired(primaryRoleInput.value)) {
        valid = false;
        primaryRoleInput.classList.add("error-input");
        errorPrimaryRole.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(primaryRoleInput.value, 2, 60)) {
        valid = false;
        primaryRoleInput.classList.add("error-input");
        errorPrimaryRole.innerText = "Pole powinno zawierać od 4 do 60 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}