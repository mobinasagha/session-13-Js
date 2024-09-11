// // تابع فیلتر کردن محتوا
// function filterContent(filterValue) {
//   const products = content.querySelectorAll(".products");
//   // console.log(products);

//   products.forEach((item) => {
//     // console.log(item.attributes.category);
//     // console.log(filterValue);

//     if (
//       filterValue === "all" ||
//       item.getAttribute("category") === filterValue
//     ) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// document.querySelectorAll(".add-to-cart").forEach((button) => {
//   button.addEventListener("click", () => {
//     const id = button.getAttribute("data-id");
//     const name = button.getAttribute("data-name");
//     const price = button.getAttribute("data-price");

//     const existingProduct = cart.find((item) => item.id === id);

//     if (existingProduct) {
//       existingProduct.quantity++;
//     } else {
//       cart.push({
//         id: id,
//         name: name,
//         price: parseFloat(price),
//         quantity: 1,
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartUI();
//   });
// });

// // let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // تابع بروزرسانی رابط کاربری سبد خرید
// function updateCartUI() {
//   const cartItemsContainer = document.getElementById("cart-items");
//   const totalPriceElement = document.getElementById("total-price");
//   cartItemsContainer.innerHTML = "";
//   let totalPrice = 0;

//   cart.forEach((item) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("cart-item");
//     itemDiv.innerHTML = `
//       <h3>${item.name}</h3>
//       <p>قیمت: ${item.price} تومان</p>
//       <p>تعداد: <button class="decrease-qty" data-id="${item.id}">-</button> ${item.quantity} <button class="increase-qty" data-id="${item.id}">+</button></p>
//       <button class="remove-item" data-id="${item.id}">حذف</button>
//     `;

//     cartItemsContainer.appendChild(itemDiv);
//     totalPrice += item.price * item.quantity;
//   });

//   totalPriceElement.innerText = totalPrice;

//   // مدیریت حذف محصول از سبد خرید
//   document.querySelectorAll(".remove-item").forEach((button) => {
//     button.addEventListener("click", () => {
//       const id = button.getAttribute("data-id");
//       cart = cart.filter((item) => item.id !== id);
//       localStorage.setItem("cart", JSON.stringify(cart));
//       updateCartUI(); // بروز رسانی رابط کاربری پس از حذف
//     });
//   });

//   // کم کردن تعداد محصولات
//   document.querySelectorAll(".decrease-qty").forEach((button) => {
//     button.addEventListener("click", () => {
//       const id = button.getAttribute("data-id");
//       const product = cart.find((item) => item.id === id);
//       if (product.quantity > 1) {
//         product.quantity--;
//       } else {
//         cart = cart.filter((item) => item.id !== id);
//       }
//       localStorage.setItem("cart", JSON.stringify(cart));
//       updateCartUI(); // بروز رسانی رابط کاربری پس از کم کردن تعداد
//     });
//   });

//   // اضافه کردن تعداد محصولات
//   document.querySelectorAll(".increase-qty").forEach((button) => {
//     button.addEventListener("click", () => {
//       const id = button.getAttribute("data-id");
//       const product = cart.find((item) => item.id === id);
//       product.quantity++;
//       localStorage.setItem("cart", JSON.stringify(cart));
//       updateCartUI(); // بروز رسانی رابط کاربری پس از اضافه کردن تعداد
//     });
//   });
// }

// // بروزرسانی رابط کاربری سبد خرید هنگام بارگذاری صفحه
// document.addEventListener("DOMContentLoaded", updateCartUI);

// function addToCart(product) {
//   const existingProduct = cart.find((item) => item.id === product.id);

//   if (existingProduct) {
//     existingProduct.quantity++;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartUI(); // بروزرسانی رابط کاربری پس از اضافه کردن محصول
// }
// document.querySelectorAll(".add-to-cart").forEach((button) => {
//   button.addEventListener("click", () => {
//     const product = {
//       id: button.getAttribute("data-id"),
//       name: button.getAttribute("data-name"),
//       price: parseInt(button.getAttribute("data-price")),
//     };
//     addToCart(product);
//   });
// });
