<template>
   <div class="container">
      <div class="row">
         <h1 class="text-center text-white p-2" v-if="store.filmListApi.length == 0">Choisir un film</h1>
         <div class="col-3" v-for="(card, index) in store.filmListApi" :key="index">
            <CardMovies :image="card.poster_path" :title="card.title" :originalTitle="card.original_title"
               :language="card.original_language.toUpperCase()" :vote="card.vote_average" :overview="card.overview" />
         </div>
      </div>
   </div>
   <div class="container">
      <div class="row">
         <h1 v-if="store.filmListApi.length != 0" class="text-white text-center fw-bold py-4">SERIE TV</h1>
         <div class="col-3" v-for="(card, index) in store.tvListApi" :key="index">
            <CardTv :image="card.poster_path" :name="card.name" :originalName="card.original_name"
               :language="card.original_language.toUpperCase()" :vote="card.vote_average" :overview="card.overview" />
         </div>

      </div>
   </div>
</template>

<script>
import { store } from '../store.js';
import CardMovies from "./CardMovies.vue"
import CardTv from "./CardTv.vue"


export default {

   components: {
      CardTv,
      CardMovies
   },
   data() {
      return {
         store,
      }
   }
}

</script>



<style lang="scss" scoped>
@use '../styles/general.scss';
</style>