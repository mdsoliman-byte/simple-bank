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
    // Clear input 

    document.getElementById("deposit-input").value= " ";
  });
// Update Withdrawal Ammount


document.getElementById('withdrawal-button').addEventListener('click' , function(){
    const withdrawalAmmount = parseFloat(document.getElementById('withdrawal-fild').innerText);
const withdrawalFild = parseFloat(document.getElementById('withdrawal-input').value);
const newWithdraw = withdrawalAmmount + withdrawalFild;
document.getElementById('withdrawal-fild').innerText = newWithdraw;
// Update Balance 
const privousBalance = parseFloat(document.getElementById('balance-fild').innerText);
const newBalance = privousBalance - withdrawalFild ;

document.getElementById('balance-fild').innerText = newBalance;
// Clear Fild 
document.getElementById('withdrawal-input').value = " ";


})