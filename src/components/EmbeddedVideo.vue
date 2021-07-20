<template>
    <section class="is-flex-direction-column is-full-width" >
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
    @media screen and (max-width: 1020px){
        .video {
            width: 100%;
        }
    }
    @media screen and (max-width: 415px){
        .video {
            height: 10rem;
        }
    }
</style>