<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <greeting></greeting>
  </div>
</template>

<script>
import Greeting from "../components/Greeting";
export default {
  name: "home",
  components: {
    Greeting
  }
};
</script>
