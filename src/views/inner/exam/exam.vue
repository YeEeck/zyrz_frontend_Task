<template>
    <div class="exam_outer">
      <exam-item></exam-item>
      <exam-item></exam-item>
      <exam-item></exam-item>
    </div>
</template>

<script>
import examItem from "./item";
export default {
  components: {
    examItem,
  },
};
</script>

<style>
.exam_outer {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;

  background-color: rgb(245, 245, 245);

  position: fixed;
  left: 13rem;
  right: 0;
  top: 0;
  bottom: 0;

  padding: 1rem;
}

</style>