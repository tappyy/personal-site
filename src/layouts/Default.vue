<template>
  <div class="layout">
    <Navigation :isHome='false'/>
    <main class="content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default {
  components: {
    Navigation,
    Footer
  }
};
</script>

<style>
html,
body {
  min-height: 100%;
}
body {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
  color: #222d50;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Slab", serif;
}
.layout {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  width: 100%;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  flex-grow: 1;
}
</style>
