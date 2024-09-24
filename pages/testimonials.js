(function() {
    const testimonialsSection = `
    <section id="testimonials" class="testimonials">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What Our Clients Say</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="swiper init-swiper">
          <script type="application/json" class="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 40
                },
                "1200": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                }
              }
            }
          </script>
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="https://img.freepik.com/free-photo/muslim-man-sitting-restaurant_23-2147794366.jpg?ga=GA1.1.322608065.1726336223&semt=ais_hybrid" class="testimonial-img" alt="">
                  <h3>Mohammed Al-Khalifa</h3>
                  <!-- <h4>Ceo &amp; Founder</h4> -->
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>  TEQ exceeded our expectations in every way. Their expertise in Wi-Fi networking and CCTV installation helped us secure our offices with the most advanced technology. The entire process was seamless, and their team was professional and responsive from start to finish</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="https://img.freepik.com/free-photo/worldface-iranian-woman-white-background_53876-146400.jpg?t=st=1727014129~exp=1727017729~hmac=d96238ee4844877cb5a2244bfe737c8b3b8dde557205e3fc673885a7eb719dc3&w=740" class="testimonial-img" alt="">
                  <h3>Fatima Al-Obaidly</h3>
                  <!-- <h4>Designer</h4> -->
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>We chose TEQ for our home automation system, and it was the best decision. Their solutions have made managing everything at home so convenient, from lighting to security. I can control everything remotely, and it has truly enhanced our quality of life.</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="https://img.freepik.com/free-photo/smiley-bearded-man-black-shirt_23-2148500539.jpg?t=st=1727014215~exp=1727017815~hmac=21fc26ef8542af809cff9663c0658eb3ec2319533c6893274393648c4cdf3726&w=740" class="testimonial-img" alt="">
                  <h3>Saad Al-Mansoori</h3>
                  <!-- <h4>Store Owner</h4> -->
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>TEQ installed access control systems for our business, and the results have been outstanding. The biometric system works flawlessly, and the support team is always available when needed. Their attention to detail and customer service sets them apart.</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="https://img.freepik.com/free-photo/front-view-positive-woman-with-cancer_23-2151064660.jpg?ga=GA1.1.322608065.1726336223&semt=ais_hybrid" class="testimonial-img" alt="">
                  <h3>Mariam Al-Suwaidi</h3>
                  <!-- <h4>Freelancer</h4> -->
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>TEQ’s structured cabling solutions for our office have improved our connectivity and data management. The professionalism and quality of their work have made a significant impact on our business operations.</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1727014308~exp=1727017908~hmac=b6c0cb2e0c7f0a1916653cdedcfc11331c10cd06a1ff2184601d183e1bbf6ad5&w=740" class="testimonial-img" alt="">
                  <h3>Ahmed Al-Nuaimi</h3>
                  <!-- <h4>Entrepreneur</h4> -->
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>The team at TEQ provided us with a comprehensive CCTV and intercom system for our residential complex. Their modern technology and expert installation have given us peace of mind, knowing that our security is in capable hands.</span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>

    </section>`;
    window.testimonialsSection = testimonialsSection;
})();