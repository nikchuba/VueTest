<template>
    <div class="genres" @click="test">
        <div class="genre" v-for="genre in genres" :key="genre.name" :style="{background: genre.color}">
            <img :src="genre.smile" alt="">
            <p>{{genre.name}}{{url}}</p>
        </div>
    </div>
</template>

<script>
import Comedy from "../assets/img/Comedy.svg"
import Drama from "../assets/img/Drama.svg"
import Fantasy from "../assets/img/Fantasy.svg"
import Horrors from "../assets/img/Horrors.svg"
import Data from "../assets/json/genres.json"

export default {
    data: ()=>{
        return {
            genres: Data.genres,
            smiles: [Comedy, Drama, Fantasy, Horrors]
        }
    },
    methods: {
        test(){
            for(let i=0; i<this.smiles.length; i++){
                if(this.genres[i].smile === this.smiles[i].slice(5, this.smiles[i].length - 13)){
                    var url = this.smiles[i];
                    this.genres[i].smile = url;
                    return this.genres[i].smile
                }
            }
        }
        // img(){
        //     for(let i=0; i<Data.genres.length; i++)
        //         return Data.genres[i].smile = Comedy
        // }
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