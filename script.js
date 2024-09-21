function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    
    let result;

    if (inputUnit === outputUnit) {
        result = inputValue;
    } else if (inputUnit === "C") {
        if (outputUnit === "F") {
            result = (inputValue * 9/5) + 32;
        } else if (outputUnit === "K") {
            result = inputValue + 273.15;
        }
    } else if (inputUnit === "F") {
        if (outputUnit === "C") {
            result = (inputValue - 32) * 5/9;
        } else if (outputUnit === "K") {
            result = (inputValue - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === "K") {
        if (outputUnit === "C") {
            result = inputValue - 273.15;
        } else if (outputUnit === "F") {
            result = (inputValue - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("result").innerText = result.toFixed(2);
}
