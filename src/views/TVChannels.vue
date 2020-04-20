<template>
  <div class="tv">
    <tv-channel></tv-channel>
  </div>
</template>

<script>
import TVChannel from "../components/TVChannel.vue"




export default {
  components: {
    'tv-channel': TVChannel
  }
}
</script>

<style>

.tv{
  max-width: 1196px;
  max-height: 696px;
  overflow: auto;
  padding-right: 8px;
  margin-left: 16px;
  margin-top: 27px;
}

.tv::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tv::-webkit-scrollbar-track {
  background: #F2F2F2;
  border-radius: 2px;
}

.tv::-webkit-scrollbar-thumb {
  background: #BDBDBD;
  border-radius: 4px;
  border: 2px solid #F2F2F2;
}

</style>