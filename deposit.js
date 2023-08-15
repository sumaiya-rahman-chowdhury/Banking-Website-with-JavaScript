// check to see 
// console.log("object")

document.getElementById('btn-depo').addEventListener('click',function(){
    let total = '';
    // check to see 
// console.log("object")
    const deposit = document.getElementById('deposit').value ;
    // console.log(deposit)
    total += deposit ;
    document.getElementById('depo-value').innerText = total ;

})