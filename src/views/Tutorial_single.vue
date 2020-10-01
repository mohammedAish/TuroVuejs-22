<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-12">
          <div class="videoWrapper">
            <!-- Copy & Pasted from YouTube -->
            <iframe
              width="560"
              height="349"
              src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <ul class="list-unstyled tutorial-section-list">
            <li>
              <h3><a href="#">How to react</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to install dependency</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to react</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to install dependency</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to react</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to install dependency</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to react</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to install dependency</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to react</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to install dependency</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to react</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>

            <li>
              <h3><a href="#">How to install dependency</a></h3>
              <p>
                <span class="mr-2 mb-2">1hr 24m</span>
              </p>
              <a href="#" class="play">Play</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="box-side mb-3">
            <a href="#"
              ><img
                src="../images/img_1_horizontal.jpg"
                alt="Image"
                class="img-fluid"
            /></a>
            <h3><a href="#">Learning React Native</a></h3>
            <p class="mb-0 text-muted">
              <span class="mr-2 mb-2">1hr 24m</span>
              <span class="mr-2 mb-2">Advanced</span>
              <span class="mr-2 mb-2">Jun 19, 2020</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <Tutorials />

      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Tutorials from "@/components/Tutorials.vue";
export default {
  name: "Tutorial_single",
  components: {
    Footer,
    Tutorials
  }
};
</script>
<style scoped>
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
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
}

.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.tutorial-section-list li {
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  position: relative;
}
.tutorial-section-list li h3 {
  margin: 0;
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
}
.tutorial-section-list li h3 a {
  color: #000;
}
.tutorial-section-list li p {
  margin-bottom: 0;
  color: #ccc;
}
.tutorial-section-list li .play {
  padding: 3px 10px;
  border-radius: 4px;
  background: #0779e4;
  color: #fff;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 10px;
  font-size: 12px;
}
.tutorial-section-list li:hover {
  background: #f8f9fa;
}
.box-side {
  padding: 20px;
  border-radius: 4px;
  -webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
}
.box-side img {
  margin-bottom: 20px;
}
.box-side h3 {
  margin-bottom: 0;
  font-size: 20px;
}
.box-side h3 a {
  color: #000;
}
</style>
