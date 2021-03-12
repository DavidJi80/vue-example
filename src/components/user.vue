<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息,呵呵呵</p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ Obj.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //计算属性, $route拿到的是活越的路由params数参数//$route是我们new的router路由
      return this.$route.params.userId;
    },
    Obj() {
      return this.$route.query;
    },
  },
};
</script>
