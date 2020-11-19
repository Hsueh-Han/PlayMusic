<template>
  <div class="d-flex flex-column justify-content-around h-100">
    <div class="text-right">
      <router-link class="text-light mr-3" to="/"><i class="fas fa-home"></i></router-link>
    </div>
    <h1 class="text-center text-white position-relative">
      Song List <i class="fas fa-music"></i>
      <p class="text-white text-beat">Song List <i class="fas fa-music"></i></p>
    </h1>
    <div class="my-2 text-center position-relative">
      <p class="position-absolute position-revise text-white" v-if="!url">點擊下方清單，可重新播放音樂內容</p>
      <iframe :src="url" allow="autoplay" style="height: 130px;"></iframe>
    </div>
    <div class="bg-light container-xl py-3 overflow-auto h-75 mb-2">
      <div class="row">
        <div class="col">
          <div class="list-group" @click="checkList">
          <a href="#" v-for="(item, index) in myScore" :key="index" :data-url="item.url"
          class="list-group-item list-group-item-action">
          <span>
            <i class="mr-3" :class="{
            'fas fa-times text-danger':!item.correct,
            'far fa-thumbs-up text-info':item.correct,
            }"></i>
          </span>
          {{`${item.realAnswer} - ${item.realAnswerArtist}`}}</a>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-danger btn-lg w-50 mx-auto"
    :disabled="!data.token" @click="goGuide">
      Play Again !
    </button>
  </div>
</template>

<script>

export default {
  name: 'score',
  props: ['data'],
  data() {
    return {
      myScore: JSON.parse(localStorage.getItem('score')) || [],
      url: '',
    };
  },
  methods: {
    goGuide() {
      this.$router.push('/guide');
    },
    checkList(event) {
      if (event.target.nodeName === 'A') {
        this.url = event.target.dataset.url;
      }
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
.position-revise{
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

</style>
