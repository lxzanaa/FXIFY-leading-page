var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  pagination: {
    el: ".custom-pagination-1", // Target the custom pagination class
  },
});

var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 5, // Show 5 slides at a time
  // spaceBetween: 5, // Add space between the cards (optional)
});

var swiper = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 5, // Show 5 slides at a time
  spaceBetween: 16, // Add space between the cards (optional)
});
