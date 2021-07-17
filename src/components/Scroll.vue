<template>
    <Loading v-if="isFetching"/>
    <section v-else>
      <article v-for='item in items' :key='item.url' class="container my-6">
        <p class="title has-text-primary is-3">{{ item.title }}</p>
        <div class="my-6 is-flex is-justify-content-center photo" @click="redirectToPhoto(item)">
          <b-image 
            :src="item.url"
            :alt="item.description"
            class="img-load"
          />
        </div>
        <div class="mb-6">
          <p class="is-size-5">{{ item.text }}</p>
        </div>
      </article>
    </section>
</template>

<script>
    import Loading from '@/components/Loading';
    import { redirectToPhoto } from "@/mixins";

    export default {
        name: "Scroll",
        components: { Loading },
        props: [ "items", "isFetching" ],
        mixins: [ redirectToPhoto ],
        methods: {
            isVideo(url) {
                return url.includes("Video");
            }
        }
    }
</script>