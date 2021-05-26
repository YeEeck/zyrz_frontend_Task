<template>
  <div class="class_outer">
    <div class="exam_top_bar">
      <h1 style="display: inline">选课管理</h1>
      <div class="exam_topbar_button_out">
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> New Class
        </a-button>
      </div>
    </div>

    <div class="class_items_list">
      <a-skeleton active v-show="loading" :paragraph="{ rows: 5 }" />
      <class-item
        v-for="(item, index) in list"
        v-show="fLoading"
        :title="item.title"
        :tip="item.tip"
        :area="item.area"
        :time="item.time"
        :teacher="item.teacher"
        :id="item._id"
        :key="index"
        @refreshData="edit"
        @upData="updateData"
      ></class-item>
    </div>
  </div>
</template>

<script>
import { getClass } from "../../../network/class";
import classItem from "./item";

export default {
  components: {
    classItem,
  },
  data() {
    return {
      list: [],
      loading: true,
    };
  },
  computed: {
    fLoading() {
      return !this.loading;
    },
  },
  activated() {
    this.updateData();
  },
  methods: {
    updateData() {
      this.loading = true;
      getClass()
        .then((res) => {
          this.list = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("网络连接异常");
        });
    },
  },
};
</script>

<style>
.class_outer {
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
.exam_top_bar {
  display: flex;
  justify-content: space-between;

  width: 95%;

  align-items: flex-start;

  margin-left: 5%;
}
.exam_topbar_button_out {
  width: 30rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}
.class_items_list {
  padding-left: 7%;
  padding-right: 7%;
  /* padding-right: 5%; */

  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
}
</style>