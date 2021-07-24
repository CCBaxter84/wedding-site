<template>
  <AlbumWrapper name='Videos'/>
</template>

<script>
  import AlbumWrapper from '@/components/AlbumWrapper.vue';
  import useLocalStorageForMedia from "@/mixins/useLocalStorageForMedia";

  export default {
    name: 'Videos',
    components: { AlbumWrapper },
    mixins: [ useLocalStorageForMedia ],
    mounted() {
      this.cacheLastPage("videos");
    },
    destroyed() {
      localStorage.clear();
    }
  }
</script>


