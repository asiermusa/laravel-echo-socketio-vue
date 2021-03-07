<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <login></login>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: { Login },
  created() {
    if (this.$echo) {
      console.log(this.$echo);
    }

    this.$echo.connector.socket.on("reconnecting", function(attemptNumber) {
      console.log("reconnecting", attemptNumber);
    });

    // connect to public channel
    this.$echo.channel("messaging").listen(".messageEvent", (data) => {
      console.log("Public Message => ", data);
    });

    // connect to private channel
    this.$echo.private("messaging.1").listen(".messageEvent", (data) => {
      console.log("Private Message => ", data);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
