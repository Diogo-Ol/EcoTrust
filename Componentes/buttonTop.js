mybutton = document.getElementById("botao__scroll__top");

// When the user scrolls down 20px from the top of the document, show the button
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 