
const okBtn= document.getElementById('ok-btn');
var result;

function conversion(){
    const currencyfrom = document.getElementById('countries-from').value;
    const currencyto = document.getElementById('countries-to').value;
     if(currencyfrom == "INDIA" && currencyto == "US"){
         result = "1 INR = 0.013 USD";
     }
     else if(currencyfrom == "USD"){
         result = "1 USD = 72 INR";
    }
    
    document.getElementById("current_value").innerHTML = result;
}
okBtn.addEventListener('click',conversion);
