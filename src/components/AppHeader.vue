<template>
  <div class="header">
    <div class="x">
      <div class="container">
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#" class="aa">Tutro</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" class="text-right" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <router-link to="/" tag="li" exact class="p-3"
                ><a>Home</a></router-link
              >
              <router-link to="/tutorialss" tag="li" class="p-3"
                ><a>Tutorials</a></router-link
              >
              <router-link to="/testimonials" tag="li" class="p-3"
                ><a>Testimonials</a></router-link
              >
              <router-link to="/blog" tag="li" class="p-3"
                ><a>Blog </a></router-link
              >
              <router-link to="/about" tag="li" class="p-3"
                ><a>About </a></router-link
              >
              <router-link to="/contact" tag="li" class="p-3"
                ><a>Contact </a></router-link
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="mt-4 pt-5 ">
        <h1 class="pt-5 d-inline-flex animate__animated animate__zoomIn" id="m">
          {{ currentRouteName }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  computed: {
    currentRouteName() {
      var mess = this.$route.name;
      if (mess == "Home") {
        return "The Hub Of Tutorials";
      } else if (mess == "Tutorialss") {
        return "Our Tutorials";
      } else if (mess == "Testimonials") {
        return "Testimonials";
      } else if (mess == "Blog") {
        return "Blog Posts";
      } else if (mess == "About") {
        return "About The Company";
      } else if (mess == "Contact") {
        return "Contact Us";
      } else {
        return "Learn React Native";
      }
    }
  }
};
</script>

<style scoped>
.header {
  background-image: url(../images/hero_bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 20px;
}
.aa {
  color: #fff;
  font-size: 40px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.x {
  background-color: rgba(112, 111, 111, 0.5);
  z-index: 1;
}

ul {
  list-style: none;
  padding: 10px;
  color: #fff;
}
ul a {
  color: rgb(250, 250, 250);
  text-decoration: none;
}
h1 {
  font-size: 54px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-shadow: -2px 6px 3px rgb(187, 186, 184);
  margin-bottom: 220px;
  margin-top: 50px;
}
li :hover {
  border-style: outset;
  background-color: rgb(97, 95, 95);
}
</style>
