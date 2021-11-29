<template>
  <footer>
    <div class="sw flex">
      <nuxt-link to="/" class="logo">
        <img
          class="logo"
          src="https://a.storyblok.com/f/125558/x/d313452022/logo-white.svg"
          alt="Logo"
        />
      </nuxt-link>
      <div class="contact">
        <h1>About Us</h1>
        <p>Connect with us!</p>
        <div class="social flex">
          <a href="/">
            <img src="https://a.storyblok.com/f/125558/x/971358ad2e/icon-awesome-instagram.svg" alt="Artdillo Instagram">
          </a>
          <a href="/">
            <img src="https://a.storyblok.com/f/125558/x/042a13f200/icon-awesome-facebook-f.svg" alt="Artdillo Facebook">
          </a>
          <a href="/">
            <img src="https://a.storyblok.com/f/125558/x/f778a75f03/icon-material-email.svg" alt="Email Artdillo">
          </a>
        </div>
      </div>
      <div class="newsletter">
        <h1>Join our mailing list:</h1>
        <div class="flex">
          <img src="https://a.storyblok.com/f/125558/x/f778a75f03/icon-material-email.svg" alt="Artdillo Mailing List">
          <input type="text" placeholder="Email" name="email" required />
        </div>
        <a href="/" class="btn">Subscribe</a>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/css/scss/global/_variables.scss";

footer {
  background-color: $black;
  padding: 25px 0 75px 0;
  // margin-top: auto;
  // height: 150px;

  .sw {
    width: calc(100% - 100px);
    margin: 0 auto;
    flex-direction: column;

    @media (min-width: $sm) {
      flex-direction: row;
    }

    @media (min-width: $lg) {
      width: calc(100% - 200px);
    }

    @media (min-width: 1600px) {
      width: 1260px
    }

    .contact {
      margin-left: 100px;
      h1 {
        color: $white;
        font-family: $rfont;
        font-weight: 800;
        font-size: 20px;
        line-height: 125%;
      }

      p {
        color: $grey;
        font-family: $rfont;
        font-weight: 600;
        font-size: 15px;
        line-height: 125%;
      }

      .social {
        align-items: center;
        justify-content: space-between;

        img {
          height: 30px;
          width: auto;
        }
      }
    }

    .newsletter {
      margin-left: 100px;
      width: 300px;

      h1 {
        color: $grey;
        font-family: $rfont;
        font-weight: 600;
        font-size: 15px;
        line-height: 125%;
      }

      .flex {
        width: 100%;
        align-items: center;
        justify-content: space-between;

        img {
          height: 20px;
          width: auto;
        }
        input {
          padding: 0;
          margin: 0;
          width: 260px;
          height: 40px;
          border: none;
          border-bottom: 2px solid $white;
          background: $black;
          box-shadow: none;
          font-family: $rfont;
          color: $black;
          font-weight: 600;
          font-size: 15px;
          line-height: 125%;
        }

        ::placeholder {
          font-family: $rfont;
          color: $white;
          font-weight: 600;
          font-size: 15px;
          line-height: 125%;
        }
      }

      .btn {
        background-color: #00ACBC;
        font-family: $rfont;
        color: $white;
        text-transform: none;
        padding: 5px;
        font-weight: 800;
        font-size: 15px;
        line-height: 125%;
        border-radius: 50px;
        width: 125px;
        margin: 0;
        margin-top: 10px;
      }
    }
  }
}
</style>