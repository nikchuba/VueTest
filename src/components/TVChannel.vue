<template>
  <div class="tv-channel">
    <div class="tv-card" v-for="tvchannel in tvchannels" :key="tvchannel.name">
      <div class="wrapper-img">
        <img v-bind:src="url[tvchannel.logo]" alt="" />
      </div>
      <section class="broadcasts">
        <h1>{{ tvchannel.name }}</h1>
        <div
          class="broadcast"
          v-for="broadcast in tvchannel.broadcasts"
          :key="broadcast.name"
        >
          <div class="time">{{ broadcast.time }}</div>
          <div class="title">{{ broadcast.name }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import FirstIMG from "../assets/img/First.svg";
import TwoByTwoIMG from "../assets/img/2x2.svg";
import RBKIMG from "../assets/img/RBK.svg";
import AmediaIMG from "../assets/img/Amedia.svg";
import Data from "../assets/json/data.json";

export default {
  data() {
    return {
      tvchannels: Data.tvChannels,
      url: { FirstIMG, TwoByTwoIMG, RBKIMG, AmediaIMG }
    };
  },
  methods: {
    test() {
      console.log(this.tvchannels);
    }
  }
};
</script>

<style>
.tv-card {
  display: inline-flex;
  align-items: center;
  width: 1180px;
  height: 162px;
  background: #f2f2f2;
  border-radius: 8px;
  margin-bottom: 16px;
}

.tv-card:last-child {
  margin-bottom: 0;
}

.wrapper-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
}

.broadcasts {
  display: flex;
  width: auto;
  height: 122px;
  flex-direction: column;
}

h1 {
  margin-bottom: 5px;
  font-family: Rubik-Medium;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #333333;
}

.broadcast {
  display: inline-flex;
  font-family: Rubik-Regular;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  margin-top: 12px;
}

.time {
  width: 46px;
  margin-right: 16px;
}
.broadcast:nth-child(2) {
  color: #e5261e;
}
</style>
