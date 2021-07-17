<template>
  <section 
    class="container is-flex is-flex-wrap-wrap is-justify-content-space-around is-align-items-center mx-6">
        <article 
            v-for="item in items" 
            :key="item.id"
            class="mx-3 mb-6"
        >
            <p>{{ item.description }}</p>
            <img src="./Highlights_thumb.jpeg" alt="">
      </article>
  </section>
</template>

<script>
    export default {
        name: "VideoThumbs",
        props: ["isFetching", "items"]
    }
</script>


