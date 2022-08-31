<template>
  <main class="principal">
    <section class="prod1">
      <img src="../assets/pao.jpeg" alt="Pão caseiro" />
      <p>Delicioso pão caseiro feito com ingrediente de primeira</p>
    </section>

    <section class="prod2">
      <div class="position">
        <img src="../assets/cuca.jpeg" alt="Pão caseiro" />
      </div>
      <p>Deliciosa cuca caseira feito com ingrediente de primeira</p>
    </section>

    <section class="prod1">
      <img src="../assets/rosca.jpeg" alt="Pão caseiro" />
      <p>Deliciosa rosca caseira feito com ingrediente de primeira</p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scope>
section {
  padding: 8px;
}

.principal {
  background: linear-gradient(
    114.34deg,
    #7102ff 0.62%,
    rgba(99, 49, 237, 0.61) 48.76%,
    #060399 100%
  );
}

.alinhamento {
  display: flex;
  flex-direction: column;
}

.prod1 {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.prod1 img {
  width: 150px;
  height: 150px;
  margin-right: 15px;
}

.prod1 p {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
}

.prod2 {
  display: flex;
  height: 163px;
  flex-direction: row;
  margin: 15px 0;
}

.position {
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 8px;
}

.prod2 img {
  width: 150px;
  height: 150px;
}

.prod2 p {
  width: 56%;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
</style>