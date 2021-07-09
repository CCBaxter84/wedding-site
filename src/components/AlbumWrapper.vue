<template>
  <main :class='margin'>
    <Title :title='name'/>
    <Album :items='items' :isFetching='isFetching'/>
  </main>
</template>

<script>
  import axios from 'axios';
  import Title from '@/components/Title.vue';
  import Album from '@/components/Album.vue';
  import getScreenSize from "@/mixins/getScreenSize";

  export default {
    name: 'AlbumWrapper',
    props: ['name'],
    components: { Title, Album },
    mixins: [getScreenSize],
    data() {
      return {
        items: [],
        isFetching: false
      }
    },
    computed: {
      margin() {
        return this.screenSize[0] < 415 ? "m-0" : "m-3";
      }
    },
    async created() {
      try {
        this.isFetching = true;
        let formattedName = this.name.replace(/\s/g, "");
        if (this.name === 'Puppies') {
          formattedName = 'All';
        }
        const { data } = await axios.get(`/.netlify/functions/get${formattedName}Links`);
        if (this.name === 'Puppies') {
          this.items = data.filter(item => {
              return item.description.includes('Nova') || item.description.includes('Revan') || item.description.includes('Puppies');
            });
        } else {
          this.items = data;
        }
        this.isFetching = false;
      } catch(error) {
        console.log(error);
      }
    }
  }
</script>