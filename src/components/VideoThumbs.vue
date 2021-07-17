<template>
  <section 
    class="container is-flex is-flex-wrap-wrap is-justify-content-space-around is-align-items-center mx-6">
        <article 
            v-for="(item, index) in items" 
            :key="item.id"
            class="my-6 mx-4 is-flex is-flex-direction-column is-justify-content-flex-end thumbnail"
        >
            <p class="title has-text-primary is-4">{{ item.description }}</p>
            <img 
                :src="item.thumbnail" 
                :alt="item.description"
                class="is-align-self-flex-end"
                @click="toggleShowModal"
                :name="index"
            />
        </article>
        <b-modal v-model="showModal">
            <EmbeddedVideo :item="item"/>
        </b-modal>
  </section>
</template>

<script>
    import EmbeddedVideo from '@/components/EmbeddedVideo';
    export default {
        name: "VideoThumbs",
        props: ["isFetching", "items"],
        components: { EmbeddedVideo },
        data() {
            return {
                showModal: false,
                item: {}
            }
        },
        methods: {
            toggleShowModal(event) {
                const { name } = event.target;
                this.showModal = !this.showModal;
                this.item = this.items[name];
            }
        }
    }
</script>

<style scoped>
    .thumbnail {
        height: 18rem;
        width: 8rem;
    }
    img:hover {
        cursor: pointer;
    }
</style>

