function resetErrors(inputs, errorTexts, errorInfo) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }

    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();

    return value !== "";
}

function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }

    value = value.toString().trim();
    const length = value.length;

    if (max && length > max) {
        return false;
    }

    return !(min && length < min);
}

function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return re.test(value);
}

function checkNumber(value) {
    if (!value) {
        return false;
    }
    return !isNaN(value);
}

function checkNumberRange(value, min, max) {
    if (!value) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    value = parseFloat(value);
    if (value < min) {
        return false;
    }
    return value <= max;
}

function checkDateIfAfter(value, compareTo) {
    if (!value) {
        return false;
    }
    if (!compareTo) {
        return false;
    }
    const valueDate = new Date(value);
    const compareToDate = new Date(compareTo);

    return valueDate.getTime() >= compareToDate.getTime();
}
