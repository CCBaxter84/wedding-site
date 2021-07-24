<template>
    <section class="is-flex-direction-column is-full-width" >
        <iframe
            class="video" 
            :src="item.url" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ref="iframe"
        /> 
    </section>
</template>

<script>
    export default {
        name: 'EmbeddedVideo',
        props: ['item'],
        mounted() {
            this.$refs.iframe.addEventListener("webkitfullscreenchange", () => {
                if (!document.fullscreenElement) {
                    localStorage.setItem("last-item", this.$route.name);
                }
            });
        },
        beforeDestroy() {
            this.$refs.iframe.addEventListener("webkitfullscreenchange", () => {
                if (!document.fullscreenElement) {
                    localStorage.setItem("last-item", this.$route.name);
                }
            });
        }
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