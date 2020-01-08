<template lang="html">
  <div class="container">
    <div class="section">
      <h1 class="title">Activating User</h1>
      <AppSpinner />
    </div>
  </div>
</template>

<script>
import { USER_ACTIVATED } from "@/helpers/redirectMessages";
export default {
  created() {
    this.activateUser();
  },
  methods: {
    activateUser() {
      const { hash } = this.$route.params;
      this.$store
        .dispatch("auth/activateUser", hash)
        .then(_ =>
          this.$router.push({
            path: "/login",
            query: { messageType: USER_ACTIVATED.type }
          })
        )
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="css" scoped>
.title {
  font-size: 50px;
  text-align: center;
}
</style>
