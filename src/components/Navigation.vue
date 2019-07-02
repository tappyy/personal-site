<template>
  <header class="header">
    <g-link v-if="!isHome" to="/" class="nav-logo">
      <SelfLogo/>
    </g-link>
    <nav class="nav">
      <g-link active-class="link-active" class="nav__link" to="/blog">blog</g-link>
      <g-link active-class="link-active" class="nav__link" to="/about">about</g-link>
    </nav>
  </header>
</template>

<script>
import SelfLogo from "../../static/self_icon.svg";
export default {
  components: {
    SelfLogo
  },
  props: {
    isHome: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 16px;
  .nav-logo {
    min-width: 50px;
    width: 50px;
  }
}
.nav {
  margin-left: auto;
}
.nav__link {
  margin-left: 70px;
  text-decoration: none;
  color: inherit;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    background-color: #ff2c96;
    visibility: hidden;
    border-radius: 1px;
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  &.link-active {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      height: 2px;
      width: 100%;
      background-color: #ff2c96;
      border-radius: 1px;
    }
  }
}
</style>
