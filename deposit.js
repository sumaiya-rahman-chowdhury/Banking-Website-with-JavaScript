// check to see 
// console.log("object")

document.getElementById('btn-depo').addEventListener('click',function(){
  const depositField = document.getElementById('deposit');
  const newdepositAmountString = depositField.value ;
  const newdepositAmount = parseFloat(newdepositAmountString) ;
  // 
  const depoTotalElement = document.getElementById('depo-value');
  const prevdepoTotalElementString = depoTotalElement.innerText  ;
  const prevdepoTotalElement = parseFloat(prevdepoTotalElementString) ;
  const cureentDepo = prevdepoTotalElement + newdepositAmount ;
  depoTotalElement.innerText = cureentDepo ;
  
  // balance current total

    const balanceTotalElement = document.getElementById('balance-total') ;
    const prevbalanceTotalElementString = balanceTotalElement.innerText ;
    const prevbalanceTotalElement = parseFloat(prevbalanceTotalElementString) ;

    // 
    // calculate current balance 
    
    const currentBalanceTotal = prevbalanceTotalElement + newdepositAmount ;

    // set n0w 

    balanceTotalElement.innerText = currentBalanceTotal ;



 
  deposit.value = ' '
})