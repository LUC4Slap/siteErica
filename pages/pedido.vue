<template>
  <div class="container mt-3">
    <b-form ref="form" @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Insira seu email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Seu Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Seu Nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Seu Telefone:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.phone"
          placeholder="Telefone"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Produtos" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        phone: "",
        food: null,
      },
      foods: ["Pão", "Cuca", "Rosca"],
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      let data = {
        text: `
          nome: ${this.form.name}
          email: ${this.form.email}
          telefone: ${this.form.phone}
          pedido: ${this.form.food}
        `,
        to: "+5567992210409",
        from: "Site",
      };
      await axios.post(
        "https://api.mailjet.com/v4/sms-send",
        {
          Authorization: "Bearer",
          "Content-Type": "application/json",
        },
        data
      );
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.phone = "";
      this.form.food = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.cor {
  background: linear-gradient(
    114.34deg,
    #7102ff 0.62%,
    rgba(99, 49, 237, 0.61) 48.76%,
    #060399 100%
  );
}
</style>