<template>
  <div v-editable="blok" class="bg" :style="'background-image: url(' + blok.bg_image.filename + ');'">
    <div class="sw flex">
      <div class="left flex">
        <h2 v-html="blok.bold_headline" />
        <h2 v-html="blok.headline" />
        <p v-html="blok.body" />
        <p v-html="blok.green_body" />
      </div>
      <div class="right flex">
        <sign-up-form/>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from '../forms/SignUpForm.vue';
export default {
  components: { SignUpForm },
  data() {
    return {
    };
  },
  props: {
    blok: {
      type: Object,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/scss/global/_variables.scss";

.bg {
  height: auto;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media (min-width: $md) {
    // height: 600px;
  }

  .sw {
    padding-top: 75px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: $md) {
      padding-top: 150px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    .left {
      width: 100%;
      flex-direction: column;

      @media (min-width: $md) {
        width: 47.5%;
      }

      h2 {
        font-weight: 500;
        font-size: 28px;
        line-height: 124%;
        color: white;
        margin: 0;

        @media (min-width: $sm) {
          font-size: 34px;
        }

        &:first-of-type {
          font-weight: 800;
        }
      }

      p {
        font-family: $rfont;
        color: white;
        font-weight: 700;
        font-size: 17px;
        line-height: 125%;
        padding-top: 10px;
        margin: 0;

        &:first-of-type {
          margin-top: 25px;
        }

        &:last-of-type {
          color: $secondary-color;
        }
      }
    }

    .right {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background: $white;
      border-radius: 25px;
      filter: drop-shadow(2px 2px 2px $grey);
      margin-top: 100px;

      @media (min-width: $md) {
        width: 47.5%;
        margin-top: 0;
      }
    }
  }
}
</style>