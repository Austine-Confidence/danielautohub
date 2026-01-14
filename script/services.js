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