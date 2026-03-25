const portfolioSwiper = new Swiper(".portfolio-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});

function openModal(id) {
  const dialog = document.getElementById(id);
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).close();
  document.body.style.overflow = "";
}

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) {
      dialog.close();
      document.body.style.overflow = "";
    }
  });
});
