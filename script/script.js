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



    //                                              
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent");
});



//                                   service

const modal = document.getElementById("bookingModal");

const serviceTitle = document.getElementById("serviceTitle");

function openBookingForm(service) {
  serviceTitle.innerText = `Book $ {service} Service`;
  modal.style.display = "block";
}

function closeBookingForm() {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
};

function submitBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;

  const car = document.getElementById("car").value;

  const message = document.getElementById("message").value;

  alert(
    `Booking Submitted!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCar Brand: ${car}\nMessage: ${message}`
  );

  document.getElementById("bookingForm").reset();
  closeBookingForm();
}






//                         add to cart hero                 

// let cartCount = 0;
// let cartTotal = 0;

// function addToCart(price) {
//   cartCount++;
//   cartTotal += price;

//   document.getElementById("cart-count").innerText = cartCount;
//   document.getElementById("items").innerText = cartCount;
//   document.getElementById("total").innerText = cartTotal;
// }

// function removeFromCart() {
//   if (cartCount > 0) {
//     cartCount--;
//     cartTotal = 0;

//     const avg = cartCount / (cartCount + 1);
//     cartTotal = avg * cartCount;

//     document.getElementById("cart-count").innerText = cartCount;
//     document.getElementById("items").innerText = cartCount;
//     document.getElementById("total").innerText = cartTotal;
//   }
// }





let isSignup = true;

const title = document.getElementById("title");
const nameField = document.getElementById("name");
const form = document.getElementById("form");
const message = document.getElementById("message");
const ToggleText = document.getElementById("toggleText");

title.innerText = "Sign Up";
nameField.style.display = "block";
document.getElementById("btn").innerText = "Create Account";
toggleText.innerText = "Already have an account? Login"

toggleText.addEventListener("click", toggleForm);

function toggleForm() {
  isSignup = !isSignup;

  if (isSignup) {
    title.innerText = "Sign Up";
    nameField.style.display = "block";

    document.getElementById("btn").innerText = "Create Account";
    toggleText.innerText = "Already have an account? Login";
  } else {
    title.innerText = "Login";
    nameField.style.display = "none";

    document.getElementById("btn").innerText = "Login";
    toggleText.innerText = "Don't have an account? Sign UP";
  }
  message.innerText = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (isSignup) {
    let exists = users.find((u) => u.email === email);

    if (exists) {
      message.style.color = "red";
      message.innerText = "Account already exists";

      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    message.style.color = "lightgreen";
    message.innerText = "Account created successfully!";

    toggleForm();
  } else {
    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      alert("Welcome " + user.name);
    } else {
      message.style.color = "red";
      message.innerText = "Invalid login details";
    }
  }
});
