(function () {
  const contactSection = `
    <section id="contact" class="contact section">
      <div class="container section-title">
        <h2>Contact</h2>
        <p>Get In Touch</p>
      </div>
      <div class="container position-relative">
        <div class="row gy-4">
          <div class="col-lg-5">
            <div class="info-item d-flex">
              <i class="bi bi-geo-alt"></i>
              <div>
                <h3>Address</h3>
                <p>Office-M3, Floor-Mezzanine, Wakra Boulevard Building, Wakra, Qatar</p>
              </div>
            </div>
            <div class="info-item d-flex">
              <i class="bi bi-telephone"></i>
              <div>
                <h3>Call Us</h3>
                <p>+974 3360 93155</p>
              </div>
            </div>
            <div class="info-item d-flex">
              <i class="bi bi-envelope"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@teq.qa</p>
                <p>sales@teq.qa</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <form id="contact-form">
              <div class="row gy-4">
                <div class="col-md-6">
                  <input type="text" id="name" name="name" class="form-control" placeholder="Your Name" required>
                </div>
                <div class="col-md-6">
                  <input type="email" id="email" name="email" class="form-control" placeholder="Your Email" required>
                </div>
                <div class="col-md-12">
                  <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" required>
                </div>
                <div class="col-md-12">
                  <textarea id="message" name="message" class="form-control" rows="6" placeholder="Message" required></textarea>
                </div>
                <div class="col-md-12 text-center">
                  <div class="error-message" style="display:none;">Failed to send the message!</div>
                  <div class="sent-message" style="display:none;">Your message has been sent. Thank you!</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`;
    window.contactSection = contactSection;

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact").innerHTML = contactSection;

    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      emailjs.send("service_vfatsnx", "template_kpo3k2d", templateParams)
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.querySelector(".sent-message").style.display = "block"; 
          document.querySelector(".error-message").style.display = "none";
        }, function (error) {
          console.log("FAILED...", error);
          document.querySelector(".error-message").style.display = "block"; 
          document.querySelector(".sent-message").style.display = "none"; 
        });
    });
  });
})();
