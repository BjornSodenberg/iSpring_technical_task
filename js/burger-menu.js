const hamburger = document.getElementById('burger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
})

window.addEventListener('click', function(e){   
  if (!document.getElementById('burger').contains(e.target) && !document.getElementById('menu').contains(e.target)){
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
});

