const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const slidesLength = slides.length;

let activeSlideIndex = 0;

const moveToSlide = (swap) => {
  if (sliderContainer.classList.contains("slider-locked")) return;

  activeSlideIndex = (activeSlideIndex + swap + slidesLength) % slidesLength;

  sliderContainer.classList.add("slider-locked");

  slides.forEach((slide, index) => {
    slide.classList.toggle("scrolling_active", index === activeSlideIndex);
  });
};

const onTransitionEnd = () => {
  sliderContainer.classList.remove("slider-locked");
};

const onScroll = (event) => {
  event.preventDefault();
  const swap = Math.sign(event.deltaY);
  moveToSlide(swap);
};

// window.onload = function () {
//   document.addEventListener("wheel", onScroll, { passive: false });
//   sliderContainer.addEventListener("transitionend", onTransitionEnd);
// };
window.addEventListener("wheel", onScroll, { passive: false });
sliderContainer.addEventListener("transitionend", onTransitionEnd);
