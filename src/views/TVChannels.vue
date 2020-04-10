<template>
  <div class="tv">
    <tv-channel v-for="tvchannel in tvchannels" :key="tvchannel.name" v-bind:tvchannels="tvchannel"></tv-channel>
  </div>
</template>

<script>
import TVChannel from "../components/TVChannel.vue"
import FirstIMG from "../assets/img/First.svg"
import TwoByTwoIMG from "../assets/img/2x2.svg"
import RBKIMG from "../assets/img/RBK.svg"
import AmediaIMG from "../assets/img/Amedia.svg"



export default {
  components: {
    'tv-channel': TVChannel
  },
  data(){
    return{
      tvchannels: [
        {
          logo: FirstIMG, 
          name: 'Первый канал', 
          broadcasts: {id: { 1: 'Новости (с субтитрами)', 2:'Давай поженимся', 3:'Другие новости'}}
        },
        {
          logo: TwoByTwoIMG, 
          name: '2x2', 
          broadcasts: {id: { 1: 'МУЛЬТ ТВ. Сезон 4, 7 серия', 2:'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия', 3:'БУРДАШЕВ. Сезон 1, 20 серия'}}
        },
        {
          logo: RBKIMG, 
          name: 'РБК', 
          broadcasts: {id: { 1: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС', 2:'ДЕНЬ. Главные темы', 3:'Главные новости'}}
        },
        {
          logo: AmediaIMG, 
          name: 'AMEDIA PREMIUM', 
          broadcasts: {id: { 1: 'Клиент всегда мёртв', 2:'Голодные игры: Сойка-пересмешница. Часть I', 3:'Секс в большом городе'}}
        },
        {
          logo: FirstIMG, 
          name: 'Первый кана', 
          broadcasts: {id: { 1: 'Новости (с субтитрами)', 2:'Давай поженимся', 3:'Другие новости'}}
        }
      ]
    }
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