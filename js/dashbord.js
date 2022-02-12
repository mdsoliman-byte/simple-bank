document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input").value;
    document.getElementById("deposit-fild").innerText = depositInput;
  });
