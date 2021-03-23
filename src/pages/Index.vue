<template>
  <HomeLayout>
    <div class="grid">
      <div class="logo-container">
        <div class="self-logo">
          <SelfLogo />
        </div>
      </div>
      <div class="type-container">
        <p class="greeting">{{ greeting }} Internet friend,</p>
        <h1>I'm Andy</h1>
        <p class="greeting sub">Your friendly neighbourhood</p>
        <h2>Software Engineer</h2>
        <h3>
          Thinking about
          <span class="buzz">architecture</span>,
          <span class="buzz">security</span> and
          <span class="buzz">patterns</span>.
        </h3>
        <ul class="socials">
          <li>
            <a
              href="https://github.com/tappyy"
              target="_blank"
              data-tip="View my code"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andy-pottage-6274701b/"
              target="_blank"
              data-tip="Be my buddy"
            >
              <LinkedIn />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_unicr0n"
              target="_blank"
              data-tip="*tweet tweet*"
            >
              <Twitter />
            </a>
          </li>
          <li>
            <a href="https://dev.to/tappyy" target="_blank" data-tip="Dev blog">
              <Dev />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </HomeLayout>
</template>

<script>
import HomeLayout from '../layouts/HomeLayout'
import SelfLogo from '../../static/self_icon.svg'
import Github from '../../static/github.svg'
import LinkedIn from '../../static/linkedin.svg'
import Twitter from '../../static/twitter.svg'
import Dev from '../../static/dev-badge.svg'
export default {
  components: {
    HomeLayout,
    SelfLogo,
    Github,
    LinkedIn,
    Twitter,
    Dev,
  },
  data() {
    return {
      today: new Date(),
    }
  },
  computed: {
    greeting() {
      let hour = this.today.getHours()
      if (hour >= 0 && hour < 12) return 'Good morning'
      else if (hour >= 12 && hour < 17) return 'Good afternoon'
      else return 'Good evening'
    },
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  //grid-template-rows: 100%;
  //grid-template-columns: 1fr 1fr;
  padding: 36px;
  box-sizing: border-box;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  .logo-container,
  .type-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 50%;
    /* grid-row-start: 1;
    grid-row-end: 2; */
    h1,
    h2,
    h3 {
      font-family: 'Source Sans Pro', sans-serif;
      margin: 0;
      font-weight: normal;
    }
    h1 {
      font-size: 4rem;
      line-height: 3.5rem;
      font-weight: 700;
    }
    h2 {
      font-size: 2.9rem;
      margin-top: 0;
    }
    .greeting {
      font-weight: 300;
      font-size: 1.6rem;
      margin: 0;
    }
    .sub {
      margin-top: 36px;
    }
  }
  .logo-container {
    align-items: center;
    /* grid-column-start: 2;
    grid-column-end: 3; */
  }
  .type-container {
    /* grid-column-start: 1;
    grid-column-end: 2; */
  }
  .self-logo {
    width: 250px;
    @media (max-width: 767px) {
      width: 125px;
      margin-bottom: 36px;
    }
  }
}
.socials {
  list-style: none;
  padding: 0;
  margin-top: 50px;
  li {
    display: inline-block;
    padding-right: 30px;
    a {
      color: inherit;
      transition: color 200ms ease-out;
      position: relative;
    }
    a:hover {
      color: #ff2c96;
    }
    a[data-tip]::before {
      content: attr(data-tip);
      position: absolute;
      top: 100%;
      left: 50%;
      font-size: 0.9em;
      padding: 5px 10px;
      visibility: hidden;
      opacity: 0;
      color: white;
      border-radius: 10px;
      border: 2px solid #ff2c96;
      color: #ff2c96;
      text-align: center;
      min-width: 100px;
      transform: translate(-50%, 2px);
      transition: all 200ms ease-in-out 50ms;
    }
    a[data-tip]:hover::before {
      display: inline-block;
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 7px);
    }
  }
}
.buzz {
  /* color: #ff2c96; */
  font-weight: 600;
}
.links {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .home-link {
    margin-left: 16px;
    margin-right: 16px;
    text-decoration: none;
    color: inherit;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
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
  }
}
</style>
