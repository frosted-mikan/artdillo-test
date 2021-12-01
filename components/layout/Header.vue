<template>
  <header class="header">
    <div class="sw flex">
      <div class="left animate fadeInLeft">
        <nuxt-link to="/" class="logo-link">
          <!-- <pre v-html="icons"/> -->
          <img
            class="logo"
            src="https://a.storyblok.com/f/125558/x/61e15464fd/logo.svg"
            alt="Logo"
          />
          <!-- <pre v-html="icons.logo"/> -->
        </nuxt-link>
      </div>
      <div class="right flex animate fadeInRight">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/">About</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["icons"]),
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      if (process.browser) {
        const nav = document.querySelector(".header");
        const bg = document.querySelector(".bg");
        console.log(bg.getBoundingClientRect().y);
        if (bg.getBoundingClientRect().y <= -1) {
          nav.classList.add("sticky");
        } else {
          nav.classList.remove("sticky");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/scss/global/_variables.scss";

header {
  background: $black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  .sw {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: $sm) {
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
    }

    .left {
      width: 100px;
      transition: width 1s;
    }
    .right {
      margin-left: 50px;
      a {
        position: relative;
        z-index: 1;
        color: $white;
        font-weight: 600;
        font-family: $rfont;
        font-size: 14px;
        line-height: 17px;
        margin-left: 10px;

        @media (min-width: $sm) {
          font-size: 17px;
          line-height: 20px;
          margin-left: 20px;
        }

        &:hover {
          color: white;
          &::after {
            background-color: $secondary-color;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
            height: 4px;
            width: 100%;
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            transform: translateY(4px);
            transition: 0.25s;
          }
        }
      }
    }
  }
}

.sticky {
  background: $black;
  // box-shadow: 1px 1px 3px rgba(black, 0.1);
  padding: 20px 0;
  transition: height 1s;

  .sw {
    .left {
      width: 75px;
      transition: width 1s;
    }
  }
}
</style>