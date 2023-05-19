window.onload = function() {
  // Get the content to blur
  var contentToBlur = document.getElementById('content-to-blur');

  // Get all the modals
  var modals = document.getElementsByClassName('popup');

  // Get all the buttons that open a modal
  var btns = document.getElementsByClassName("view-more");

  // Get all the <span> elements that close the modals
  var spans = document.getElementsByClassName("close-button");

  // When the user clicks the button, open the corresponding modal 
  for (let i = 0; i < btns.length; i++) {
      btns[i].onclick = function() {
          var modal = document.getElementById(this.getAttribute('data-modal'));
          modal.style.display = "block";
          contentToBlur.classList.add('blurred');  // Add the 'blurred' class to the content to blur
          modal.getElementsByClassName('watch-live')[0].style.display = "block";
      }
  }

  // When the user clicks on <span> (x), close the modal
  for (let i = 0; i < spans.length; i++) {
      spans[i].onclick = function() {
          this.parentElement.parentElement.style.display = "none";
          contentToBlur.classList.remove('blurred');  // Remove the 'blurred' class from the content to blur
          this.parentElement.getElementsByClassName('watch-live')[0].style.display = "none";

      }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target.className === 'popup') {
          event.target.style.display = "none";
          contentToBlur.classList.remove('blurred');  // Remove the 'blurred' class from the content to blur
          event.target.getElementsByClassName('watch-live')[0].style.display = "none";

      }
  }
}
