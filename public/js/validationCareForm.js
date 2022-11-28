function validateForm() {
    const catInput = document.getElementById('cat');
    const caretakerInput = document.getElementById('caretaker');
    const dateFromInput = document.getElementById('dateFrom');
    const dateToInput = document.getElementById('dateTo');
    const totalCostInput = document.getElementById('totalCost');

    const errorCat = document.getElementById('errorCat');
    const errorCaretaker = document.getElementById('errorCaretaker');
    const errorStartDate = document.getElementById('errorStartDate');
    const errorEndDate = document.getElementById('errorEndDate');
    const errorTotalCost = document.getElementById('errorTotalCost');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([catInput, caretakerInput, dateFromInput, dateToInput, totalCostInput],
        [errorCat, errorCaretaker, errorStartDate, errorEndDate, errorTotalCost],
                errorsSummary);

    let valid = true;

    if (!checkRequired(catInput.value)) {
        valid = false;
        catInput.classList.add("error-input");
        errorCat.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(caretakerInput.value)) {
        valid = false;
        caretakerInput.classList.add("error-input");
        errorCaretaker.innerText = "Pole jest wymagane";
    }

    /*let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        hour = '' + nowDate.getHours(),
        minute = '' + nowDate.getMinutes(),
        year = nowDate.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (hour.length < 2)
        hour = '0' + hour;
    if (minute.length < 2)
        minute = '0' + minute;
    const nowString = ([year, month, day].join('-')).concat("T").concat([hour, minute].join(':'));*/
    const nowDate = new Date();

    if (!checkRequired(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorStartDate.innerText = "Pole jest wymagane";
    } else if (checkDateIfAfter(dateFromInput.value, nowDate)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorStartDate.innerText = "Data nie może być z przyszłości";
    }

    if (!checkRequired(dateToInput.value)) {
        valid = false;
        dateToInput.classList.add("error-input");
        errorEndDate.innerText = "Pole jest wymagane";
    } else if (!checkDateIfAfter(dateToInput.value, dateFromInput.value)) {
        valid = false;
        dateToInput.classList.add("error-input");
        errorEndDate.innerText = "Data do powinna być późniejsza niż data od";
    }

    if (!checkRequired(totalCostInput.value)) {
        valid = false;
        totalCostInput.classList.add("error-input");
        errorTotalCost.innerText = "Pole jest wymagane"
    } else if (!checkNumber(totalCostInput.value)) {
        valid = false;
        totalCostInput.classList.add("error-input");
        errorTotalCost.innerText = "Pole powinno być liczbą"
    } else if (!checkNumberRange(totalCostInput.value, 10, 1_000_000)) {
        valid = false;
        totalCostInput.classList.add("error-input");
        errorTotalCost.innerText = "Pole powinno być liczbą w zakresie od 10 do 1000000"
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}