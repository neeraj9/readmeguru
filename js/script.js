$(function () {
  let headerContent = document.querySelector('.header-content')
  let nav = document.querySelector('.site-nav')
  let headerCue = document.querySelector('.header-cue')
  let contentStart = document.querySelector('#content-start')
  let navHeight = nav.scrollHeight


  function inViewPort(el) {
    let rect = el.getBoundingClientRect()
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    )
  }

  function moveHeader() {
    let top = window.pageYOffset
    let mainOnTop = contentStart.getBoundingClientRect().top - navHeight

    mainOnTop < 0
      ? nav.classList.add('in-body')
      : nav.classList.remove('in-body')

    let currentCuePosition = headerContent.getBoundingClientRect().top

    currentCuePosition < 0
      ? headerCue.classList.add('d-none')
      : headerCue.classList.remove('d-none')

    headerContent.style.transform = `translateY(-${top / 1.5}px)`
    headerContent.style.opacity =
      1 - Math.max(top / (window.innerHeight * 0.2), 0)

    window.requestAnimationFrame(moveHeader)
  }

  window.requestAnimationFrame(moveHeader)

  // got to top of the page button
  //Get the button:
  topButton = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

}) // when page loads

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}