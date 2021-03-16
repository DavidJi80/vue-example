<template>
  <div>
    <p>
      User: {{ $route.params.userId }} { id: {{ $route.query.id }}, name: {{ $route.query.name }}, age:
      {{ $route.query.age }} }
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "nestUser",
  computed: {
    Obj() {
      return this.$route.query;
    },
  },
};
</script>