<template>
  <div class="main_inner">
    <side-bar />
    <div class="inner_view">
      <router-view />
    </div>
  </div>
</template>

<style>
.main_inner {
  /* margin-top: 20px; */
  /* background-color: white; */
}
</style>

<script>
import SideBar from "../../components/content/SideBar";

export default {
  inject: ["changeMainTabShow"],

  components: {
    SideBar,
  },
  data() {
    return {};
  },

  mounted() {
    this.changeMainTabShow();
  },
};
</script>

<style>
.inner_view {
  margin-left: 13rem;
}
</style>