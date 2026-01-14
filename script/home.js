(function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeBtn = document.querySelector(".mobile-nav .close-btn");

  function openMenu() {
    menuBtn.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
    // trap focus optionally could be added
  }

  function closeMenu() {
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
  }

  menuBtn &&
    menuBtn.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu();
      else openMenu();
    });

  closeBtn && closeBtn.addEventListener("click", closeMenu);

  // close on escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // close when clicking a link inside the mobile nav
  mobileNav &&
    mobileNav.addEventListener("click", function (e) {
      if (e.target.matches("a")) closeMenu();
    });
})();


const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartItemsBox = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];


// Attach to all Buy buttons
document.querySelectorAll(".card-btn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".car-card");
    const name = card.querySelector("h3").innerText;
    const priceText = card.querySelector("p").innerText;
const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));

    const img = card.querySelector("img").src;

    cart.push({name, price, img});
    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartItemsBox.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItemsBox.innerHTML += `
      <div class="item">
        <img src="${item.img}">
        <div>
          <p>${item.name}</p>
          <p>$${item.price}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  cartPanel.classList.toggle("open");
}

// Load on page refresh
updateCart();
