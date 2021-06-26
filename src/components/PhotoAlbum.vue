<template>
    <section>
        <article class='container my-5'>
            <div class="mt-3 is-flex is-justify-content-center is-hoverable" @click="redirectToPhoto">
                <b-image 
                    v-if="!isFetching"
                    :src="item.url"
                    :alt='item.description'
                    class='image'
                    
                />
            </div>
        </article>
        <b-pagination
            :items="items"
            :current.sync="current"
            :total="total"
            v-model="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label='Next page'
            aria-previous-label='Previous page'
            aria-page-label='Page'
            aria-current-label='Current page'
        />
    </section>
</template>

<script>
export default {
    name: 'PhotoAlbum',
    props: ['items', 'isFetching'],
    data() {
      return {
        current: 1,
        perPage: 1,
        rangeBefore: 3,
        rangeAfter: 3,
        order: 'is-centered',
        size: '',
        isSimple: false,
        isRounded: false,
        prevIcon: 'chevron-left',
        nextIcon: 'chevron-right'
      }
    },
    computed: {
        total() {
            return this.items ? this.items.length : 0;
        },
        item() {
            if (this.items) {
                const index = this.current - 1;
                return this.items[index];
            } else {
                return {
                    _id: '',
                    url: ''
                }
            }
        }
    },
    methods: {
        redirectToPhoto() {
            localStorage.setItem('last-page', this.current);
            window.location.href = this.item.url;
        }
    },
    mounted() {
      const lastPage = Number(localStorage.getItem('last-page'));
      if (lastPage) {
        this.current = lastPage;
        localStorage.clear();
      } 
    }
}
</script>

<style scoped>
  figure:hover {
    cursor: pointer;
  }
</style>