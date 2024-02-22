
  // Function to perform calculations
  function calcNumbers(value) {
    document.form.displayResult.value += value;
  }

  // Function to clear the display
  function clearDisplay() {
    document.form.displayResult.value = '';
  }

  // Function to delete the last character
  function deleteLastCharacter() {
    const currentValue = document.form.displayResult.value;
    document.form.displayResult.value = currentValue.slice(0, -1);
  }

  // Function to calculate and display the result
  function calculateResult() {
    try {
      document.form.displayResult.value = eval(document.form.displayResult.value);
    } catch (error) {
      document.form.displayResult.value = 'Error';
    }
  }

