//Listen to add event listner

document
  .querySelector("#loan-form")
  .addEventListener("submit", calculateResults);
let result = document.querySelector("#result");
let loder = document.querySelector("#loading");
loder.setAttribute("hidden", "true");

result.setAttribute("hidden", "true");
// Calculate Results
function calculateResults(e) {
  e.preventDefault();
  // console.log("Calculating...");
  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");
  loder.removeAttribute("hidden");
  setTimeout(() => {
    loder.setAttribute("hidden", "true");
    result.removeAttribute("hidden");
  }, 2000);

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  // console.log(calculatedPayments);
  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    console.log(totalPayment.value);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError("Please check your numbers");
  }
}

//loader
