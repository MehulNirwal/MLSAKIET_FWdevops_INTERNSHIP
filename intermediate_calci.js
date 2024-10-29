function addToResult(value) {
    document.getElementById('res').value += value;
}

function clearPanel() {
    document.getElementById('res').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('res');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
