<template>
    <div class="genres">
        <div class="genre" v-for="genre in genres" :key="genre.smile" :style="{background: genre.color}">
            <img :src="genre.smile" alt="" srcset="">
            <p>{{genre.name}}</p>
        </div>
    </div>
</template>

<script>
import Comedy from "../assets/img/Comedy.svg"
import Drama from "../assets/img/Drama.svg"
import Fantasy from "../assets/img/Fantasy.svg"
import Horrors from "../assets/img/Horrors.svg"

export default {
    data(){
        return{
            genres: [
                {smile: Comedy, name: 'Комедии', color: 'linear-gradient(136.27deg, #F2C94C 8.44%, #F29A4A 91.36%)'},
                {smile: Drama, name: 'Драмы', color: 'linear-gradient(136.27deg, #F2994A 8.44%, #EB5757 91.36%)'},
                {smile: Fantasy, name: 'Фантастика', color: 'linear-gradient(136.27deg, #56CCF2 8.44%, #2F80ED 91.36%)'},
                {smile: Horrors, name: 'Ужасы', color: 'linear-gradient(136.27deg, #828282 8.44%, #333333 91.36%)'}
            ]
        }
    }
}
</script>

<style scoped>
.genres{
    display: flex;
    justify-content: space-between;
    width: 1180px;
    height: 208px;
}
.genre{
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
.genre:hover{
    opacity: 1;
    transition: 0.3s;
}
p{  
    position: absolute;
    top: 160px;
    font-family: Rubik-Regular;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
}
</style>