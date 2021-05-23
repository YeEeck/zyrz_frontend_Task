<template>
  <div class="user_out">
    <a-drawer
      title="添加新学生"
      :width="360"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-input
        v-model="newName"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="newType" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="newClass"
        placeholder="班级"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="newAge" placeholder="年龄" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="newSex" placeholder="性别" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="newId"
        placeholder="身份证号"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addStudentNew">添加</a-button>
    </a-drawer>

    <a-drawer
      title="筛选"
      :width="360"
      :visible="visibleS"
      :body-style="{ paddingBottom: '80px' }"
      @close="onCloseS"
    >
      <a-input
        v-model="newName"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="newType" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="newClass"
        placeholder="班级"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="newAge" placeholder="年龄" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="newSex" placeholder="性别" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="newId"
        placeholder="身份证号"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addStudentNew">筛选</a-button>
    </a-drawer>

    <br />
    <div class="title_user">
      <h1 style="display: inline">学生信息</h1>
      <div class="inner_button_out">
        <a-button type="primary" @click="showDrawerS" class="add_button">
          <a-icon type="search" />
        </a-button>
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> New Student
        </a-button>
      </div>
    </div>

    <div class="table_out">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        :loading="loading"
        bordered
      >
        <p slot="tags" slot-scope="text, tags, i" class="do_p">
          <a-button @click="edit(text, tags, i)">编辑</a-button>
          &nbsp;&nbsp;
          <a-button @click="del(text)">删除</a-button>
        </p>
      </a-table>
    </div>
  </div>
</template>

<script>
import { getStudents, addStudent, delStudent } from "../../network/user";

const columns = [
  {
    title: "学生姓名",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "专业",
    dataIndex: "type",
  },
  {
    title: "班级",
    dataIndex: "Sclass",
  },
  {
    title: "年龄",
    dataIndex: "age",
  },
  {
    title: "性别",
    dataIndex: "sex",
  },
  {
    title: "身份证号",
    dataIndex: "idNo",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "tags" },
    width: 180,
  },
];
export default {
  data() {
    return {
      data: [],
      pagination: {
        pageSize: 10,
      },
      columns,
      loading: true,
      visible: false,
      visibleS: false,
      newName: "",
      newType: "",
      newClass: "",
      newAge: "",
      newSex: "",
      newId: "",
    };
  },
  activated() {
    this.loading = true;
    getStudents().then((res) => {
      console.log(res.data);
      this.data = res.data;
      this.loading = false;
    });
  },
  methods: {
    updateStudents() {
      this.loading = true;
      getStudents().then((res) => {
        console.log(res.data);
        this.data = res.data;
        this.loading = false;
      });
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    showDrawerS() {
      this.visibleS = true;
    },
    onCloseS() {
      this.visibleS = false;
    },
    addStudentNew() {
      const hide = this.$message.loading("正在添加...", 0);
      addStudent({
        name: this.newName,
        type: this.newType,
        Sclass: this.newClass,
        age: this.newAge,
        sex: this.newSex,
        idNo: this.newId,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("添加成功");
            this.updateStudents();
          } else {
            setTimeout(hide, 0);
            this.$message.error("添加失败，学生已存在");
          }
        })
        .catch((err) => {
          setTimeout(hide, 0);
          this.$message.error(err);
          this.$message.error("添加失败，网络连接异常");
        });
      this.visible = false;
      this.clear();
    },

    clear() {
      this.newName = "";
      this.newType = "";
      this.newClass = "";
      this.newAge = "";
      this.newSex = "";
      this.newId = "";
    },

    edit(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
    },

    del(text) {
      let self = this;
      this.$confirm({
        title: "确定要删除这个学生吗？",
        content: "该操作将不可恢复，请谨慎操作",
        onOk() {
          const hide = self.$message.loading("正在删除...", 0);
          delStudent({ id: text._id })
            .then((res) => {
              setTimeout(hide, 0);
              if (res.data.deleted == 1) {
                self.$message.success("删除成功");
              } else {
                self.$message.error("删除失败");
              }
              self.updateStudents();
            })
            .catch((err) => {
              setTimeout(hide, 0);
              self.$message.error(err);
              self.$message.error("连接异常");
              self.updateStudents();
            });
        },
        onCancel() {},
      });
    },
  },
};
</script>

<style>
.table_out {
  width: 90%;
  margin-left: 5%;
  height: 90%;
}

.title_user {
  text-align: left;
  margin-left: 5%;

  display: flex;
  justify-content: space-between;
}

.add_button {
  display: inline-block;
  margin-right: 5%;
}

.inner_button_out {
  width: 30rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}

.do_p {
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100%;
}
</style>