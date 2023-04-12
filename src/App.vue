<script>
import axios from 'axios';
import { store } from './store.js';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import CardMovies from './components/CardMovies.vue';


export default {
  components: {
    TheHeader,
    TheMain,
    CardMovies,

  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    let urlApi = 'https://api.themoviedb.org/3/movie/550?api_key=5e0f419894e6d88c4012aef540b7852b';
    //urlApi += store.input.replace(" ", "+")

    axios.get(urlApi).then(response => {
      this.store.filmListApi = response.data.results;
    });

    if (this.store.filmListApi.length == 0) {
      this.store.risultatoFilm = true
    }

    let urlApiTv = 'https://api.themoviedb.org/3/search/tv?api_key=5e0f419894e6d88c4012aef540b7852b&language=it_IT&query='
    urlApiTv += store.input.replace(" ", "+")

    axios.get(urlApiTv).then(response => {
      this.store.tvListApi = response.data.results;
    });

    if (this.store.tvListApi.length == 0) {
      this.store.risultatoTv = true
    }
  },
  methods: {
    getFilm() {

      let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=5e0f419894e6d88c4012aef540b7852b&language=it-IT&query=';
      urlApi += store.input.replace(" ", "+")

      axios.get(urlApi).then(response => {
        this.store.filmListApi = response.data.results;
      });

      if (this.store.filmListApi.length == 0) {
        this.store.risultatoFilm = true
      }

      let urlApiTv = 'https://api.themoviedb.org/3/search/tv?api_key=5e0f419894e6d88c4012aef540b7852b&language=it_IT&query='
      urlApiTv += store.input.replace(" ", "+")

      axios.get(urlApiTv).then(response => {
        this.store.tvListApi = response.data.results;
      });

      if (this.store.tvListApi.length == 0) {
        this.store.risultatoTv = true
      }
      console.log(this.store.filmListApi)
      console.log(this.store.tvListApi)

      // console.log(store.filmListApi)


    }
  }
}
</script>

<template>
  <body>
    <TheHeader @cercaFilm="getFilm" />
    <TheMain></TheMain>
  </body>
</template>

<style lang="scss">
@use './styles/general.scss';

body {
  background-color: rgba($color: #000000, $alpha: 0.5);
  min-height: 100vh;
}
</style>
