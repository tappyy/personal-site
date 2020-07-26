<template>
  <Layout>
    <div class="grid">
      <div class="circular">
        <g-image src="../../static/me.jpg"></g-image>
      </div>
      <ul class="quick-info">
        <li>
          <div class="icon-container">
            <Terminal />
          </div>
          <div class="about-info">
            <p class="about-title">Software Developer</p>
            <p class="about-description">
              Working with a great team at
              <a
                href="https://adviserplus.com/"
                target="blank"
              >AdviserPlus</a> developing business software solutions.
            </p>
          </div>
        </li>
        <li>
          <div class="icon-container">
            <Award />
          </div>
          <div class="about-info">
            <p class="about-title">BSc Cyber Security</p>
            <p
              class="about-description"
            >First Class Honours Cyber Security Degree.</p>
          </div>
        </li>
        <li>
          <div class="icon-container">
            <MapPin />
          </div>
          <div class="about-info">
            <p class="about-title">Based in the UK</p>
            <p class="about-description">Can be found in and around the wilderness of North Wales.</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="about-copy">
      <h2>Get in touch</h2>
      <p>
        If you'd like to, you can dispatch an electronic-mailogram in my direction:
        <a
          href="mailto:apottage@gmail.com"
        >apottage@gmail.com</a>.
      </p>
    </div>
  </Layout>
</template>

<script>
import Terminal from "../../static/terminal.svg";
import MapPin from "../../static/map-pin.svg";
import Award from "../../static/award.svg";
export default {
  components: { Terminal, MapPin, Award },
  metaInfo: {
    title: "About"
  }
};
</script>

<style lang="scss">
a {
  color: #ff2c96;
  text-decoration: none;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  //grid-template-rows: 100%;
  //grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  .circular {
    display: inline-block;
    position: relative;
    width: 220px;
    height: 220px;
    overflow: hidden;
    border-radius: 50%;
    /* margin: 0 auto 40px auto; */
    margin: 0 auto;
    img {
      width: auto;
      height: 100%;
      margin-left: -2px;
    }
  }
  .quick-info {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    li {
      display: flex;
      flex-direction: row;
      margin-top: 8px;
      margin-bottom: 8px;
      @media screen and (max-width: 567px) {
        &:first-child {
          margin-top: 24px;
        }
      }
      .about-title,
      .about-description {
        margin: 0;
      }
      .about-title {
        font-size: 1.2em;
        font-weight: bold;
      }
      .about-description {
      }
      svg {
        margin-right: 16px;
        vertical-align: middle;
      }
    }
  }
}
.about-copy {
  margin-top: 48px;
}
</style>

