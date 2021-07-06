<template>
  <div class="films">
    <section>
      <p class="new">🔥 Новинки</p>
      <new-films></new-films>
    </section>
    <section>
      <p class="genres">Жанры</p>
      <genres></genres>
    </section>
  </div>
</template>

<script>
import NewFilms from "../components/NewFilms.vue";
import Genres from "../components/Genres.vue";

export default {
  components: {
    NewFilms,
    Genres
  }
};
</script>

<style scoped>
p {
  font-family: Rubik-Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #333333;
  margin-top: 32px;
  margin-bottom: 16px;
}

section {
  display: flex;
  flex-direction: column;
  width: 1180px;
}
</style>
