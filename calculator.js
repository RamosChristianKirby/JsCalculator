const calculator = document.getElementById('calculator');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const results = document.getElementById('results');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

multiplyBtn.addEventListener('click', function() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        results.innerHTML = `Result: ${result}`;
    } else {
        results.innerHTML = 'Please enter valid numbers.';
    }
});

divideBtn.addEventListener('click', function() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        const result = num1 / num2;
        results.innerHTML = `Result: ${result}`;
    } else {
        results.innerHTML = 'Please enter valid numbers, and make sure the second number is not zero.';
    }
});