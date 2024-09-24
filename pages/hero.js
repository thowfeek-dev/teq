(function() {
  const heroSection = `
      <section id="hero" class="hero section">
          <div class="container">
              <div class="row gy-4">
                  <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                      <h1>Empower your space with TEQ⚡</h1>
                      <p>Experts in advanced Extra Low Voltage (ELV) solutions for comfort, safety, and efficiency in Qatar.</p>
                      <div class="d-flex">
                          <a href="#about" class="btn-get-started">Get Started</a>
                          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video d-flex align-items-center"></a>
                      </div>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 hero-img">
                      <img src="./assets/img/hero.png" class="img-fluid animated" alt="">
                  </div>
              </div>
          </div>
      </section>
  `;
  window.heroSection = heroSection; // Expose to global scope if needed
})();
