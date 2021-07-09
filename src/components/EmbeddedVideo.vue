<template>
    <section class="is-flex-direction-column is-full-width " >
        <h3 class="title has-text-primary is-3 mb-4">{{ item.description }}</h3>
        <iframe
            class="video" 
            :src="item.url" 
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </section>
</template>

<script>
    export default {
        name: 'EmbeddedVideo',
        props: ['item']
    }
</script>

<style>
    .video {
        max-height: 100%;
        position: relative;
        width: 75%;
        height: 30rem;
    }
    /* Mobile Device Styling */
    @media screen and (max-width: 1020px){
        .video {
            max-height: 100%;
            max-width: 100%;
        }
    }
    @media screen and (max-width: 770px){
        .video {
            height: 20rem;
        }
    }
    @media screen and (max-width: 420px){
      .video {
        height: 12rem;
        width: 130%;
      }
    }
    @media screen and (max-width: 380px){
      .video {
        height: 12rem;
        max-width: 150%;
        margin-left: -2.2rem;
      }
    }
</style>