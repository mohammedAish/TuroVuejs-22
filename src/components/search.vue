<template>
  <div class="search py-4">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-6 co-sm12">
          <div class="form-group row">
            <input
              type="text"
              class="form-control col-9 mr-2 p-2"
              placeholder="search for tuer"
            />
            <button type="submit" class="btn btn-primary col-2 p-2">
              search
            </button>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-right">
          <p>
            <span class="px-1">share : </span>
            <img src="../images/facebook.jpeg" width="52px;" /><img
              src="../images/twitter.jpg"
              width="50px;"
            /><img src="../images/linkedin.png" width="44px;" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search"
};
</script>
<style scoped>
.search {
  background-color: rgb(247, 247, 247);
}
span {
  font-size: 22px;
  color: rgb(101, 101, 104);
  font-family: initial;
}
button:hover {
  background-color: rgb(235, 86, 60);
  color: #fff;
}
</style>
