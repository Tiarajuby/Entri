document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temperature = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(temperature)) {
        displayResult('Invalid input. Please enter a valid number.');
        return;
    }

    let convertedTemperature;
    if (inputUnit === outputUnit) {
        convertedTemperature = temperature;
    } else {
        switch (inputUnit) {
            case 'Celsius':
                if (outputUnit === 'Fahrenheit') {
                    convertedTemperature = (temperature * 9/5) + 32;
                } else if (outputUnit === 'Kelvin') {
                    convertedTemperature = temperature + 273.15;
                }
                break;
            case 'Fahrenheit':
                if (outputUnit === 'Celsius') {
                    convertedTemperature = (temperature - 32) * 5/9;
                } else if (outputUnit === 'Kelvin') {
                    convertedTemperature = (temperature - 32) * 5/9 + 273.15;
                }
                break;
            case 'Kelvin':
                if (outputUnit === 'Celsius') {
                    convertedTemperature = temperature - 273.15;
                } else if (outputUnit === 'Fahrenheit') {
                    convertedTemperature = (temperature - 273.15) * 9/5 + 32;
                }
                break;
            default:
                displayResult('Invalid unit selection.');
                return;
        }
    }

    displayResult(`Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputUnit}`);
});

function displayResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.display = 'block';
}
