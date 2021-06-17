<template>
    <section>
        <b-pagination
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
    props: {
      items: Array
    },
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
    }
  }
</script>