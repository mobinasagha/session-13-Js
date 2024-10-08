const inputText = document.querySelector(".input-text");
const products = document.querySelectorAll(".products");
const inputPrice = document.querySelector(".input-num");
const btnSearchPrice = document.querySelector(".btn-price");
const filterButtons = document.querySelectorAll(".filter-btn");
const content = document.querySelector(".cards");

const inputWordHandler = (event) => {
  console.dir(products);
  const phrase = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const title = product.childNodes[3].innerText.toLowerCase();
    if (title.includes(phrase)) {
      product.style.display = "flex";
    } else product.style.display = "none";
  });
};

const inputPriceHandler = () => {
  const phrase = inputPrice.value;
  products.forEach((product) => {
    const price = product.childNodes[5].innerText;
    if (price === phrase) {
      product.style.display = "flex";
    } else product.style.display = "none";
  });
};

window.addEventListener("load", () => {
  inputText.addEventListener("keyup", inputWordHandler);

  btnSearchPrice.addEventListener("click", inputPriceHandler);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");
    filterContent(filterValue);
  });
});

function filterContent(filterValue) {
  const products = content.querySelectorAll(".products");
  // console.log(products);

  products.forEach((item) => {
    // console.log(item.attributes.category);
    // console.log(filterValue);
    // console.log(item.getAttribute("data-category"));
    console.log(filterValue);

    if (
      filterValue === "all" ||
      item.getAttribute("data-category") === filterValue
      // item.classList[1] === filterValue
      // item.dataset.category === filterValue
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");

    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        id: id,
        name: name,
        price: parseFloat(price),
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
  });
});

function updateCartUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <div class="item-title"><p>قیمت: ${item.price} تومان</p>
      <p>تعداد: <button class="decrease-qty" data-id="${item.id}">-</button> ${item.quantity} <button class="increase-qty" data-id="${item.id}">+</button></p>
      <button class="remove-item" data-id="${item.id}">حذف</button></div>
    `;

    cartItemsContainer.appendChild(itemDiv);
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.innerText = totalPrice;

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      cart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
    });
  });

  document.querySelectorAll(".decrease-qty").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const product = cart.find((item) => item.id === id);
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        cart = cart.filter((item) => item.id !== id);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
    });
  });

  document.querySelectorAll(".increase-qty").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const product = cart.find((item) => item.id === id);
      product.quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
    });
  });
}

document.addEventListener("DOMContentLoaded", updateCartUI);
