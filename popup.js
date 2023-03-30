// get the a tag element
var aTag = document.querySelector('a.partner-url');

aTag.addEventListener('click', function(event) {
  // prevent the default behavior of the click event
  event.preventDefault();

  // create the popup element
  var popup = document.createElement('div');
  popup.classList.add('popup');

  // create the text element
  var textElement = document.createElement('p');
  textElement.textContent = 'Do you want to proceed to ' + aTag.href + '?';

  // create the buttons
  var proceedBtn = document.createElement('button');
  proceedBtn.textContent = 'Proceed to ' + aTag.href;
  proceedBtn.addEventListener('click', function() {
    window.location.href = aTag.href;
  });

  var googleBtn = document.createElement('button');
  googleBtn.textContent = 'Go to Google';
  googleBtn.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
  });

  // append the elements to the popup
  popup.appendChild(textElement);
  popup.appendChild(proceedBtn);
  popup.appendChild(googleBtn);

  // append the popup to the body
  document.body.appendChild(popup);
  console.log('Clicked');
});
