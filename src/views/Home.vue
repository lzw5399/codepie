<template>
  <div class="home">
    <div class="avatar">
      <img src="../assets/images/avatar.jpg">
    </div>
    <div class="content">
      <h1>宝树呐的个人主页</h1>
      <!-- <h1>{{ randomKaomoji }}つロ 乾杯</h1> -->
      <h1>开发中... {{ randomKaomoji }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
    }
  },
  computed: {
    randomKaomoji() {
      const kaomoji = [
        '( ˊ ▽ ` )',
        '(゜-゜)',
        'o(￣ヘ￣o#)',
        '(ﾉ´∀` *)'
        // "(●'◡'●)",
        // '(｡・`ω´･)',
        // '(´･ω･｀)',
        // '(´･ω･`)',
        // '╮(╯ω╰)'
      ]

      return kaomoji[Math.floor(kaomoji.length * Math.random())]
    }
  },
  created() { },
  mounted() { },
  methods: {}
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.home .avatar {
  height: 150px;
  text-align: center;
}

.home .avatar img {
  margin-top: -75px;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}

.home .content {
  height: 120px;
  text-align: center;
}

.home .content h1 {
  color: #fff;
  font-weight: 300;
  font-size: 30px;
}
.home .content p {
  color: #fff;
}
</style>
