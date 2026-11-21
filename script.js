function calculate() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('op').value;
    const resultDiv = document.getElementById('result');
    if (isNaN(a) || isNaN(b)) {
        resultDiv.textContent = 'Please enter both numbers.';
        return;
    }
    let res;
    switch (op) {
        case 'add':
            res = a + b;
            break;
        case 'sub':
            res = a - b;
            break;
        case 'mul':
            res = a * b;
            break;
        case 'div':
            if (b === 0) {
                resultDiv.textContent = 'Division by zero is not allowed.';
                return;
            }
            res = a / b;
            break;
        default:
            res = 'Unknown operation';
    }
    resultDiv.textContent = `Result: ${res}`;
}
