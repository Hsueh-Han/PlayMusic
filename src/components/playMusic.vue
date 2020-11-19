<template>
  <div>
    <div class="container-fluid bg-light">
      <div class="row justify-content-center">
        <div class="col-lg-7 bg-gradient vh-100 py-3">
          <router-view :data="musicData" @getSinger="getSingerId"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'querystring';

export default {
  data() {
    return {
      musicData: {
        token: '',
        singerId: '',
      },
    };
  },
  methods: {
    getToken() {
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      const oauth = {
        grant_type: 'client_credentials',
        client_id: '4a9f45b8b1cc2e68f4c1b028e49a3ac2',
        client_secret: '2a895f33db011f141d8fc5f36b82b905',
      };
      const oauthApi = `https://cors-anywhere.herokuapp.com/${'https://account.kkbox.com/oauth2/token'}`;
      this.$http.post(oauthApi, qs.stringify(oauth), config).then((res) => {
        this.musicData.token = res.data.access_token;
      });
    },
    getSingerId(listId) {
      this.musicData.singerId = listId;
    },
  },
  created() {
    this.getToken();
  },
};
</script>

<style lang="scss">

.bg-gradient{
  background: linear-gradient(-45deg, #9e2e0c, #42031b, #023149, #23d5ab);
  background-size: 400% 400%;
  animation-name: gradient;
  animation-duration: 20s;
  animation-iteration-count: infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
