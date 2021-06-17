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
  var name = document.getElementById('imie').value;
  var mail = document.getElementById('email').value;
  var nr = document.getElementById('numer').value;

  var ok, ok1, ok2;

  

  if(name=="")
    {
      document.getElementById('im').innerHTML = "To pole jest wymagane."
      ok = false;
    }
  else
    {
      document.getElementById('im').innerHTML = "";
      ok = true;
    }


  if(mail=="")
  {
    document.getElementById('mail').innerHTML = "To pole jest wymagane."
    ok1 = false;
  }
  else
  {
    document.getElementById('mail').innerHTML = ""
    ok1 = true;
  }
    

  if(nr=="")
  {
    document.getElementById('nr').innerHTML = "To pole jest wymagane."
    ok2 = false;
  }
  else if(isNaN(nr) || nr.length!=9){
    document.getElementById('nr').innerHTML = "Numer telefonu jest niepoprawny"
    ok2 = false;
  }
  else
  {
    document.getElementById('nr').innerHTML = ""
    ok2 = true;
  }
    
  
  if(ok, ok1, ok2)
    document.getElementById('success').innerHTML = "Pomyślnie wysłano zgłoszenie. Niebawem się skontaktujemy."
    
}

