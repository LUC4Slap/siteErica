<template>
  <header>
    <h5>CHEIRINHO DE PÃO</h5>
    <div class="button">
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scope>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    94.94deg,
    rgba(116, 49, 237, 0.61) 0%,
    #4b04a5 100%
  );
  color: #fff;
  height: 80px;
  padding: 0 15px;
}

.button {
  background-color: transparent;
  border: 1px solid rgba(116, 49, 237, 0.61);
  padding: 5px;
  border-radius: 8px;
}

.a {
  text-decoration: none;
  color: #fff;
}
</style>
