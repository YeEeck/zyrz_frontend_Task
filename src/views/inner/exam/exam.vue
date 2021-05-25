<template>
  <div class="exam_outer">
    <top-bar />
    <div class="items_list">
      <exam-item
        v-for="(item, index) in list"
        :title="item.title"
        :tip="item.tip"
        :area="item.area"
        :time="item.time"
        :teacher="item.teacher"
        :key="index"
      ></exam-item>
    </div>
  </div>
</template>

<script>
import examItem from "./item";
import TopBar from "./TopBar";

export default {
  components: {
    examItem,
    TopBar,
  },

  data() {
    return {
      list: [
        {
          title: "测试考试",
          tip: "期末考试",
          area: "实验楼B",
          time: "15周周一",
          teacher: "测试教师",
        },
        {
          title: "测试考试",
          tip: "期末考试",
          area: "实验楼B",
          time: "15周周一",
          teacher: "测试教师",
        },
        {
          title: "测试考试",
          tip: "期末考试",
          area: "实验楼B",
          time: "15周周一",
          teacher: "测试教师",
        },
      ],
    };
  },
};
</script>

<style>
.exam_outer {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;

  padding-top: 10px;

  background-color: rgb(245, 245, 245);

  position: fixed;
  left: 13rem;
  right: 0;
  top: 0;
  bottom: 0;

  padding: 1rem;
}

.items_list {
  padding-left: 4%;
  padding-right: 5%;

  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
}
</style>