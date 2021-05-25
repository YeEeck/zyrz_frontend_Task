<template>
  <div class="exam_outer">
    <!-- 抽屉 -->
    <a-drawer
      title="创建新考试"
      :width="360"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      class="user_drawer"
    >
      <a-input
        v-model="newTitle"
        placeholder="考试名称"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTip"
        placeholder="考试类型"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newArea"
        placeholder="考试地点"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTime"
        placeholder="考试时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTeacher"
        placeholder="监考老师"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addData">新建</a-button>
    </a-drawer>

    <a-drawer
      title="编辑考试"
      :width="360"
      :visible="visibleE"
      :body-style="{ paddingBottom: '80px' }"
      @close="onCloseE"
      class="user_drawer"
    >
      <a-input
        v-model="eTitle"
        placeholder="考试名称"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTip"
        placeholder="考试类型"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eArea"
        placeholder="考试地点"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTime"
        placeholder="考试时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTeacher"
        placeholder="监考老师"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="editData">提交</a-button>
    </a-drawer>
    <!-- 抽屉 -->

    <div class="exam_top_bar">
      <h1 style="display: inline">考务管理</h1>
      <div class="exam_topbar_button_out">
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> New Exam
        </a-button>
      </div>
    </div>

    <div class="items_list">
      <a-skeleton active v-show="loading" :paragraph="{ rows: 5 }" />
      <exam-item
        v-for="(item, index) in list"
        v-show="fLoading"
        :title="item.title"
        :tip="item.tip"
        :area="item.area"
        :time="item.time"
        :teacher="item.teacher"
        :id="item._id"
        :key="index"
      ></exam-item>
    </div>
  </div>
</template>

<script>
import examItem from "./item";
import { getExam, addExam, editExam } from "../../../network/exam";

export default {
  components: {
    examItem,
  },

  data() {
    return {
      loading: true,
      list: [],
      visible: false,
      visibleE: false,

      newTitle: "",
      newTip: "",
      newArea: "",
      newTime: "",
      newTeacher: "",

      eTitle: "",
      eTip: "",
      eArea: "",
      eTime: "",
      eTeacher: "",
    };
  },
  activated() {
    this.updateData();
  },
  computed: {
    fLoading() {
      return !this.loading;
    },
  },
  methods: {
    updateData() {
      this.loading = true;
      getExam()
        .then((res) => {
          this.list = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("网络连接异常");
        });
    },
    editData(){
      const hide = this.$message.loading("正在提交修改...", 0);
      editExam({
        name: this.eName,
        type: this.eType,
        Sclass: this.eClass,
        pType: this.ePType,
        project: this.eProject,
        time: this.eTime,
        _id: this.e_id,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("修改成功");
            this.updateData();
          } else {
            setTimeout(hide, 0);
            this.$message.error("修改失败");
          }
        })
        .catch((err) => {
          setTimeout(hide, 0);
          this.$message.error(err);
          this.$message.error("网络连接异常");
        });
      this.visibleE = false;
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    addData() {
      const hide = this.$message.loading("正在添加...", 0);
      addExam({
        newTitle: this.newTitle,
        newTip: this.newTip,
        newArea: this.newArea,
        newTime: this.newTime,
        newTeacher: this.newTeacher,
      })
        .then((res) => {
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("添加成功");
            this.updateData();
          } else {
            setTimeout(hide, 0);
            this.$message.error("添加失败");
          }
        })
        .catch((err) => {
          setTimeout(hide, 0);
          this.$message.error(err);
          console.log(err);
          this.$message.error("添加失败，网络连接异常");
        });
      this.visible = false;
      this.clear();
    },

    clear() {
      this.newTitle = "";
      this.newTip = "";
      this.newArea = "";
      this.newTime = "";
      this.newTeacher = "";
    },
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
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
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
.add_button {
  display: inline-block;
  margin-right: 5%;
}
</style>