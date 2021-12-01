<template>
  <div class="wrapper flex">
    <img src="https://a.storyblok.com/f/125558/x/c2e526f7b7/artdillo-dillo.svg" alt="Artdillo Alt Logo">
    <form action="" method="post" class="flex">

      <div>
        <h1>Sign Up</h1>
        <p>Welcome to Artdillo.</p>
      </div>

      <div>
        <!-- <label for="email"><b>Email</b></label> -->
        <input type="text" v-model="user.email" placeholder="Email" name="email" required />
        <!-- <label for="email"><b>Retype Email</b></label> -->
        <input type="text" v-model="user.email" placeholder="Re-type Email" name="email" required />
      </div>

      <div>
        <!-- <label for="text"><b>Username</b></label> -->
        <input type="text" v-model="user.username" placeholder="Create Username" name="username" required />
        <!-- <label for="psw"><b>Password</b></label> -->
        <input type="password" v-model="user.password" placeholder="Create Password" name="psw" required />
        <!-- <label for="psw-repeat"><b>Repeat Password</b></label> -->
        <input
          type="password"
          placeholder="Re-type Password"
          name="psw-repeat"
          required
        />
      </div>
      

      <div class="clearfix">
        <nuxt-link to="/listings/" type="submit" class="btn" @click.native="hash_password(email, psw)">Sign Up</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs'
import mongoose, { mongo } from 'mongoose'
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  props: {
    blok: {
      type: Object,
      required: false,
    },
  },
  methods: {
    async createUser() {
      await this.$axios
        .post('/api/user', this.user)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
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
@import "~/assets/css/scss/global/_variables.scss";

.wrapper {
  height: 550px;
  padding: 50px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: $md) {
    padding: 100px;
  }

  img {
    transform: translateY(-60px);
  }

  form {
    transform: translateY(-40px);
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        font-weight: 800;
        font-size: 21px;
        line-height: 125%;
      }

      p {
        font-weight: 600;
        color: $grey;
        font-size: 17px;
        line-height: 125%;
      }

      input {
        padding: 0;
        border: none;
        border-bottom: 2px solid $black;
        box-shadow: none;
        font-family: $rfont;
        color: $black;
        font-weight: 600;
        font-size: 15px;
        line-height: 125%;
      }

      ::placeholder {
        font-family: $rfont;
        color: $black;
        font-weight: 600;
        font-size: 15px;
        line-height: 125%;
      }

      a {
        font-family: $rfont;
        font-weight: 800;
        font-size: 15px;
        line-height: 125%;
        text-transform: none;
        border-radius: 50px;
      }
    };
  }
}
</style>