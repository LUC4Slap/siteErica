<template>
  <div>
    <div class="negado" v-if="token == ''">
      <h1>{{ message }}</h1>
    </div>
    <div v-else>
      <header>
        <h3 class="mt-3">
          <NuxtLink to="/">PAINEL</NuxtLink>
        </h3>
        <img class="imgPerfil" :src="image" alt="Imagem" />
      </header>
      <main class="container">
        <b-form ref="form" @submit.prevent="pesquisar" v-if="show">
          <b-form-group>
            <label for="example-datepicker">Data Inicial</label>
            <b-form-datepicker
              id="example-datepicker"
              v-model="dataInicial"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group>
            <label for="example-datepicker2">Data Final</label>
            <b-form-datepicker
              id="example-datepicker2"
              v-model="dataFInal"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>
          <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
        <hr />
        <div class="messageData">
          <h4 v-if="pesquisando && dataInicial != '' && dataFInal != ''">
            Resultado da pesquisa das datas: {{ dataInicial }} ate
            {{ dataFInal }}
          </h4>
        </div>
        <div v-if="dadosRelatorio.length > 0">
          <vue-good-table
            :columns="columns"
            :rows="dadosRelatorio"
            theme="nocturnal"
            :search-options="{
              enabled: true,
            }"
            :pagination-options="{
              enabled: true,
              mode: 'pages',
              perPageDropdown: [3, 7, 10],
              dropdownAllowAll: false,
            }"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: "",
      message: "ACESSO NEGADO",
      image: "https://picsum.photos/200/300?random=5",
      show: true,
      dataInicial: "",
      dataFInal: "",
      dadosRelatorio: [],
      pesquisando: false,
      columns: [
        {
          label: "ID",
          field: "id",
        },
        {
          label: "Nome",
          field: "cliente",
        },
        {
          label: "Endereço",
          field: "endereco",
        },
        {
          label: "Data",
          field: "created_at",
        },
        {
          label: "E-mail",
          field: "email",
        },
        {
          label: "Telefone",
          field: "telefone",
        },
        {
          label: "Pedido",
          field: "pedido",
        },
      ],
    };
  },
  middleware: "auth",
  async created() {
    this.token = await localStorage.getItem("tokem");
  },
  methods: {
    async pesquisar() {
      this.pesquisando = true;
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };
      let { data } = await axios.get(
        `https://api-users-pedidos.herokuapp.com/pedidos?inicioData=${this.dataInicial}T00:00:00.000Z&fimData=${this.dataFInal}T20:00:00.000Z`,
        config
      );
      // for (let item of data) {
      //   const parsed = {
      //     id: item.id,
      //     nome: item.cliente,
      //     endereco: item.id,
      //     id: item.id,
      //     id: item.id,
      //     id: item.id,
      //   };
      // }
      this.dadosRelatorio = data;
    },
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

.imgPerfil {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.messageData {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 5px;
}
</style>
