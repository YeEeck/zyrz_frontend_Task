<template>
  <div class="main_inner"></div>
</template>

<style>
.main_inner {
  /* margin-top: 20px; */
  /* background-color: white; */
}
</style>

<script>
export default {
  inject: ["changeMainTabShow"],

  data() {
    return {};
  },

  mounted() {
    this.changeMainTabShow();
  },
};
</script>