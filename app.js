let heldValue = null;
let heldOperation = null;
let nextValue = null;

function clearAll() {
  (heldValue = null), (heldOperation = null), (nextValue = null);
}

function clearEntry() {
  nextValue = null;
}

$(".digits button").click(function () {
  nextValue = "0";
});

//   nextValue.text($(this));
//   console.log($(this.text()));
// });

function showValue(location, value) {
  if (value == null) {
    $(location).text("");
  } else {
    $(location).text(Number(value));
  }
}

function updateDisplay() {
  showValue($(".held-value"), heldValue);
  showValue($(".next-value"), nextValue);
}

function add(x, y) {
  return Number(x) + Number(y);
}

function subtract(x, y) {
  return Number(x) - Number(y);
}

function multiply(x, y) {
  return Number(x) * Number(y);
}

function divide(x, y) {
  return Number(x) / Number(y);
}

function setHeldOperation(operation) {
  if (heldOperation !== null) {
    heldValue = heldOperation(heldValue, nextValue);
  } else if (nextValue !== null && (heldValue = nextValue)) {
    nextValue = null;
  }
}

$(".add").click(function () {
  setHeldOperation(add);
  $(".next-operation").text("+");
  updateDisplay();
});
$(".subtract").click(function () {
  setHeldOperation(subtract);
  $(".next-operation").text("-");
  updateDisplay();
});
$(".multiply").click(function () {
  setHeldOperation(multiply);
  $(".next-operation").text("*");
  updateDisplay();
});
$(".divide").click(function () {
  setHeldOperation(divide);
  $(".next-operation").text("/");
  updateDisplay();
});
$(".equals").click(function () {
  setHeldOperation(null);
  $(".next-operation").text("");
  updateDisplay();
});

$(".clear-all").click(function () {
  clearAll(), updateDisplay();
});
$(".clear-entry").click(function () {
  clearEntry(), updateDisplay();
});
