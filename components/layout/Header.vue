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
  padding: 20px 0;
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
      align-items: flex-start;
      justify-content: space-between;
    }

    .left {
      width: 100px;
      transition: width 1s;
    }
    // .right {
      // a {
      //   position: relative;
      //   z-index: 1;
      //   margin: 10px;
      //   color: $yellow;
      //   font-weight: bold;
      //   text-transform: uppercase;
      //   font-family: $hfont;
      //   font-size: 20px;
      //   line-height: 24px;
      //   margin-top: 20px;

      //   @media (min-width: $sm) {
      //     font-size: 24px;
      //     line-height: 28px;
      //     margin-top: 10;
      //   }

      //   &:hover {
      //     color: white;
      //     &::after {
      //       background-image: url("https://a.storyblok.com/f/132154/x/6cdb06ab73/quesadillas-squiggle-white.svg");
      //       // box-shadow:inset 0 0 0 200px white;
      //       background-position: center;
      //       background-repeat: no-repeat;
      //       background-size: 100%;
      //       height: 20px;
      //       width: 100%;
      //       content: "";
      //       display: flex;
      //       align-items: center;
      //       justify-content: center;
      //       position: absolute;
      //       z-index: -1;
      //       transform: translatex(-10px) translateY(-10px);
      //       transition: 0.25s;
      //       margin: 0 10px;
      //     }
      //   }

      //   &:nth-of-type(2) {
      //     &:hover {
      //       &::after {
      //         background-image: url("https://a.storyblok.com/f/132154/x/12d5dff335/sides-and-desserts-squiggle-white.svg")
      //       }
      //     }
      //   }

      //   &:nth-of-type(3) {
      //     &:hover {
      //       &::after {
      //         background-image: url("https://a.storyblok.com/f/132154/x/95d4ed95fe/contact-us-squiggle-white.svg")
      //       }
      //     }
      //   }
      // }
    // }
  }
}

.sticky {
  background: $black;
  // box-shadow: 1px 1px 3px rgba(black, 0.1);
  padding: 10px 0;
  transition: height 1s;

  .sw {
    .left {
      width: 75px;
      transition: width 1s;
    }
  }
}
</style>