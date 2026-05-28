document.getElementById("quoteForm")?.addEventListener("submit", function(e){

e.preventDefault();

let weight = document.getElementById("weight").value;

let estimate = weight * 1.5;

document.getElementById("quoteResult").innerText =
"Estimated freight cost: $" + estimate;

});

function payNow(){
alert("Connect Stripe or PayPal here.");
}