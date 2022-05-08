function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

(function(){
  const buttons = document.querySelectorAll("#scroll");

  buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
  })
})()
