const toggleEl = document.querySelector(".toggle__btn");
const basicPrice = document.querySelector(".price__basic");
const proPrice = document.querySelector(".price__pro");
const masterPrice = document.querySelector(".price__master");

toggleEl.addEventListener("click", function (e) {
  if (!toggleEl.classList.contains("move__toggle")) {
    toggleEl.classList.add("move__toggle");
    basicPrice.textContent = 199.99;
    proPrice.textContent = 249.99;
    masterPrice.textContent = 399.99;
  } else {
    toggleEl.classList.remove("move__toggle");
    basicPrice.textContent = 19.99;
    proPrice.textContent = 24.99;
    masterPrice.textContent = 39.99;
  }
});
