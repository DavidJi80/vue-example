<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo"  tag="button">Go to Foo</router-link>
      <router-link to="/bar"  tag="button">Go to Bar</router-link>
      <button @click="fn1">首页</button>
      <router-link :to="'/user/' + userId" tag="button">路由参数</router-link>
      <!-- 查询串数据 -->
      <button @click="fn2">URL参数1</button>
      <router-link
        :to="{ path: '/user', query: { name: 'laowang', age: 18 } }"
        tag="button"
        >URL参数2</router-link
      >
    </p>
    <p>
      <button @click="fn3">嵌套路由1</button>
      <router-link :to="'/nestUser/123'" tag="button"
        >嵌套路由 Home</router-link
      >
      <router-link :to="'/nestUser/456/info'" tag="button"
        >嵌套路由 Info</router-link
      >
      <button @click="nestUser1">嵌套路由1</button>
      <button @click="nestUser2">命名路由1</button>
      <router-link
        :to="{ name: 'nestUserParams', params: { userId: '567' } }"
        tag="button"
        >命名路由2</router-link
      >
      <router-link to="/userIndex" tag="button">用户中心</router-link>
    </p>
    <p>
      <router-link to="/r_foo"  tag="button">重定向</router-link>
      <router-link to="/r_bar"  tag="button">重定向2</router-link>
      <router-link to="/a_foo"  tag="button">别名</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
    <router-view name="sidebar"></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
const userId = "123";

export default {
  name: "App",
  data() {
    return {
      userId: "Amy",
    };
  },
  methods: {
    fn1: function () {
      this.$router.push("/foo");
    },
    fn2: function () {
      this.$router.push({
        path: "/user",
        query: {
          name: "david",
          age: 20,
        },
      });
    },
    fn3: function () {
      this.$router.push({
        path: "/nestUser",
        query: {
          id: 3,
          name: "david",
          age: 20,
        },
      });
    },
    nestUser1: function () {
      this.$router.push({
        path: `/nestUser/${userId}`,
      });
    },
    nestUser2: function () {
      this.$router.push({ name: "nestUserParams", params: { userId } });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
