<template>
  <div class="main">
    <div>
      <img class="login_img" src="../assets/LoginBackGround.png" />
    </div>
    <div class="home">
      <div id="navin">
        <router-link to="/home">登录</router-link> |
        <router-link to="/home/reg">注册</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
#nav {
  padding: 10px;
  font-size: large;
}

#navin a {
  font-weight: bold;
  color: #2c3e50;
}

#navin a.router-link-exact-active {
  color: #42b983;
}

.main {
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_img{
  width: 400px;
}
</style>