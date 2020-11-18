// Open and close the sidebar on medium and small screens
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  
  
  // Accordions
  function myAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme";
    } else { 
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme", "");
    }
  }
  function myStyle() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
  }
  
  //Get the button
  var mybutton = document.getElementById("scrollBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {goFunction()};
  
  function goFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // Change style of top container on scroll
  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display="block";
    } else {
      mybutton.style.display="none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll", () => {
 if ( window.pageYOffset > 100) {
   toTop.classList.add("active");
 }
 else{
   toTop.classList.remove("active");
 }
  });
  //Scroll Revel animation
  const sr = ScrollReveal({
    origin: 'top',
    Distance: '80px',
    duration: 2000,
    reset: true
  });
  sr.reveal('.w3-sidebar',{});
  sr.reveal('.image-top',{});
  sr.reveal('.w3-main',{});
  sr.reveal('.w3-container',{});
  sr.reveal('.w3-button',{dealy:200});
  sr.reveal('.Home_title',{dealy:400});
  sr.reveal('.Home_title',{interval:200});
  
