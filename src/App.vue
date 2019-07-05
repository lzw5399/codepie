<template>
  <div id="app">
    <div class="bg"></div>
    <ul class="navigation">
      <li
        v-for="(item, index) in navigation"
        :key="index"
      >
        <a
          :class="{'active': active === item}"
          @click="flip(item)"
        >{{ item }}</a>
      </li>
    </ul>
    <div class="main">
      <div
        class="main-panel flip"
        :class="flipState ? 'out' : 'in' "
      >
        <component
          class="wrapper"
          :is="inPage"
        ></component>
      </div>
      <div
        class="main-panel flip"
        :class="flipState ? 'in' : 'out'"
      >
        <component
          class="wrapper"
          :is="outPage"
        ></component>
      </div>
    </div>
  </div>
</template>
<script>
import home from '@/views/Home'
import about from '@/views/About'
// import project from '@/views/project'
// import links from '@/views/links'
// import chat from '@/views/chat'
// import blank from '@/views/blank'
export default {
  name: 'app',
  components: {
    home,
    about
    // project,
    // links,
    // chat,
    // blank
  },
  data() {
    return {
      flipState: false,
      active: 'home',
      inPage: 'home',
      outPage: '',
      navigation: ['home', 'about', 'friends', 'links']
    }
  },
  created() { },
  mounted() {
    let colors = [[62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]]
    const options = {
      colors: colors,
      step: 0,
      colorIndices: [0, 1, 2, 3],
      gradientSpeed: 0.002
    }
    setInterval(() => {
      this.updateGradient(options)
    }, 30)
  },
  methods: {
    flip(status) {
      if (this.active === status) return
      this.active = status
      this.flipState = !this.flipState
      this.flipState ? this.outPage = status : this.inPage = status
      // this.flipState ? this.inPage = 'blank' : this.outPage = 'blank'
    },
    updateGradient(option) {
      let obj = document.querySelector('.bg')
      let a = option.colors[option.colorIndices[0]]
      let b = option.colors[option.colorIndices[1]]
      let c = option.colors[option.colorIndices[2]]
      let d = option.colors[option.colorIndices[3]]
      let e = 1 - option.step
      let f = Math.round(e * a[0] + option.step * b[0])
      let g = Math.round(e * a[1] + option.step * b[1])
      let h = Math.round(e * a[2] + option.step * b[2])
      let i = '#' + (f << 16 | g << 8 | h).toString(16)
      let j = Math.round(e * c[0] + option.step * d[0])
      let k = Math.round(e * c[1] + option.step * d[1])
      let l = Math.round(e * c[2] + option.step * d[2])
      let m = '#' + (j << 16 | k << 8 | l).toString(16)
      option.step = option.step + option.gradientSpeed
      if (option.step >= 1) {
        option.step %= 1
        option.colorIndices[0] = option.colorIndices[1]
        option.colorIndices[2] = option.colorIndices[3]
        option.colorIndices[1] = (option.colorIndices[1] + Math.floor(1 + Math.random() * (option.colors.length - 1))) % option.colors.length
        option.colorIndices[3] = (option.colorIndices[3] + Math.floor(1 + Math.random() * (option.colors.length - 1))) % option.colors.length
      }
      obj.style.background = '-webkit-gradient(linear, left top, right top, from(' + i + '), to(' + m + '))'
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #2f2f2f;
    animation: fadedown 1s cubic-bezier(0.19, 1, 0.22, 1);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1),
        rgba(255, 255, 255, 0.3)
      );
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
  .main {
    position: relative;
    width: 600px;
    height: 350px;
    perspective: 1000px;
    -webkit-perspective: 1000px;
    .main-panel {
      position: absolute;
      height: 100%;
      width: 100%;
      .wrapper {
        width: 600px;
        height: 350px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
      }
    }
    .flip {
      transform: translate(0);
      backface-visibility: hidden;
      &.out {
        animation-name: flipouttoleft;
        transform: rotateY(-180deg);
        animation-duration: 500ms;
      }
      &.in {
        animation-name: flipintoright;
        animation-duration: 500ms;
      }
    }
  }
}

@mixin diffuse($default_color, $color, $time, $is_Font) {
  background-size: 0 0;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: $default_color;
  background-image: radial-gradient(
    $color 0%,
    $color 50%,
    transparent 50%,
    transparent 100%
  );
  transition: background-size $time;

  @if ($is_Font) {
    -webkit-background-clip: text;
    color: transparent;
  }
}

@keyframes flipouttoleft {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(-180deg);
  }
}
@keyframes flipintoright {
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0);
  }
}
@keyframes flipouttoright {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(180deg);
  }
}
@keyframes flipintoleft {
  from {
    transform: rotateY(-180deg);
  }
  to {
    transform: rotateY(0);
  }
}
</style>
