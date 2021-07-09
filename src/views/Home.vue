<template>
  <main :class="margin">
    <Title title="Welcome"/>
     <article class="container my-5">
       <div class="mt-3 is-flex is-justify-content-center">
          <Loading v-if="isLoading"/>
          <Embedded-Video v-else :item="item"/>
       </div>
     </article>
  </main>
</template>

<script>
  import axios from "axios";
  import Title from "@/components/Title.vue";
  import Loading from "@/components/Loading.vue";
  import EmbeddedVideo from "@/components/EmbeddedVideo.vue";
  import getScreenSize from "@/mixins/getScreenSize";
  
  export default {
    name: "Home",
    components: {
      Title,
      Loading,
      EmbeddedVideo
    },
    mixins: [getScreenSize],
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
        return this.screenSize[0] < 415 ? "mx-1" : "mx-4";
      },
    },
    async created() {
      this.isLoading = true;
      const { data } = await axios.get("/api/home");
      this.item.url = data.getLink.url;
      this.isLoading = false;
    }
  }
</script>