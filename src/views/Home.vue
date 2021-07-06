<template>
  <main class="mx-6">
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

  export default {
    name: "Home",
    components: {
      Title,
      Loading,
      EmbeddedVideo
    },
    data() {
      return {
        item: {
          description: "The Clarks' Wedding Website"
        },
        isLoading: false
      }
    },
    async created() {
      this.isLoading = true;
      const { data } = await axios.get('/api/home');
      this.item.url = data.getLink.url;
      this.isLoading = false;
    }
  }
</script>