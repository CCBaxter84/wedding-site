<template>
  <main class='m-3'>
    <Title :title='name'/>
    <Album :items='items' :isFetching='isFetching'/>
  </main>
</template>

<script>
  import axios from 'axios';
  import Title from '@/components/Title.vue';
  import Album from '@/components/Album.vue';

  export default {
    name: 'AlbumWrapper',
    props: ['name'],
    components: { Title, Album },
    data() {
      return {
        items: [],
        isFetching: false
      }
    },
    async created() {
      try {
        this.isFetching = true;
        const { data } = await axios.get(`/api/${this.name}`);
        this.items = data;
        this.isFetching = false;
      } catch(error) {
        console.log(error);
      }
    }
  }
</script>