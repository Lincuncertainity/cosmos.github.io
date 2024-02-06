// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Select all links with the class 'cta-button'
    var links = document.querySelectorAll('.cta-button');

    // Add a click event listener to each link
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Prevent the default behavior of the link
            e.preventDefault();

            // Get the target ID from the link's href attribute
            var targetId = this.getAttribute('href').substring(1);

            // Scroll smoothly to the target element
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
