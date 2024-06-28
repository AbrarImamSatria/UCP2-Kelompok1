document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to set active link based on current page
  function setActiveLink() {
    const currentLocation = window.location.href; // Get current page URL
    navLinks.forEach(link => {
      if (currentLocation.includes(link.href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Call setActiveLink initially
  setActiveLink();

  // Event listener for navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      localStorage.setItem('currentPage', this.href);
    });
  });

  // Change navbar background on scroll
  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
  });

  // Intersection Observer for content animation
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));
});

// Script to handle button click
document.querySelector('.boxBtn').addEventListener('click', function() {
  window.location.href = 'About.html';
});

// Script to handle form submission
function kirimData(event) {
  // Mengambil nilai dari inputan formulir
  var nama = document.getElementById('nama').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Mencegah formulir untuk melakukan submit secara default
  event.preventDefault();

  // Menampilkan pesan SweetAlert
  Swal.fire({
    title: 'Submit Successful!',
    html: '<div style="text-align: left; padding-left: 84px;">' +
          '<strong>Name:</strong> ' + nama + '<br>' +
          '<strong>Email:</strong> ' + email + '<br>' +
          '<strong>Message:</strong> ' + message +
          '</div>',
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'OK'
  }).then((result) => {
    // Setelah pesan SweetAlert ditutup, reset formulir
    document.getElementById('nama').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
}

