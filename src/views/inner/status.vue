<template>
  <div class="status_container">
    <div class="title_user">
      <h1 style="display: inline">奖惩和缺勤情况</h1>
      <div class="inner_button_out">
        <a-button type="primary" @click="showDrawerF" class="add_button">
          <a-icon type="search" />
        </a-button>
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> New Record
        </a-button>
      </div>
    </div>
    <a-tabs default-active-key="1" size="large" class="status_tab">
      <a-tab-pane key="1" tab="奖惩情况"
        ><div class="status_table_out">
          <a-table
            :columns="columns_status"
            :data-source="data"
            :pagination="pagination"
            :loading="loading"
            bordered
            class="table1"
          >
            <p slot="tags" slot-scope="text" class="do_p">
              <a-button @click="edit(text)">编辑</a-button>
              &nbsp;&nbsp;
              <a-button @click="del(text)">删除</a-button>
            </p>
          </a-table>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="缺勤情况" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
const columns_status = [
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
    title: "奖惩类型",
    dataIndex: "Ptype",
    width: 120,
  },
  {
    title: "项目",
    dataIndex: "project",
  },
  {
    title: "获得时间",
    dataIndex: "time",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "tags" },
    width: 180,
  },
];
export default {
  data(){
    return{
      columns_status
    }
  }
};
</script>

<style>
.status_container {
  padding-top: 1rem;
  text-align: left;
}
.status_tab {
  margin-left: 5%;
  width: 90%;
}
.table1 .ant-table-tbody > tr > td {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>