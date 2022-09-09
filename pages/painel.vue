<template>
  <h1>LOGADO NO PAINEL</h1>
</template>

<script>
export default {
  async data() {
    return {
      token: "",
    };
  },
  async created() {
    const token_state = await this.$store.state.user.token_user;
    if (!token_state) {
      this.$router.push({
        name: "login",
      });
    }
    this.token = token_state;
  },
};
</script>

<style>
</style>
