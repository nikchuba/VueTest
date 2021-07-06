<template>
  <div class="genres">
    <div
      class="genre"
      v-for="genre in genres"
      :key="genre.name"
      :style="{ background: genre.color }"
    >
      <img :src="smiles[genre.smile]" alt="" />
      <p>{{ genre.name }}</p>
    </div>
  </div>
</template>

<script>
import Comedy from "../assets/img/Comedy.svg";
import Drama from "../assets/img/Drama.svg";
import Fantasy from "../assets/img/Fantasy.svg";
import Horrors from "../assets/img/Horrors.svg";
import Data from "../assets/json/data.json";

export default {
  data: () => {
    return {
      genres: Data.genres,
      smiles: { Comedy, Drama, Fantasy, Horrors }
    };
  }
};
</script>

<style scoped>
.genres {
  display: flex;
  justify-content: space-between;
  width: 1180px;
  height: 208px;
}
.genre {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 208px;
  opacity: 0.8;
  box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  transition: 0.5s;
  cursor: pointer;
}
.genre:hover {
  opacity: 1;
  transition: 0.3s;
}
p {
  position: absolute;
  top: 160px;
  font-family: Rubik-Regular;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}
</style>
