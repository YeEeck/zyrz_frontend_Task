<template>
  <div class="exam_item_container">
    <span class="item_title">标题</span>
    <a-tag color="blue" class="exam_tip">tip</a-tag>
    <span>考试地点:<span>dist</span></span>
    <span>考试时间:<span>dist</span></span>
    <span>监考老师:<span>dist</span></span>
  </div>
</template>

<script>
export default {
  name: "exam-item",
  props:{
      title: String,
      tip: String,
      
  }
};
</script>

<style>
.exam_item_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 20rem;

  padding: 1rem;

  background-color: white;

  box-shadow: lightgray 1px 1px 5px;
}
.item_title{
    /* text-align: left; */
    font-size: larger;
    font-weight: bold;
}
.exam_tip{
    width: fit-content;
}
</style>
