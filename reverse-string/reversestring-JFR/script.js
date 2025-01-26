function reverseString() {
    const inputField = document.getElementById("inputString");
    const resultDiv = document.getElementById("result");

    const input = inputField.value;
    const reversed = input.split("").reverse().join("");

    resultDiv.textContent = `Reversed: ${reversed}`;
}
