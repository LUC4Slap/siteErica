<template>
  <div>
    <div class="negado" v-if="token == ''">
      <h1>{{ message }}</h1>
    </div>
    <div v-else>
      <h1>LOGADO NO PAINEL</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      message: "ACESSO NEGADO",
    };
  },
  async beforeCreate() {
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

<style scope>
.negado {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  background-color: rgb(224, 90, 90);
}
</style>
