<template>
  <div class="Contact">
    <div class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5">
            <form action="#" method="post">
              <div class="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <textarea
                    name=""
                    id=""
                    class="form-control"
                    placeholder="Write your message."
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6 mr-auto">
                  <input
                    type="submit"
                    class="btn btn-block btn-primary text-white py-3 px-5"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5 text-left">
              <h3 class="text-black mb-4">Contact Info</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block mb-3">
                  <span class="d-block text-black">Address:</span>
                  <span>34 Street Name, City Name Here, United States</span>
                </li>
                <li class="d-block mb-3">
                  <span class="d-block text-black">Phone:</span
                  ><span>+1 242 4942 290</span>
                </li>
                <li class="d-block mb-3">
                  <span class="d-block text-black">Email:</span
                  ><span>info@yourdomain.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Footer
  }
};
</script>
<style scoped>
.heading .caption {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2rem;
}

.heading h2 {
  font-size: 30px;
  font-weight: 700;
  color: #0779e4;
}
.site-section {
  padding: 2.5em 0;
}
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0;
  }
}
.site-section.site-section-sm {
  padding: 4em 0;
}
.post-entry-1 h2 {
  font-size: 20px;
}
.post-entry-1 h2 a {
  color: #000;
}
.form-control {
  height: 55px;
  background-color: #fff !important;
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.form-control:active,
.form-control:focus {
  border-color: #0779e4;
}
.form-control:hover,
.form-control:active,
.form-control:focus {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.form-control {
  border: none;
  background: #efefef !important;
}
.form-control:focus {
  background: #e2e2e2 !important;
}
</style>
