<template>
  <div class="container mt-3">
    <b-alert variant="warning" show>
      Pedidos somente até as 09:30 posterior a este horário sera feita a entrega
      no dia seguinte. Entregas após as 17:30.
    </b-alert>
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
          mask="#####-####"
          max="999999999"
          placeholder="Telefone"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Endereço:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.endereco"
          placeholder="Seu Endereço"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Produtos" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
          multiple
          :select-size="4"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
    <div class="mt-4">
      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="error == true ? 'danger' : 'success'"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <p>{{ message }} {{ dismissCountDown }} segundos...</p>
        <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        ></b-progress>
      </b-alert>
    </div>
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
        endereco: "",
        food: ["Pão"],
      },
      foods: [
        "Pão",
        "Cuca de Goiabada",
        "Cuca de Banana",
        "Cuca de Doce de Leite",
        "Rosca",
      ],
      show: true,
      message: null,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      error: false,
      maxNumber: 10,
    };
  },
  methods: {
    async onSubmit() {
      let pedido = {
        nome: this.form.name,
        email: this.form.email,
        telefone: this.form.phone,
        pedido: this.form.food,
        endereco: this.form.endereco,
      };
      let { data } = await axios.post(
        "https://api-email-nest.herokuapp.com/api/v1/email",
        pedido
      );
      // let { data } = await axios.post("http://localhost:3030/send", pedido);
      if (data.hasOwnProperty("error") && data.erro == true) {
        this.error = data.error;
      }
      this.message = data.message;
      this.onReset();
      this.showAlert();
    },
    onReset() {
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.phone = "";
      this.form.food = ["Pão"];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
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