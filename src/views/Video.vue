<template>
    <main class="m-3">
        <Title title="Video"/>
        <iframe 
            class="video" 
            src="https://www.youtube.com/embed/nJ81DFmgHdU" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        />
    </main>
</template>

<script>
    import Title from '@/components/Title.vue';

    export default {
        name: 'Video',
        components: { Title }
    }
</script>

<style scoped>
    .video {
        position: relative;
        height: 30rem;
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