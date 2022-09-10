<template>
  <div class="container login">
    <b-form ref="form" @submit.prevent="login">
      <div class="img">
        <b-img
          src="https://arquivos.minhaagendavirtual.com.br/static/app-assets/img/gallery/login.png"
          fluid
          alt="Responsive image"
        ></b-img>
      </div>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <BIconPersonFill />
          </b-input-group-prepend>
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Insira seu email"
            required
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-input-group>
          <b-input-group-prepend is-text @click="mudarType">
            <BIconEyeFill />
          </b-input-group-prepend>

          <b-form-input
            id="input-2"
            v-model="senha"
            placeholder="Informe sua Senha"
            :type="type"
            required
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button block type="submit" variant="primary">Logar</b-button>
    </b-form>
  </div>
</template>

<script>
import {
  BIconEyeFill,
  BIconPersonFill,
  BIconEyeSlashFill,
} from "bootstrap-vue";
import axios from "axios";
export default {
  components: {
    BIconEyeFill,
    BIconPersonFill,
    BIconEyeSlashFill,
  },
  data() {
    return {
      email: "",
      senha: "",
      type: "password",
    };
  },
  methods: {
    async login() {
      const loginAuth = {
        username: this.email,
        password: this.senha,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/auth/login",
          loginAuth
        );

        this.$store.commit("user/ADD_RESULT_TOKEN", response.data.access_token);
        await localStorage.setItem("tokem", response.data.access_token);
        this.$router.push({
          name: "painel",
        });
      } catch (error) {
        this.$router.push({
          name: "login",
        });
      }
    },
    mudarType() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>

<style scoped>
.login {
  background-color: rgb(14 36 189 / 50%);
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.img {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-left: 50px;
}
</style>
