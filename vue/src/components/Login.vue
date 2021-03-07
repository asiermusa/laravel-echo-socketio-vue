<template>
  <div>
    <div v-if="isLoggedIn">
      <h2>You are logged</h2>
      <hr />
      <button @click="_logout">Logout</button>
    </div>
    <form class="login" @submit.prevent="_login" v-else>
      <h1>Sign in</h1>
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Name" /><br />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "asiermusa@gmail.com",
      password: "secret",
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    _login: function() {
      let email = this.email;
      let password = this.password;
      let device_name = "M";
      this.$store
        .dispatch("login", { email, password, device_name })
        .then(() => {
          this.$echo.connector.options.auth.headers["Authorization"] =
            "Bearer " + this.$store.state.token;
          this.$echo.private("messaging.1").listen(".messageEvent", (data) => {
            console.log("Private Message => ", data);
          });
        })
        .catch((err) => console.log(err));
    },
    _logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$echo.leave("messaging.1");
        this.$echo.connector.options.auth.headers["Authorization"] =
          "Bearer " + this.$store.state.token;
      });
    },
  },
};
</script>
