<template>
  <Loading v-if="isFetching"/>
  <main v-else class="m-3">
    <section>
      <article class="container my-5 is-fullwidth">
      </article>
    </section>
  </main>
</template>

<script>
  import Loading from "@/components/Loading";
  import { mapMutations } from "vuex";
  import http from "@/http";

  export default {
    name: 'Videos',
    components: { Loading },
    computed: {
      isFetching() {
        return this.$store.state.isFetching;
      }
    },
    methods: {
      ...mapMutations([
        "setIsFetching"
      ])
    },
    async created() {
      try {
        const { data } = await http.get("getVideosLinks");
        console.log(data);
      } catch(error) {
        console.log(error);
      }
    }
  }
</script>


