document
  .getElementById("deposit-button")
  .addEventListener("click", function () {

    // Update Deposite Ammount 
    const depositInput = parseFloat(document.getElementById("deposit-input").value);

    const depositPvalue = parseFloat(document.getElementById("deposit-fild").innerText);
    // console.log(depositPvalue)
    const updateAmmount = depositInput + depositPvalue
    document.getElementById("deposit-fild").innerText = updateAmmount ;

// Updata Account Balance 
const privousBalance = parseFloat(document.getElementById('balance-fild').innerText);
const updateBalance =  depositInput + privousBalance;
console.log(updateBalance);
document.getElementById('balance-fild').innerText = updateBalance;
// Update Withdrawal Ammount
// console.log(depositInput);
















    // Clear input 

    document.getElementById("deposit-input").value= " ";
  });
