<template>
    <div class="new-films">
        <div class="film" v-for="film in films" :key="film.name">
            <div class="film-card" v-bind:style="{backgroundImage: 'url(' + url[film.img] + ')'}">
                <div class="specification">
                    {{film.text}}
                </div>
            </div>
            <p>{{film.name}}</p>
        </div>
    </div>
</template>

<script>
import Cartoon from '../assets/img/Cartoon.png'
import Batman from '../assets/img/Batman.png'
import Hollywood from '../assets/img/Hollywood.png'
import Strippers from '../assets/img/Strippers.png'
import Data from '../assets/json/data.json'

export default {
    data(){
        return{
            films: Data.filmCards,
            url: {Cartoon, Batman, Hollywood, Strippers}
        }
    }
}
</script>

<style scoped>
.new-films{
    display: flex;
    justify-content: space-between;
}

.film {
    width: 280px;
}

.film-card{
    width: 280px;
    height: 370px;
    border-radius: 8px;
    background-size: cover;
    margin-bottom: 16px;
    cursor: pointer
}
.specification{
    font-family: Rubik-Regular;
    padding: 16px;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #F2F2F2;
    background: #333333;
    opacity: 0;
    height: 100%;
    border-radius: inherit;
    transition: 0.5s;
}
.specification:hover{
    opacity: 0.8;
    transition: 0.3s;
}
p {
    font-family: Rubik-Regular;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
}
</style>