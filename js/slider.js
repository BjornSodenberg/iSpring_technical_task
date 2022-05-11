//Polyfill closest for IE11
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

function nextSlide(event) {
  const button = event.currentTarget;
  const offset = button.getAttribute("data-carousel-button") === "next" ? 1 : -1;

  const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]");

  let newIndex;
  const activeSlide = slides.querySelector("[data-active]");

  for (let i = 0; i < slides.children.length; i++) {
    if (slides.children[i] === activeSlide) {
      newIndex = i + offset;
      break;
    }
  }

  if (newIndex < 0) {
    newIndex = slides.children.length - 1;
  }

  if (newIndex >= slides.children.length) {
    newIndex = 0;
  }

  slides.children[newIndex].dataset.active = "data-active";
  delete activeSlide.dataset.active
  
  //for IE11
  activeSlide.className="slide";
  slides.children[newIndex].className += ' active';
}

const button_left = document.querySelector("#left-button-slider");
const button_right = document.querySelector("#right-button-slider");

button_left.addEventListener("click", nextSlide);
button_right.addEventListener("click", nextSlide);
