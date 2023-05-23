
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.padding = "0";
    document.getElementById("logo").style.height = "1px";
  } else {
    document.getElementById("navbar").style.padding = "0";
    document.getElementById("logo").style.height = "1px";
  }
}