const header = document.querySelector('.header');
window.onscroll = function(){
  var top = window.scrollY;

  if(top>=100)
    {
      header.classList.add('active');
    }
  else
    {
      header.classList.remove('active');
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plus(n) {
  showSlides(slideIndex += n);
}

function current(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) 
      slideIndex = 1  
      
  if (n < 1) 
    slideIndex = slides.length

  for (i = 0; i < slides.length; i++)
      slides[i].style.display = "none";  

  slides[slideIndex-1].style.display = "block";  

}


function validate(){
  var x = document.getElementById('imie').value;

  if(imie=="")
    alert("Wpisz coś!");
}

