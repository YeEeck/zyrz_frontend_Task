<template>
  <div class="exam_item_container">
    <span class="item_title">{{title}}</span>
    <a-tag color="blue" class="exam_tip">{{tip}}</a-tag>
    <span class="exam_sub">考试地点:<span>{{area}}</span></span>
    <span class="exam_sub">考试时间:<span>{{time}}</span></span>
    <span class="exam_sub">监考老师:<span>{{teacher}}</span></span>
  </div>
</template>

<script>
export default {
  name: "exam-item",
  props: {
    title: String,
    tip: String,
    area: String,
    time: String,
    teacher: String,
  },
};
</script>

<style>
.exam_item_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 32%;

  padding: 1rem;
  padding-left: 2rem;

  background-color: white;

  box-shadow: lightgray 1px 1px 5px;
}
.item_title {
  /* text-align: left; */
  font-size: larger;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.exam_tip {
  width: fit-content;
  margin-bottom: 0.5rem;
}

.exam_sub {
  font-size: smaller;
  margin-bottom: 1px;
}
</style>
