// creo store.js il mio magazzino generale con tutti i componenti senza dover fare il passaggio tramite props o tramite emit


import { reactive } from 'vue';

export const store = reactive(
   {
      filmListApi: [],
      risultatoFilm: false,
      tvListApi: [],
      risultatoTv: false,
      input: '',
   }
);

