// get all clickable divs
const divs = document.querySelectorAll('a.partner-url');

// add click event listener to each div
divs.forEach(div => {
  div.addEventListener('click', function(event) {
    // prevent default behavior of click event
    event.preventDefault();

    // get the URL of the clicked div
    const url = div.getAttribute('data-url');

    // set the variable 'a' to the URL
    const a = url;

    // create the popup element
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // create the text element
    const textElement = document.createElement('p');
    textElement.textContent = 'Do you want to proceed to homepaylater.vn?';

    // create the CTA button
    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Proceed to homepaylater.vn';
    ctaButton.addEventListener('click', function() {
      window.location.href = 'https://homepaylater.vn';
    });

    // create the link to the clicked div's URL
    const linkElement = document.createElement('a');
    linkElement.textContent = url;
    linkElement.href = url;

    // append the elements to the popup
    popup.appendChild(textElement);
    popup.appendChild(ctaButton);
    popup.appendChild(linkElement);

    // add the popup to the page
    document.body.appendChild(popup);
  });
});