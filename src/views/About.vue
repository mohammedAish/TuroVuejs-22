<template>
  <div class="About">
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0 order-lg-2">
            <img
              src="../images/hero_bg.jpg"
              alt="Image"
              class="img-fluid rounded"
            />
          </div>
          <div class="col-lg-4 mr-auto">
            <div class="heading mb-4">
              <span class="caption">About us</span>
              <h2>Our Company</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              suscipit, repudiandae similique accusantium eius nulla quam
              laudantium sequi.
            </p>
            <p>
              Debitis voluptates corporis saepe molestias tenetur ab quae, quo
              earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section bg-light">
      <div class="container">
        <div
          class="row justify-content-center text-center mb-5 section-2-title"
        >
          <div class="col-md-6">
            <div class="heading mb-4">
              <span class="caption">The team</span>
              <h2>Meet Our Team</h2>
            </div>
          </div>
        </div>
        <div class="row align-items-stretch">
          <div class="col-lg-4 col-md-6 mb-5">
            <div class="post-entry-1 h-100 person-1">
              <img src="../images/person_1.jpg" alt="Image" class="img-fluid" />

              <div class="post-entry-1-contents">
                <span class="meta">Founder</span>
                <h2>James Doe</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-5">
            <div class="post-entry-1 h-100 person-1">
              <img src="../images/person_2.jpg" alt="Image" class="img-fluid" />

              <div class="post-entry-1-contents">
                <span class="meta">Founder</span>
                <h2>James Doe</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-5">
            <div class="post-entry-1 h-100 person-1">
              <img src="../images/person_3.jpg" alt="Image" class="img-fluid" />

              <div class="post-entry-1-contents">
                <span class="meta">Founder</span>
                <h2>James Doe</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-5">
            <div class="post-entry-1 h-100 person-1">
              <img src="../images/person_4.jpg" alt="Image" class="img-fluid" />

              <div class="post-entry-1-contents">
                <span class="meta">Founder</span>
                <h2>James Doe</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-5">
            <div class="post-entry-1 h-100 person-1">
              <img src="../images/person_5.jpg" alt="Image" class="img-fluid" />

              <div class="post-entry-1-contents">
                <span class="meta">Founder</span>
                <h2>James Doe</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-5">
            <div class="post-entry-1 h-100 person-1">
              <img src="../images/person_1.jpg" alt="Image" class="img-fluid" />

              <div class="post-entry-1-contents">
                <span class="meta">Founder</span>
                <h2>James Doe</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <img
              src="../images/hero_bg.jpg"
              alt="Image"
              class="img-fluid rounded"
            />
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="heading mb-4">
              <span class="caption">Why Founded</span>
              <h2>Mission and Vision</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              suscipit, repudiandae similique accusantium eius nulla quam
              laudantium sequi.
            </p>
            <p>
              Debitis voluptates corporis saepe molestias tenetur ab quae, quo
              earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section bg-primary py-5 cta">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-md-0">
            <h2 class="mb-0 text-white">What are you waiting for?</h2>
            <p class="mb-0 opa-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, laboriosam.
            </p>
          </div>
          <div class="col-lg-5 text-md-right">
            <a href="#" class="btn btn-primary btn-white">Enroll Now</a>
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
  name: "About",
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

.post-entry-1 .thumbnail-link {
  display: block;
}

.custom-pagination a,
.custom-pagination span {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
}

.custom-pagination span {
  background: #efefef;
}

.custom-pagination a {
  background: #0779e4;
  color: #fff;
}

.post-entry-1 .meta {
  color: #ccc;
}

.post-entry-1 .post-entry-1-contents {
  background: #fff;
  padding: 20px;
}
.post-entry-1 .post-entry-1-contents h2 {
  font-size: 22px;
  margin-bottom: 20px;
}
.post-entry-1 .post-entry-1-contents h2 a {
  color: #000;
}
.post-entry-1 .post-entry-1-contents h2 a:hover {
  color: #0779e4;
}

.post-entry-1.person-1 {
  text-align: center;
}
.post-entry-1.person-1 img {
  width: 90px;
  border-radius: 50%;
  margin: 0 auto -45px auto;
}
.post-entry-1.person-1 .post-entry-1-contents {
  padding-top: 4rem;
}
.cta .btn {
  border-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.cta .btn:hover {
  background: #fff;
  color: #0779e4;
}
</style>
