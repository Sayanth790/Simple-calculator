let calc = document.querySelector("#calc");
let buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let buttonValue = button.textContent;

    if (buttonValue === "C") {
      calc.value = "";
    } else if (buttonValue === "=") {
      try {
        calc.value = eval(calc.value);
      } catch (error) {
        calc.value = "Error";
      }
    } else {
      calc.value += buttonValue;
    }
  });
});
