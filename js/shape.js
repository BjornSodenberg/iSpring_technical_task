
function setShapeSize() {
  const background = document.querySelector('.background');
  const shape = document.querySelector('.shape');
  const width = background.offsetWidth / 2;
  shape.style["border-left"] = `${width}px solid #ffffff`;
  shape.style["border-right"] = `${width}px solid #ffffff`;
}

window.onresize = setShapeSize;
window.onload = setShapeSize;

