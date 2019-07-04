<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/avatar.jpg"
    />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  beforeMount() {

  },
  data() {
    return {
      // msg: process.env.NODE_ENV
      msg: 'To be implemented!'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
