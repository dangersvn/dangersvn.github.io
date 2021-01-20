
var bankModule = function () {
  let balance = 0;
  let accountName;
  let createBankAccount = function (accName, deposit) {
    balance = deposit;
    accountName = accName;

    return {
      accountName: accName,
      balance: deposit
    }
  }
  return { createBankAccount };
}

var accountInfoList = [];
window.onload = function () {  
  createAccountButton.onclick = createAccount;
}

function createAccount() {  
  let accName = accountNameInput.value;
  let deposit = depositInput.value;
   //validate
    if(isNaN(deposit)) {
      return alert("Please input deposit as a number");
    }
   let acc = bankModule().createBankAccount(accName, +deposit);
   accountInfoList.push(acc);
   displayAccounts();
}

function displayAccounts() {
  let txtVal="";
  //display list accounts
  for(let acc of accountInfoList) {
    txtVal += `Account name: ${acc.accountName} Balance: ${acc.balance} \n`;
  }
  textareaAccounts.value = txtVal; 
}