<template>
  <div class="StudentReviews">
    <div class="site-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center mb-5">
            <div class="heading">
              <span class="caption">Testimonials</span>
              <h2>Student Reviews</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 mb-4 mb-lg-0 animate__animated animate__fadeInUp "
          >
            <div class="testimonial-2">
              <h3 class="h5">Excellent Teacher!</h3>
              <div>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star-o text-warning"></span>
              </div>
              <blockquote class="mb-4">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
              <div class="d-flex v-card align-items-center">
                <img
                  src="../images/person_1.jpg"
                  alt="Image"
                  class="img-fluid mr-3"
                />
                <div class="author-name">
                  <span class="d-block">Mike Fisher</span>
                  <span>Owner, Ford</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 mb-4 mb-lg-0 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <div class="testimonial-2">
              <h3 class="h5">Best Video Tutorial!</h3>
              <div>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star-o text-warning"></span>
              </div>
              <blockquote class="mb-4">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
              <div class="d-flex v-card align-items-center">
                <img
                  src="../images/person_2.jpg"
                  alt="Image"
                  class="img-fluid mr-3"
                />
                <div class="author-name">
                  <span class="d-block">Jean Stanley</span>
                  <span>Traveler</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 mb-4 mb-lg-0 animate__animated animate__fadeInUp animate__delay-2s"
          >
            <div class="testimonial-2">
              <h3 class="h5">Easy to Understand!</h3>
              <div>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star-o text-warning"></span>
              </div>
              <blockquote class="mb-4">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
              <div class="d-flex v-card align-items-center">
                <img
                  src="../images/person_3.jpg"
                  alt="Image"
                  class="img-fluid mr-3"
                />
                <div class="author-name">
                  <span class="d-block">Katie Rose</span>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentReviews"
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
.testimonial-2 {
  border-radius: 7px;
  background: #fff;
  padding: 30px;
  border-bottom: 4px solid #0779e4;
  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
}
.testimonial-2 blockquote {
  font-size: 18 px;
}
.testimonial-2 .v-card img {
  width: 50px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50px;
  flex: 0 0 50px;
  border-radius: 50%;
}
.testimonial-2 .author-name {
  line-height: 1.3;
}
.testimonial-2 .author-name > span:nth-of-type(2) {
  color: #ccc;
}
</style>
