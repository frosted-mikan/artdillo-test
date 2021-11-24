<template>
  <div v-editable="blok" class="wrapper flex">
    <form action="" method="post" >
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" v-on="password_hashing" placeholder="Enter Password" name="psw" required />

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
        <nuxt-link to="/listings" type="submit" class="btn" @click.native="hash_password(email, psw)">Sign Up</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs'
import mongoose, { mongo } from 'mongoose'
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    password_hashing(email, psw){
      const UserSchema = new mongoose.Schema({
        username: email,
        password: psw
      })
      //console.log("Password Hashing here")
      UserSchema.pre("save", function (next) {
      const user = this
      if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }
          user.password = hash
          next()
          })
        }
    })
    } else {
      return next()
    }
    })
      module.exports = mongoose.model("User", UserSchema)
    }
  }
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