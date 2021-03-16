<template>
  <div>
    <p>User Index</p>
    <navbar></navbar>
    <router-view />
    <router-view name="helper" />
  </div>
</template>

<script>
import navbar from "@/components/navbar";

export default {
  name: "userIndex",
  data() {
    return {};
  },
  components: {
    navbar,
  },
};
</script>
