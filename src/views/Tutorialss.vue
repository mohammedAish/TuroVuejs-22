<template>
  <div class="Tutorials">
    <div class="">
      <ChooseCourse />
      <search />

      <Tutorials />

      <Footer />
    </div>
  </div>
</template>
<script>
import ChooseCourse from "@/components/ChooseCourse.vue";
import search from "@/components/search.vue";
import Footer from "@/components/Footer.vue";
import Tutorials from "@/components/Tutorials.vue";

export default {
  name: "Tutorialss",
  components: {
    ChooseCourse,
    search,
    Footer,
    Tutorials
  }
};
</script>
<style scoped></style>
