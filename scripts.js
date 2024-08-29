document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.footer h5');
    
    headers.forEach(header => {
      header.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });
  