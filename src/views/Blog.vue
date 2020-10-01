<template>
  <div class="blogs">
    <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="post-entry-1 h-100">
              <a href="single.html" class="thumbnail-link">
                <img src="../images/img_1.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-entry-1-contents">
                <h2>
                  <a href="single.html"
                    >Microsoft Azure Synapse for Developers</a
                  >
                </h2>
                <span class="meta d-inline-block mb-3"
                  >July 17, 2019 <span class="mx-2">by</span>
                  <a href="#">Admin</a></span
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores eos soluta, dolore harum molestias consectetur.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="post-entry-1 h-100">
              <a href="single.html" class="thumbnail-link">
                <img src="../images/img_2.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-entry-1-contents">
                <h2>
                  <a href="single.html"
                    >Microsoft Azure Synapse for Developers</a
                  >
                </h2>
                <span class="meta d-inline-block mb-3"
                  >July 17, 2019 <span class="mx-2">by</span>
                  <a href="#">Admin</a></span
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores eos soluta, dolore harum molestias consectetur.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="post-entry-1 h-100">
              <a href="single.html" class="thumbnail-link">
                <img src="../images/img_3.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-entry-1-contents">
                <h2>
                  <a href="single.html"
                    >Microsoft Azure Synapse for Developers</a
                  >
                </h2>
                <span class="meta d-inline-block mb-3"
                  >July 17, 2019 <span class="mx-2">by</span>
                  <a href="#">Admin</a></span
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores eos soluta, dolore harum molestias consectetur.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="post-entry-1 h-100">
              <a href="single.html" class="thumbnail-link">
                <img src="../images/img_1.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-entry-1-contents">
                <h2>
                  <a href="single.html"
                    >Microsoft Azure Synapse for Developers</a
                  >
                </h2>
                <span class="meta d-inline-block mb-3"
                  >July 17, 2019 <span class="mx-2">by</span>
                  <a href="#">Admin</a></span
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores eos soluta, dolore harum molestias consectetur.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="post-entry-1 h-100">
              <a href="single.html" class="thumbnail-link">
                <img src="../images/img_2.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-entry-1-contents">
                <h2>
                  <a href="single.html"
                    >Microsoft Azure Synapse for Developers</a
                  >
                </h2>
                <span class="meta d-inline-block mb-3"
                  >July 17, 2019 <span class="mx-2">by</span>
                  <a href="#">Admin</a></span
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores eos soluta, dolore harum molestias consectetur.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="post-entry-1 h-100">
              <a href="single.html" class="thumbnail-link">
                <img src="../images/img_3.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-entry-1-contents">
                <h2>
                  <a href="single.html"
                    >Microsoft Azure Synapse for Developers</a
                  >
                </h2>
                <span class="meta d-inline-block mb-3"
                  >July 17, 2019 <span class="mx-2">by</span>
                  <a href="#">Admin</a></span
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores eos soluta, dolore harum molestias consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-5">
            <div class="custom-pagination">
              <a href="#">1</a>
              <span>2</span>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
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
  name: "blog",
  components: {
    Footer
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
.post-entry-1 h2 {
  font-size: 20px;
}
.post-entry-1 h2 a {
  color: #000;
}

.post-entry-1 .thumbnail-link {
  display: block;
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
</style>
