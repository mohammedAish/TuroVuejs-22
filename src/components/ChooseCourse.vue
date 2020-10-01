<template>
  <div class="ChooseCourse container pt-5">
    <div class="text-left">
      <h6 class="">TUTORIAL COURSES</h6>
      <h3>Choose Course</h3>
    </div>
    <div class="row py-4">
      <div class="col-md-2 colB mx-3 animate__animated animate__fadeInLeft">
        <img class="py-3 " src="../images/illustrator.png" width="50px;" />
        <h5 class="pt-3">Illustrator</h5>
      </div>
      <div
        class="col-md-2 colB px-1 mx-3 animate__animated animate__fadeInUp animate__delay-1s"
      >
        <img class="py-3 " src="../images/photoshop.png" width="50px;" />
        <h5 class="pt-3">Photoshop</h5>
      </div>
      <div
        class="col-md-2 colB px-1 mx-3 animate__animated animate__fadeInUp animate__delay-2s"
      >
        <img class="py-3 " src="../images/vue.png" width="100px;" />
        <h5>Vue</h5>
      </div>
      <div
        class="col-md-2 colB px-1 mx-3 animate__animated animate__fadeInUp animate__delay-3s"
      >
        <img class="py-3 " src="../images/angular.png" width="60px;" />
        <h5>Angular</h5>
      </div>
      <div
        class="col-md-2 colB px-1 mx-3 animate__animated animate__fadeInRight animate__delay-4s"
      >
        <img class="py-3 " src="../images/react.png" width="60px;" />
        <h5>React</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChooseCourse"
};
</script>
<style scoped>
.colB {
  border: rgb(248, 247, 247) 1px solid;
  border-style: outset;
  background-color: rgb(247, 247, 247);
}
.colB:hover {
  border-style: inherit;
}

h3 {
  color: rgb(54, 113, 241);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h6 {
  color: rgb(101, 101, 104);
  font-family: initial;
}
</style>
