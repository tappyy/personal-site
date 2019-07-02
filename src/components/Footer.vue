<template>
  <footer class="footer">
    <p>✌️</p>
  </footer>
</template>

<script>
export default {
  props: {
    isHome: {
      type: Boolean,
      required: true
    }
  }
};
</script>


<style scoped lang="scss">
.footer {
  /* display: flex; */
  //justify-content: space-between;
  /* align-items: center; */
  font-size: 1rem;
  p {
    text-align: center;
    color: #c1c1c1;
  }
}
</style>