<template>
  <div class="layout">
    <Navigation :isHome="true"/>
    <main class="content home">
      <slot/>
    </main>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
</style>
