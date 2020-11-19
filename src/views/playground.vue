<template>
  <div class="d-flex flex-column justify-content-between h-100">
    <div class="text-right">
      <router-link class="text-light mr-3" to="/"><i class="fas fa-home"></i></router-link>
      <router-link class="text-light" to="/guide"><i class="fas fa-reply"></i></router-link>
    </div>
    <h1 class="text-center text-white position-relative">
      Jesus ! What is this song !
      <i class="fas fa-music"></i>
      <p class="text-white text-beat">Jesus ! What is this song ! <i class="fas fa-music"></i></p>
    </h1>
    <div class="h-75" @click="sendAnswer">
      <!-- loading -->
      <div v-if="!isStart" class="h-100 d-flex justify-content-center align-items-center">
        <div class="spinner-grow mr-1 spinner-grow-mn text-light" role="status"></div>
        <div class="spinner-grow mr-1 spinner-grow-mn text-light" role="status"></div>
        <div class="spinner-grow mr-1 spinner-grow-mn text-light" role="status"></div>
        <div class="spinner-grow mr-1 spinner-grow-mn text-light" role="status"></div>
        <div class="spinner-grow mr-1 spinner-grow-mn text-light" role="status"></div>
      </div>
      <!-- game screen -->
      <div v-if="isStart">
        <iframe class="m-0 d-none" :src="dataBase[currentNum].url"
        allow="autoplay" style="height: 150px;"></iframe>
        <div class="w-50 mx-auto mb-3 challenge-bg" style="padding: 3px;">
          <h3 class="text-center text-white mb-0 bg-dark p-1" style="opacity: 0.8;">
            Challenge - {{ currentNum + 1 }}
          </h3>
        </div>
        <div v-for="(item, index) in dataBase[currentNum].answerList" :key="index">
          <button class="btn btn-light btn-lg d-block w-100 border mb-1"
          :class="{ //切換三種樣式 1.錯誤選項 2.錯誤選項後的正確答案 3.正確選項
          'bg-danger': item === playerAnswer && playerAnswer !== dataBase[currentNum].realAnswer,
          'bg-info': item === playerAnswer && playerAnswer === dataBase[currentNum].realAnswer,
          'bg-warning': item === afterRealAnswer,
          }" :disabled="!playerBtn">
          <i class="text-white mr-3" :class="{
          'fas fa-times':item===playerAnswer && playerAnswer!==dataBase[currentNum].realAnswer,
          'far fa-thumbs-up':item===playerAnswer && playerAnswer===dataBase[currentNum].realAnswer,
          }"></i>{{item}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'playground',
  props: ['data'],
  data() {
    return {
      musicData: this.data,
      dataBase: [],
      currentNum: 0,
      isStart: false,
      playerAnswer: '',
      afterRealAnswer: '',
      playerBtn: true,
    };
  },
  methods: {
    ramdomSinger() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.data.token}`,
        },
      };

      const subject = {
        correct: false,
        url: '',
        realAnswer: '',
        realAnswerArtist: '',
        answerList: [],
      };
      const answerArr = [];

      // 透過歌手名單長度設置隨機數值 = 0 ~ 歌手總數n
      const randomNum = Math.floor(Math.random() * (this.musicData.singerId.length));
      // 使用隨機數值取出歌手名單中的隨機一名，搜尋該歌手的 top-tracks 資料
      const vm = this;
      const api = `${process.env.VUE_APP_API}/artists/${this.musicData.singerId[randomNum]}/top-tracks?territory=TW`;
      this.$http.get(api, config)
        .then((res) => {
          // 取出隨機歌手的 top-tracks 資料後，再針對這份資料長度進行一個隨機數值的取樣
          // 隨機取出的內容(id) 就是播放器欲播放的該首隨機歌曲
          const randomSong = Math.floor(Math.random() * (res.data.data.length));
          subject.url = `https://widget.kkbox.com/v1/?id=${res.data.data[randomSong].id}&type=song&terr=TW&lang=tw&autoplay=true`;

          // 製作一個固定出現於同名歌手底下歌曲的答案選項(包含骰出同一個亂數的狀況排除)
          let randomSongFake = Math.floor(Math.random() * (res.data.data.length));
          if (randomSong === randomSongFake && randomSong === res.data.data.length - 1) {
            randomSongFake -= 1;
          } else if (randomSong === randomSongFake && randomSong === 0) {
            randomSongFake += 1;
          } else if (randomSong === randomSongFake) {
            randomSongFake += 1;
          }
          subject.realAnswer = res.data.data[randomSong].name;
          subject.realAnswerArtist = res.data.data[randomSong].album.artist.name;
          answerArr.push(res.data.data[randomSong].name, res.data.data[randomSongFake].name);
          // 製作其他答案選項(4項)
          const Arr = [];
          for (let i = 0; i < 4; i += 1) {
            const randomnum = Math.floor(Math.random() * (vm.musicData.singerId.length));
            // 使用隨機數值取出歌手名單中的隨機一名，搜尋該歌手的 top-tracks 資料
            const randomApi = `${process.env.VUE_APP_API}/artists/${vm.musicData.singerId[randomnum]}/top-tracks?territory=TW`;
            Arr.push(vm.$http.get(randomApi, config));
          }
          return vm.axios.all([...Arr]);
        })
        .then(vm.axios.spread((...res) => {
          res.forEach((item) => {
            const randomFakeNum = Math.floor(Math.random() * (item.data.data.length));
            answerArr.push(item.data.data[randomFakeNum].name);
          });
        }))
        .finally(() => {
        // 最後，隨機排序這個答案清單
          const arr = [...answerArr];
          for (let i = answerArr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          subject.answerList = arr;
          this.dataBase.push(subject);
        });
    },
    sendAnswer(event) {
      if (event.target.nodeName === 'BUTTON') {
        const vm = this;
        const num = this.currentNum < this.dataBase.length - 1 ? 1 : 0;
        // 作答後關閉按鈕功能，避免時間內重複觸發事件(事件完成後才會再度開啟按鈕功能)
        this.playerBtn = false;
        // 玩家答案為點擊的按鈕項目
        this.playerAnswer = event.target.innerText;

        if (this.playerAnswer === this.dataBase[this.currentNum].realAnswer) {
          // 玩家答對時，紀錄該筆題目的正確狀態
          this.dataBase[this.currentNum].correct = true;
        } else {
          // 玩家答錯時，將正確答案賦值到變數 afterRealAnswer，提供給 HTML 樣式渲染
          this.afterRealAnswer = this.dataBase[this.currentNum].realAnswer;
        }
        setTimeout(() => {
          // 事件完成後，將變數 afterRealAnswer、playerAnswer 歸復空值 避免一些未知錯誤的樣式提示
          vm.playerAnswer = '';
          vm.afterRealAnswer = '';
          vm.currentNum += num;
          vm.playerBtn = true;
          if (!num) {
            // 當 num = 0 時，表示題庫已運行完成，即儲存本次挑戰狀況 並進行頁面跳轉
            localStorage.setItem('score', JSON.stringify(this.dataBase));
            vm.$router.push('/score');
          }
        }, 1500);
      }
    },
  },
  created() {
    if (!this.musicData.singerId) {
      this.$router.push('/');
    } else {
      for (let i = 0; i < 10; i += 1) {
        this.ramdomSinger();
      }
    }
  },
  watch: {
    dataBase() {
      // 結束 loading 效果
      if (this.dataBase.length === 10) {
        this.isStart = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner-grow-mn{
  width: 0.75rem;
  height: 0.75rem;
}
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
.challenge-bg{
  background: linear-gradient(-45deg, #0c169e, #0d72e6, #3cebdd, #e6ad43);
  background-size: 400% 400%;
  animation-name: gradient;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  border-radius: 5px;
}

</style>
