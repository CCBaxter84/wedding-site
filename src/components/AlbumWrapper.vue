<template>
  <main :class="margin">
    <Title :title="name"/>

    <VideoThumbs 
      v-if="name === 'Videos'"
      :isFetching="isFetching"
      :items="items"
      :isSmallScreen="isSmallScreen"
    />
    <Album v-else :items="items" :isFetching="isFetching"/>
  </main>
</template>

<script>
  import { mapMutations } from "vuex";
  import Title from "@/components/Title.vue";
  import Album from "@/components/Album.vue";
  import VideoThumbs from "@/components/VideoThumbs.vue";
  import useScreenSize from "@/mixins/useScreenSize";
  import http from "@/http";

  export default {
    name: "AlbumWrapper",
    props: ["name"],
    components: { Title, Album, VideoThumbs },
    mixins: [ useScreenSize ],
    data() {
      return {
        items: []
      }
    },
    computed: {
      margin() {
        return this.isSmallScreen ? "m-0" : "m-3";
      },
      isSmallScreen() {
        return this.screenSize[0] < 415;
      },
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
        this.setIsFetching(true);
        let formattedName = this.name.replace(/\s/g, "");
        if (this.name === "Puppies") {
          formattedName = "All";
        }
        const { data } = await http.get(`get${formattedName}Links`);
        if (this.name === "Puppies") {
          this.items = data.filter(item => {
              return item.description.includes("Nova") || item.description.includes("Revan") || item.description.includes("Puppies");
            });
        } else {
          this.items = data;
        }
        this.setIsFetching(false);
      } catch(error) {
        console.log(error);
      }
    }
  }
</script>