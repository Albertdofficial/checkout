const calculate = document.querySelector(".calculate");
const product = document.querySelectorAll(".product");
const quantities = document.querySelectorAll(".quantity input");
const shippings = document.querySelectorAll(".shipping input");
const textarea = document.querySelector(".calculate textarea");

const selectEl1 = document.querySelector("#prod1");
const selectEl2 = document.querySelector("#prod2");
const selectEl3 = document.querySelector("#prod3");

const checkbox1 = document.querySelector(".checkbox1");
const checkbox2 = document.querySelector(".checkbox2");
const checkbox3 = document.querySelector(".checkbox3");

const ipad3 = document.querySelector(".ipad3");
const ipad3Radios = document.querySelectorAll(".ipad3 input");

const ipad5 = document.querySelector(".ipad5");
const ipad5Radios = document.querySelectorAll(".ipad5 input");

const galaxys3 = document.querySelector(".galaxys3");
const galaxys3Radios = document.querySelectorAll(".galaxys3 input");

const item_quantity = [];
const items_cost = [];
const shipping_cost = [];
let total = 0;
let ipad3_cost = 0,
  ipad5_cost = 0,
  galaxy_cost = 0;

let ipad3_shipping_cost = 0,
  ipad5_shipping_cost = 0,
  galaxy_shipping_cost = 0;

ipad3Radios.forEach(ipad3Radio =>{
    ipad3Radio.addEventListener("click", () => {
        if (ipad3Radio.checked) {
            ipad3_shipping_cost = parseInt(ipad3Radio.value);
            console.log(ipad3_shipping_cost);
          }
      });
})

ipad5Radios.forEach(ipad5Radio =>{
    ipad5Radio.addEventListener("click", () => {
        if (ipad5Radio.checked) {
            ipad5_shipping_cost = parseInt(ipad5Radio.value);
            console.log(ipad5_shipping_cost);
          }
      });
})

galaxys3Radios.forEach(galaxyRadio =>{
    galaxyRadio.addEventListener("click", () => {
        if (galaxyRadio.checked) {
            galaxy_shipping_cost = parseInt(galaxyRadio.value);
            console.log(galaxy_shipping_cost);
          }
      });
})



checkbox1.addEventListener("click", () => {
  if (checkbox1.checked) {
    ipad3_cost = parseInt(selectEl1.value);
    console.log(ipad3_cost);
  }
});

selectEl1.addEventListener("click", () => {
  ipad3_cost = parseInt(selectEl1.value);
  console.log(ipad3_cost);
});

checkbox2.addEventListener("click", () => {
  if (checkbox2.checked) {
    ipad5_cost = parseInt(selectEl2.value);
    console.log(ipad5_cost);
  }
});

selectEl2.addEventListener("click", () => {
  ipad5_cost = parseInt(selectEl2.value);
  console.log(ipad5_cost);
});

checkbox3.addEventListener("click", () => {
  if (checkbox3.checked) {
    galaxy_cost = parseInt(selectEl3.value);
    console.log(galaxy_cost);
  }
});
selectEl3.addEventListener("click", () => {
  galaxy_cost = parseInt(selectEl3.value);
  console.log(galaxy_cost);
});

// push the quantities of the productsin an array
quantities.forEach((quantity) => {
  quantity.addEventListener("change", () => {
    item_quantity.push(parseInt(quantity.value));
  });
});

calculate.addEventListener("click", () => {
  // destruct the item_quantity array
  const [ipad3_quantity, ipad5_quantity, galaxy_quantity] = item_quantity;

  if (ipad3_cost && ipad5_cost && galaxy_cost) {
    total =
      ipad3_cost * ipad3_quantity +
      ipad3_shipping_cost +
      (ipad5_cost * ipad5_quantity + ipad5_shipping_cost) +
      (galaxy_cost * galaxy_quantity + galaxy_shipping_cost);
  } else if (ipad3_cost && ipad5_cost) {
    total =
      ipad3_cost * ipad3_quantity +
      ipad3_shipping_cost +
      (ipad5_cost * ipad5_quantity + ipad5_shipping_cost);
  } else {
    total = ipad3_cost * ipad3_quantity + ipad3_shipping_cost;
  }
  console.log(total);
  if (total) {
    textarea.textContent = `TL ${total}`;
  }
});
