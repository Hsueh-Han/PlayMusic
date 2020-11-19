<template>
  <div class="d-flex flex-column justify-content-center h-100">
    <statement>
      <template slot="title">Announcement</template>
      <template slot="content">
        <p>一、本專案僅提供個人開發成品展示，不提供轉載使用於任何商業及非符合規範之用途。</p>
        <p>二、本專案內容使用 KKBOX Open API，資料來源：
          <a target="_blank" href="https://docs-zhtw.kkbox.codes/#overview">KKBOX</a>
          <span>。</span>
        </p>
        <p>三、如需更多音樂體驗相關服務，請至
          <a target="_blank" href="https://www.kkbox.com/tw/tc/">KKBOX 官方</a>
          <span>。</span>
        </p>
        <hr>
        <small class="d-block">開發者：<em>Hseuh</em></small>
        <small class="d-block">e-mail：<em>cookie5year@gmail.com</em></small>
      </template>
    </statement>
    <h1 class="text-center text-white position-relative mb-5">
      Jesus ! What is this song ! <i class="fas fa-music"></i>
      <p class="text-white text-beat">Jesus ! What is this song ! <i class="fas fa-music"></i></p>
    </h1>
    <button type="button" class="btn btn-outline-danger btn-lg w-50 mx-auto"
    :disabled="!data.token" @click="goGuide">
      Enter Game
    </button>
  </div>
</template>

<script>
import statement from '../components/Statement.vue';

export default {
  name: 'index',
  props: ['data'],
  components: {
    statement,
  },
  data() {
    return {

    };
  },
  methods: {
    goGuide() {
      this.$router.push('/guide');
    },
  },
};
</script>

<style lang="scss" scoped>
.text-beat{
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  animation: beat;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
@keyframes beat {
  0% {
    opacity: 0.1;
    font-size: 2.5rem;
  }
  5%{
    opacity: 0.3;
    font-size: 2.55rem;
  }
  10% {
    opacity: 0.1;
    font-size: 2.5rem;
  }
  15%{
    opacity: 0.8;
    font-size: 2.6rem;
  }
  20%{
    opacity: 0.1;
    font-size: 2.5rem;
  }
  100%{
    opacity: 0.1;
    font-size: 2.5rem;
  }
}

</style>
