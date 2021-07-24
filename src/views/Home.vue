<template>
  <main :class="margin">
    <Title title="The Clarks' Wedding"/>
     <article class="container my-5">
       <div class="mt-3 is-flex is-justify-content-center">
          <Loading v-if="isLoading"/>
          <Embedded-Video v-else :item="item"/>
       </div>
     </article>
  </main>
</template>

<script>
  import http from "@/http";
  import Title from "@/components/Title.vue";
  import Loading from "@/components/Loading.vue";
  import EmbeddedVideo from "@/components/EmbeddedVideo.vue";
  import { isSmallScreen } from "@/mixins";
  import useScreenSize from "@/mixins/useScreenSize";
  import useLocalStorageForMedia from "@/mixins/useLocalStorageForMedia";
  
  export default {
    name: "Home",
    components: {
      Title,
      Loading,
      EmbeddedVideo
    },
    mixins: [ useScreenSize, isSmallScreen, useLocalStorageForMedia ],
    data() {
      return {
        item: {
          description: "The Clarks' Wedding Website"
        },
        isLoading: false
      }
    },
    computed: {
      margin() {
        return this.isSmallScreen ? "mx-1" : "mx-4";
      },
    },
    async created() {
      this.isLoading = true;
      const { data } = await http.get("/getHomeVideoLink");
      this.item.url = data.getLink.url;
      this.isLoading = false;
    },
    mounted() {
      this.cacheLastPage("Home");
    },
    destroyed() {
      localStorage.clear();
    }
  }
</script>