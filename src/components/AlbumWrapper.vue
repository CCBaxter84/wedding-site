<template>
  <main class='m-3'>
    <Title :title='name'/>
    <PhotoAlbum :items='items' :isFetching='isFetching'/>
  </main>
</template>

<script>
  import axios from 'axios';
  import Title from '@/components/Title.vue';
  import PhotoAlbum from '@/components/PhotoAlbum.vue';

  export default {
    name: 'AlbumWrapper',
    props: ['name'],
    components: { Title, PhotoAlbum },
    data() {
      return {
        items: [],
        isFetching: false
      }
    },
    async created() {
      try {
        this.isFetching = true;
        const { data } = await axios.get(`/.netlify/functions/get${this.name}Links`);
        this.items = data;
        this.isFetching = false;
      } catch(error) {
        console.log(error);
      }
    }
  }
</script>