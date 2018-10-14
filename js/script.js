'use-strict';

// Hide table by default.
document.getElementById('hide').style.visibility='hidden';

// Convert amount from one denomination to another.
const calculateAmount = (rate1, rate2, amount) => {
  let sum = amount * rate2;
  return `$${sum.toFixed(2)}`;
}


const displayAmount = () => {
  // Retrieve values from the form.
  let sum = document.getElementById('amount').value;
  let exchangeRate1 = document.getElementById('rate').value;
  let exchangeRate2 = document.getElementById('to').value;
  // Create variables to update elements.
  let total = document.getElementById('total');
  let code = document.getElementById('c-code');
  // Show table with styling from CSS file.
  document.getElementById('hide').style.visibility='visible';

  let r1 = 0;
  let r2 = 0;

  switch(exchangeRate1) {
    case 'MXN':
      r1 = 18.8495;
      break;
    case 'USD':
      r1 = 0.052923;
      break;
    case 'HTG':
      r1 = 69.8086;
      break;
    case 'CUP':
      r1 = 1.0;
      break;
    case 'CAD':
      r1 = 1.302;
      break;
    case 'EUR':
      r1 = 0.8649;
      break;
    case 'XBT':
      r1 = 0.000161245;
      break;
    case 'GBP':
      r1 = 0.760151;
      break;
    case 'XOF':
      r1 = 567.2060;
      break;
    default:
      return;
  }

  switch(exchangeRate2) {
    case 'MXN':
      r2 = 18.8495;
      break;
    case 'USD':
      r2 = 0.052923;
      break;
    case 'HTG':
      r2 = 69.8086;
      break;
    case 'CUP':
      r2 = 1.0;
      break;
    case 'CAD':
      r2 = 1.302;
      break;
    case 'EUR':
      r2 = 0.8649;
      break;
    case 'XBT':
      r2 = 0.000161245;
      break;
    case 'GBP':
      r2 = 0.760151;
      break;
    case 'XOF':
      r2 = 567.2060;
      break;
    default:
      return;
  }

  total.innerHTML = calculateAmount(r1, r2, sum);
  code.innerHTML = exchangeRate2;

}
