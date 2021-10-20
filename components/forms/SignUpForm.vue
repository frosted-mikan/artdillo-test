<template>
  <div v-editable="blok" class="wrapper flex">
    <form action="" method="post">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      />

      <label>
        <input
          type="checkbox"
          checked="checked"
          name="remember"
          style="margin-bottom: 15px"
        />
        Remember me
      </label>

      <!-- <p>
        By creating an account you agree to our
        <a href="#" class="btn">Terms &amp; Privacy</a>.
      </p> -->

      <div class="clearfix">
        <nuxt-link to="/listings" type="submit" class="btn">Sign Up</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.wrapper {
  padding: 0;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  form {
    width: 700px;
    max-width: 100vw;
    margin: auto;
  }
}
</style>