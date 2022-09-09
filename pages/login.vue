<template>
  <div class="container mt-3">
    <b-form ref="form" @submit.prevent="login">
      <b-form-group id="input-group-1" label="Email" label-for="input-1">
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

      <b-form-group id="input-group-2" label="Sua Senha:" label-for="input-2">
        <b-input-group>
          <b-input-group-prepend is-text @click="mudarType">
            <BIconEyeFill />
            <!-- <div v-if="type == 'password'">
            </div> -->
            <!-- <div v-ele-if="type == 'text'">
              <BIconEyeSlashFill />
            </div> -->
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
      <b-button type="submit" variant="primary">Logar</b-button>
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
        this.$router.push({
          name: "painel",
        });
      } catch (error) {
        this.$router.push({
          name: "login",
        });
      }

      // if ((err == false && response.status == 201) || response.status == 200) {
      //   this.$store.commit("user/ADD_RESULT_TOKEN", response.data.access_token);
      //   this.$router.push({
      //     name: "painel",
      //   });
      // }
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

<style>
</style>
