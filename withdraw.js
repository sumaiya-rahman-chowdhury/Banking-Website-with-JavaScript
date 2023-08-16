document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get the withdraw ammount from input field 

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);
    // console.log(prevWithdrawTotal) 
    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    //  set the value to show the value 

    withdrawTotalElement.innerText = currentWithdrawTotal ;
    // 
    const balanceTotalElement = document.getElementById('balance-total') ;
    const prevbalanceTotalElementString = balanceTotalElement.innerText ;
    const prevbalanceTotalElement = parseFloat(prevbalanceTotalElementString);
    // console.log(prevbalanceTotalElement) ;
    // 
    const newBalanceTotal = prevbalanceTotalElement - currentWithdrawTotal ;

    // console.log(newBalanceTotal)
    balanceTotalElement.innerText = newBalanceTotal ;

    withdrawField.value = ' '

})