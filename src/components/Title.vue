<template>
    <article class='container is-fullwidth my-3'>
      <p class='title has-text-primary is-2 mb-3 is-flex-wrap-nowrap'>{{ title }}</p>
    </article>
</template>

<script>
export default {
    name: 'Title',
    props: {
      title: String
    }
}
</script>