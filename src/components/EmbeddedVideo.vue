<template>
    <section class="is-flex-direction-column is-full-width" >
        <h3 class="title has-text-primary is-3 mb-4">{{ item.description }}</h3>
        <iframe
            class="video" 
            :src="item.url" 
            frameborder="0"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
        height: 30rem;
        position: relative;
        width: 75%;
    }
    /* Mobile Device Styling */
    @media screen and (max-width: 1024px){
        .video {
            width: 100%;
        }
    }
    @media screen and (max-width: 770px){
        .video {
            height: 20rem;
        }
    }
    @media screen and (max-width: 415px){
      .video {
        height: 12rem;
        width: 120%;
        margin-left: -1.5rem;
      }
  }
</style>