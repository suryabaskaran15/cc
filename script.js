const currencyfrom = document.getElementById('countries-from').value;
const currencyto = document.getElementById('countries-to').value;
const okBtn= document.getElementById('ok-btn');
let result;

function conversion(){
    // // if(currencyfrom == "INDIA"){
    // //     result = "1 INR = 0.013 USD";
    // // }
    // // else if(currencyfrom == "USD"){
    // //     result = "1 USD = 72 INR";
    // }
    result = currencyfrom;
    document.getElementById("current_value").innerHTML = result;
}
okBtn.addEventListener('click',conversion);