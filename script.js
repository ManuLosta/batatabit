const currencyArrow = document.getElementById("currency-arrow");
const comissionArrow = document.getElementById("comission-arrow");
const currencyTable = document.getElementById("currency-table");
const comissionTable = document.getElementById("comission-table");

currencyArrow.addEventListener("click", function () {
  currencyTable.classList.add("hidden");
  comissionTable.classList.add("visible");
});

comissionArrow.addEventListener("click", function () {
  currencyTable.classList.remove("hidden");
  comissionTable.classList.remove("visible");
});
