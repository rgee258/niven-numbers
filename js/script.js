function isNiven(num) {
  if (num == 0) {
    return false;
  }
  else if (num < 10) {
    return true;
  }

  let splitDigits = num.toString();
  splitDigits = splitDigits.split("");
  numDigits = [];
  splitDigits.forEach(function(n) {
    numDigits.push(parseInt(n));
  });
  numDigits = numDigits.reduce((accumulator, num) => 
    accumulator + num);
  if (num % numDigits == 0) {
    return true;
  }
  else {
    return false;
  }
}

function hundredNiven() {
  let nivens = [];
  parent = document.querySelector(".results");

  for (let i = 0; i <= 100; i++) {
    if (isNiven(i)) {
      nivens.push(i);
    }
  }

  for (let i = 0; i < nivens.length; i++) {
    let nivenDisplay = document.createElement("div");
    nivenDisplay.innerHTML = nivens[i];
    nivenDisplay.classList.add("niven");
    if (i % 2 == 0) {
      nivenDisplay.classList.add("even");
    }
    else {
      nivenDisplay.classList.add("odd");
    }
    parent.appendChild(nivenDisplay);
  }
}

function nivenBtn() {
  document.querySelector(".hundred-btn").removeEventListener("click", nivenBtn);
  hundredNiven();
}

// Add event listener to execute when DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hundred-btn").addEventListener("click", nivenBtn);
}, false);