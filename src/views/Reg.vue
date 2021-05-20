<template>
  <div class="container">
    <a-input
      type="text"
      v-model="username"
      class="username_input"
      placeholder="用户名"
    /><br /><br />
    <a-input
      type="password"
      v-model="password"
      class="username_input"
      placeholder="密码"
    /><br /><br />
    <a-button type="primary" @click="reg">注册</a-button><br /><br />
    <img v-if="loadingS" src="../assets/loading.gif" />
    <span v-bind:class="tipClass">{{ res }}</span>
  </div>
</template>

<script>
import { PostTest } from "../network/Reg";

export default {
  data() {
    return {
      username: "",
      password: "",
      res: "",
      tipClass: "normal_tip",
      loadingS: false,
    };
  },
  methods: {
    reg() {
      this.res = "";
      this.tipClass = "normal_tip";
      this.loadingS = true;
      PostTest({ username: this.username, password: this.password }).then(
        (res) => {
          console.log(res);
          if (res.data.res != undefined) {
            this.res = "注册成功,正在跳转...";
            this.tipClass = "right_tip";
            this.loadingS = false;
            setTimeout(() => {
              this.$router.push("/home/login");
            }, 1000);
          } else {
            this.res = "用户已存在";
            this.tipClass = "error_tip";
            this.loadingS = false;
          }
        }
      );
    },
  },
};
</script>

<style>
.username_input {
  width: fit-content;
}

.container {
  margin-top: 1em;
}

.error_tip {
  color: red;
  font-weight: bold;
}

.right_tip {
  color: #42b983;
  font-weight: bold;
}

input {
  outline: none;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 1em;
}
</style>