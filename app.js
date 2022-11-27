const cardNameEl = document.getElementById("input_card_name");
const cardNumEl = document.getElementById("input_card_number");
const monthEl = document.getElementById("month");
const inputDetails = document.querySelectorAll(".card_input_info");
const inputDetails1 = document.querySelectorAll("input");
const cardName = document.getElementById("card_name");
const cardNumber = document.getElementById("card_number");
const cardExprDate = document.getElementById("card_expr_date");
const month_value = document.getElementById("month_value");
const year_value = document.getElementById("year_value");
const year = document.getElementById("year");
const cvc = document.getElementById("input_cvc");
const cvcCard = document.getElementById("cvc");

const btnSumbit = document.getElementById("submit");

/* Function Validation for Card Name */
function validationCardName(input) {
  if (/^['-]/.test(cardNameEl.value)) {
    cardNameEl.value = "";
  } else {
    const mySentence = cardNameEl.value;

    const finalSentence = mySentence.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (
        letter // Capitalized every word
      ) => letter.toUpperCase()
    );

    cardNameEl.value = finalSentence;
  }

  let value = input.value;
  let letters = value.replace(/[^A-Za-z-' ]/g, ""); // Not Allowing Numbers and Special Characters except apostrophe and hyphen
  input.value = letters.trimStart();
  cardName.textContent = input.value;
}

// /* Function Validation for Card*/

function validationCardNumber(input) {
  if (input.value.length < 19) {
    alert("Card number must be 16 digit");
  }
}

/* Function Validation for Month */

function validationMonth(input) {
  let cardMonthvalue = input.value;
  let monthRegex = /^(0[1-9]|1[0-2])$/;

  if (!cardMonthvalue.match(monthRegex)) {
    monthEl.value = "";
  } else {
    month_value.textContent = cardMonthvalue;
  }
}

cardNameEl.addEventListener("input", () => {
  validationCardName(cardNameEl);
});

cardNameEl.addEventListener("input", () => {
  let cardNameValue = cardNameEl.value;
  cardNameValue = cardNameValue.replace(/\s{2,}/g, " "); // Remove Spaces more than 1
  cardNameEl.value = cardNameValue;
});

cardNumEl.addEventListener("input", (e) => {
  let num = (e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim());
  cardNumber.textContent = num;
});

monthEl.addEventListener("keyup", () => {
  if (monthEl.value.length > 1) {
    validationMonth(monthEl);
  } else {
    return;
  }
});

year.addEventListener("keyup", () => {
  if (year.value.length > 1) {
    year_value.textContent = year.value;
  }
});

cvc.addEventListener("input", () => {
  if (cvc.value.length > 2) {
    cvcCard.textContent = cvc.value;
  }
});

btnSumbit.addEventListener("click", (e) => {
  e.preventDefault();
  blankValidation();
  //validationCardNumber(cardNumEl); // Validation for 16 digit Card Number
});

/* Checking For Blank Input */

const blankValidation = (e) => {
  inputDetails.forEach((input) => {
    if (!input.value) {
      input.nextElementSibling.classList.add("text_error_output");
      //console.log(input);
      console.log(input);
    } else {
      input.nextElementSibling.classList.remove("text_error_output");
    }
  });

  inputDetails1.forEach((input) => {
    if (!input.value) {
      input.style.border = "1px solid hsl(0, 100%, 66%)";
    } else {
      input.style.border = "1px solid hsl(270, 3%, 87%)";
      const thank_youEl = document.querySelector(".thank_you");
      const card_inputEl = document.querySelectorAll(".card_input");

      card_inputEl.forEach((el) => {
        el.style.display = "none";
      });

      thank_youEl.style.display = "flex";
      btnSumbit.textContent = "Continue";
    }
  });
};

/* Passing value to Credit Card */

const passtoCard = () => {
  cardNumber.value = cardNameEl.value;
};
