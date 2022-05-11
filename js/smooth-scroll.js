function clickHandler(e) {
  if (e.preDefault) {
    e.preventDefault()
  } else {
    //IE 11 don't have preventDefault
    e.returnValue = false
  };
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

(function(){
  const buttons = document.querySelectorAll("#scroll");

  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', clickHandler)
  }
})()
