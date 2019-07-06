<template>
  <div id="app">
    <!-- <div
      id="nav"
      class="navigation"
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'vue-app',
  data() {
    return {
      // eslint-disable-next-line vue/no-reserved-keys
      _hmt: this._hmt || []
    }
  },

  beforeMount() {
    this.addVisitorTraffic()
  },

  methods: {
    addVisitorTraffic() {
      let hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?9ef817de9ac6d7b7c73e599208a5150b'
      let s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navigation {
  position: fixed;
  right: 0;
  top: 10px;
  transition: all 0.3s;
  li {
    float: left;
  }
  a {
    margin: 0 1em;
    font-size: 0.85em;
    font-weight: 700;
    text-decoration: none;
    text-transform: capitalize;
    transition: color 560ms ease-in-out;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &.active {
      color: #fff;
    }
  }
}
</style>
