<template>
  <div class="home">
    <div class="uprowBack">
      <div class="uprow container">
        <div class="row colBB text-left p-3 ">
          <div
            class="col-md-7 pt-4 colB p-3 col-sm-12 mx-3 animate__animated animate__fadeInLeft"
          >
            <div class="row ">
              <div class="col-md-5 col-sm-12">
                <img
                  class="w-100"
                  src="../images/img_1_horizontal.jpg"
                  height="250px"
                />
              </div>
              <div class="col-md-7 py-4 col-sm-12">
                <h6>TUTORIAL</h6>
                <h5>Learning React Native</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum quidem totam exercitationem eveniet blanditiis nulla, et
                  possimus, itaque alias maxime!
                </p>

                <h6 class="pt-5"><span>1hr 24m Advanced Jun 18, 2020</span></h6>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 p-3 colB p-3 col-sm-12 mx-3 animate__animated animate__fadeInRight animate__delay-0.5s"
          >
            <div class="row ">
              <div class="col-5 py-2">
                <img src="../images/img_2.jpg" width="80px" />
              </div>
              <div class="col-7 px-2 py-3">
                <h6>TUTORIAL</h6>

                <h5 class="">Learning React Native</h5>
              </div>
              <div class="col-5 y-2">
                <img src="../images/img_3.jpg" width="80px" />
              </div>
              <div class="col-7 px-2 py-3">
                <h6>TUTORIAL</h6>

                <h5>Learning React Native</h5>
              </div>
              <div class="col-5 y-2">
                <img src="../images/img_2.jpg" width="80px" />
              </div>
              <div class="col-7 px-2 py-3">
                <h6>TUTORIAL</h6>

                <h5>Learning React Native</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <ChooseCourse />
      <search />

      <Tutorials />
      <StudentReviews />
      <Footer />
    </div>
  </div>
</template>
<style scoped>
.colB {
  border: rgb(248, 247, 247) 1px solid;
  border-style: outset;
  background-color: #fff;
  margin-top: -120px;
}

.uprowBack {
  background-color: rgb(245, 244, 244);
}

h6 span {
  color: rgb(101, 101, 104);
  font-family: initial;
}
h6 {
  color: rgb(39, 36, 230);
  font-family: initial;
}
h5 {
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
<script>
// @ is an alias to /src
import ChooseCourse from "@/components/ChooseCourse.vue";
import search from "@/components/search.vue";
import Footer from "@/components/Footer.vue";
import Tutorials from "@/components/Tutorials.vue";
import StudentReviews from "@/components/StudentReviews.vue";



// mount with global

export default {
  name: "Home",
  data: function() {
    return {
      hedarText: "The Hub Of Tutorials"
    };
  },
  components: {
    ChooseCourse,
    search,
    Footer,
    Tutorials,
    StudentReviews
  }
};
</script>
