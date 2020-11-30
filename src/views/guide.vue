<template>
  <div class="d-flex flex-column justify-content-between h-100">
    <div class="text-right">
      <router-link class="text-light mr-3" to="/"><i class="fas fa-home"></i></router-link>
    </div>
    <statement :modalHide="isModalHide">
      <template slot="title">Game rule description</template>
      <template slot="content">
        <p>1. 歡迎您 ! 這是一個猜歌遊戲 !</p>
        <p>2. 為確保音樂題庫的多樣性及良好遊戲體驗，<br>
        稍後請先選擇一位您<span class="text-danger"> 最喜歡 </span>
        或<span class="text-danger"> 最常聽 </span>他作品的「歌手」。</p>
        <p>3. 接著，透過 <a target="_blank" href="https://docs-zhtw.kkbox.codes/#overview">KKBOX Open API</a>
        會找出與您選定歌手相似的其他歌手，並且從這些歌手們的作品中組合出一份隨機題庫(十題)。
        </p>
        <p>4. <span class="text-danger">注意 ! 您選定的歌手並不會影響他的歌曲在題庫中出現的次數</span>，而是決定這份題庫中所出現其他歌手的相似度。
        </p>
        <p>5. 遊戲一共有十道選擇題，答題選項共有 6 項，作答時間不拘。如果想即時中斷程序，可使用右上角返回按鈕哦 !
        </p>
        <p>6. 目前播放器自動播放功能暫不支援手機瀏覽器，請移至 PC 網頁並且在最佳網路環境中運行此網頁，以確保您的使用體驗 !
        </p>
        <hr>
        <small>注意事項：<br>如果您選定的歌手，無法透過 <a target="_blank" href="https://docs-zhtw.kkbox.codes/#overview">KKBOX</a>
        資料庫中組合出足夠數量的題庫時
        <br>(即特色相近、性質類似的歌手不足之情況) 系統將會返回步驟，要求更換歌手選項!
        </small>
      </template>
      <template slot="showStatus">
        <input type="checkbox" id="status" v-model="isModalHide">
        <label class="text-secondary" for="status">暫時不再顯示</label>
      </template>
    </statement>
    <h1 class="text-center text-white">
      Preparation before starting
      <i class="fas fa-music"></i>
    </h1>
    <div class="bg-light container-xl py-3 overflow-auto h-75">
      <!-- History data -->
      <div v-if="historyData.length > 0">
         <div class="btn-group">
          <div class="btn-group btn-group-sm" role="group">
            <button type="button" class="btn btn-outline-info dropdown-toggle"
            data-toggle="dropdown">
              Search history
            </button>
            <div class="dropdown-menu p-0">
              <button class="btn btn-sm text-danger"
              @click="removeHistory">Clear All Search history</button>
            </div>
          </div>
        </div>
        <hr>
        <div>
          <div class="d-inline-block" v-for="(item, index) in historyData" :key="index"
          style="padding: 3px;" :class="{'pickup-bg': pickUpSinger.id===item.id}">
            <label class="btn btn btn-light mb-0 border" :for="item.id">
              <i class="far fa-check-circle"
              :class="{'text-danger':pickUpSinger.id===item.id,
              'text-light':pickUpSinger.id!==item.id}"></i> {{item.name}} </label>
            <input class="d-none" :id="item.id" type="radio" :value="item" v-model="pickUpSinger">
          </div>
        </div>
        <hr>
      </div>
      <!-- search model -->
      <div class="input-group mb-3">
        <input type="text" class="form-control border border-info" v-model.trim="searchText"
        placeholder="Your favorite singer" @keyup.enter="searchArtists">
        <div class="input-group-append">
          <button class="btn btn-outline-info" type="button"
          @click="searchArtists">Search</button>
        </div>
      </div>

      <p class="text-center" v-if="!searchData">Have not searched for related singers !</p>
      <div v-if="isAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>「該歌手」無法製作足夠的題庫數量，請重新選擇其他歌手。</strong>
        <button type="button" class="close" @click="isAlert = false">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="row">
        <div class="col-md-3 col-6 mb-3" v-for="(item, index) in searchData" :key="index">
          <div style="padding: 3px;" :class="{'pickup-bg': pickUpSinger.id===item.id}">
            <div class="card h-100 border-0">
              <label class="mb-0" :for="item.id">
                <img :src="item.images[0].url" class="card-img-top">
                <div class="card-body p-2">
                  <p class="card-text text-truncate">
                    <i class="far fa-check-circle"
                    :class="{'text-danger':pickUpSinger.id===item.id,
                    'text-light':pickUpSinger.id!==item.id}"></i>
                    {{ item.name }}
                  </p>
                </div>
              </label>
              <input class="d-none" type="radio"
              :id="item.id" :value="item" v-model="pickUpSinger">
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-danger d-block w-100"
    :disabled="!pickUpSinger" @click="makeSingerList">
      Start Game !</button>
  </div>
</template>

<script>
import statement from '../components/Statement.vue';

export default {
  name: 'guide',
  props: ['data'],
  components: {
    statement,
  },
  data() {
    return {
      searchText: '',
      searchData: '',
      pickUpSinger: '',
      historyData: JSON.parse(localStorage.getItem('pickUpSinger')) || [],
      isAlert: false,
      isModalHide: JSON.parse(sessionStorage.getItem('modalStatus')) || false,
    };
  },
  methods: {
    searchArtists() {
      // 搜尋歌手
      const config = {
        headers: {
          Authorization: `Bearer ${this.data.token}`,
        },
      };
      const api = `${process.env.VUE_APP_API}/search?q=${this.searchText}&type=artist&territory=TW&offset=0&limit=4`;
      if (this.searchText) {
        this.searchData = '';
        this.$http.get(api, config).then((res) => {
          this.searchData = res.data.artists.data;
        });
      } else {
        this.searchData = '';
      }
    },
    makeSingerList() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.data.token}`,
        },
      };
      // 先取出指定歌手的其他相似歌手(最多相似歌手19 + 自身1 = 合計20位歌手 ID)
      const api = `${process.env.VUE_APP_API}/artists/${this.pickUpSinger.id}/related-artists?territory=TW&offset=0&limit=19`;
      const vm = this;
      let singerList = [];
      this.$http.get(api, config)
        .then((res) => {
          singerList = res.data.data.map((item) => item.id);
          singerList.push(vm.pickUpSinger.id);
        })
        .finally(() => {
          if (singerList.length < 5) {
            vm.isAlert = true;
          } else {
            vm.processHistoryData();
            vm.$emit('getSinger', singerList);
            this.$router.push('/playground');
          }
        });
    },
    processHistoryData() {
      // 處理搜尋並且有載入歌手的歷史紀錄，重複的歌手將不會寫入 localStorage
      const vm = this;
      const key = this.historyData.every((item) => item.id !== vm.pickUpSinger.id);
      if (key) {
        vm.historyData.push(vm.pickUpSinger);
        localStorage.setItem('pickUpSinger', JSON.stringify(vm.historyData));
      }
    },
    removeHistory() {
      this.historyData = [];
      localStorage.setItem('pickUpSinger', JSON.stringify(this.historyData));
    },
  },
  watch: {
    isModalHide() {
      sessionStorage.setItem('modalStatus', JSON.stringify(this.isModalHide));
    },
  },
};
</script>

<style lang="scss" scoed>
.pickup-bg{
  background: linear-gradient(-45deg, #9e2e0c, #e60d8b, #eba83c, #e6db43);
  background-size: 400% 400%;
  animation-name: gradient;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  border-radius: 5px;
}
</style>
