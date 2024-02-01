$(document).ready(function() {
  $('.carousel').carousel({
    interval: 1000
  });

  $('#contactForm').submit(function(event) {
    event.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
    } else {
      alert('Form submitted successfully!');
      $('#contactForm')[0].reset();
    }
  });
});
