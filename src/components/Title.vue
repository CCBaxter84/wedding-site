<template>
    <article class='container is-fullwidth my-3'>
      <p :class="titleSize" class='title has-text-primary mb-3 is-flex-wrap-nowrap'>{{ title }}</p>
    </article>
</template>

<script>
  import getScreenSize from "@/mixins/getScreenSize";
  export default {
      name: 'Title',
      props: {
        title: String
      },
      mixins: [getScreenSize],
      computed: {
        titleSize() {
          return this.screenSize[0] < 415 ? "is-3" : "is-2";
        }
      }
  }
</script>