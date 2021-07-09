<template>
    <section>
      <article class='container my-6'>
        <p class='title has-text-primary is-3'>{{ item.title }}</p>
        <div class="my-6 is-flex is-justify-content-center photo" @click="redirectToPhoto">
          <b-image 
            :src='item.url'
            :srcset="sourceSet"
            :alt='item.description'
            class="img-load"
          />
        </div>
        <div class="margin">
          <p class="is-size-5">{{ item.text }}</p>
        </div>
      </article>
      <b-pagination
        :items="items"
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
  import { redirectToPhoto, cacheLastPage } from "@/mixins";

  export default {
    name: 'Pagination',
    props: ['items'],
    mixins: [ redirectToPhoto, cacheLastPage ],
    data() {
      return {
        total: 6,
        current: 1,
        perPage: 1,
        rangeBefore: 5,
        rangeAfter: 5,
        order: 'is-centered',
        size: '',
        isSimple: false,
        isRounded: false,
        prevIcon: 'chevron-left',
        nextIcon: 'chevron-right'
      }
    },
    computed: {
      item() {
        const index = this.current - 1;
        return this.items[index];
      },
      sourceSet() {
        return `${this.item.photo} 0.5x`
      }
    },
    mounted() {
      this.cacheLastPage(this);
    }
  }
</script>

