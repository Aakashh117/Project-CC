// Number System Converter Functions (Binary, Decimal, Hexadecimal)
function convertNumber() {
    const inputNumber = document.getElementById("inputNumber").value.trim();
    const inputBase = document.getElementById("inputBase").value;
    const outputBase = document.getElementById("outputBase").value;
    let convertedNumber = "";

    try {
        let numberInDecimal;

        // Convert the input number to Decimal
        if (inputBase === 'binary') {
            numberInDecimal = parseInt(inputNumber, 2);
        } else if (inputBase === 'hexadecimal') {
            numberInDecimal = parseInt(inputNumber, 16);
        } else {
            numberInDecimal = parseInt(inputNumber, 10);
        }

        // Convert from Decimal to the output base
        if (outputBase === 'binary') {
            convertedNumber = numberInDecimal.toString(2);
        } else if (outputBase === 'hexadecimal') {
            convertedNumber = numberInDecimal.toString(16).toUpperCase();
        } else {
            convertedNumber = numberInDecimal.toString(10);
        }

        // Display the converted number
        document.getElementById("numberResult").textContent = convertedNumber;
    } catch (error) {
        document.getElementById("numberResult").textContent = "Invalid input!";
    }
}
